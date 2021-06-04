import path from "path";
import objectHash from "node-object-hash";
import {
    StrapiFrontpage,
    StrapiPage,
    StrapiPageSubpages,
} from "./graphql-types";
import { CreatePagesArgs } from "gatsby";

exports.createPages = async ({ graphql, actions }: CreatePagesArgs) => {
    const { createPage, createNode } = actions;

    let result = await graphql<{ strapiFrontpage: StrapiFrontpage }>(`
    {
      strapiFrontpage {
        Title
        pages {
          id
          Title
          Content
        }
        id
      }
    }
  `);

    const { strapiFrontpage } = result.data;

    const pages = await Promise.all(
        strapiFrontpage.pages.map(async (page) => await getPage(page, graphql))
    );

    createPage({
        path: "/",
        component: path.resolve("src/templates/frontpage.js"),
        context: strapiFrontpage,
    });

    const navigation = pages.map((page) => getNavigationItemFromPage(page));

    pages.forEach((page) => createPageFromPage(page, "", createPage));
};

const getNavigationItemFromPage = (page, basePath = "") => {
    const pagePath = `${basePath}/${page.Title.toLowerCase()}`;

    return {
        name: page.Title,
        path: pagePath,
        children: page.subpages.map((subpage) =>
            getNavigationItemFromPage(subpage, pagePath)
        ),
    };
};

const createPageFromPage = (page, basePath, createPage) => {
    const pagePath = `${basePath}/${page.Title.toLowerCase()}`;
    createPage({
        path: pagePath,
        component: path.resolve("src/templates/page.tsx"),
        context: page,
    });

    page.subpages.forEach((subpage) =>
        createPageFromPage(subpage, pagePath, createPage)
    );
};

const getPage = async (
    page: StrapiPageSubpages,
    graphql: CreatePagesArgs["graphql"]
): Promise<StrapiPageSubpages> => {
    let result = await graphql<{ strapiPage: StrapiPage }>(
        `
      query getPage($id: Int!) {
        strapiPage(strapiId: { eq: $id }) {
          Content
          Title
          subpages {
            Title
            id
          }
          id
          strapiId
        }
      }
    `,
        { id: page.id }
    );

    const { strapiPage } = result.data;

    strapiPage.subpages = await Promise.all(
        strapiPage.subpages.map(async (subpage) => await getPage(subpage, graphql))
    );

    const _page = { ...strapiPage, id: parseInt(strapiPage.id) };

    return _page;
};