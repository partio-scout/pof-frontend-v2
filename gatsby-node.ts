import path from 'path';
import { CreatePagesArgs, CreateNodeArgs, Node, Actions } from 'gatsby';
import { getAllActivities } from './src/queries/activity';
import { getAllAgeGroups } from './src/queries/ageGroup';
import { getFrontPage } from './src/queries/frontPage';
import { getContentPage } from './src/queries/contentPage';
import { StrapiFrontPage, StrapiFrontPageNavigation, StrapiContentpage } from './graphql-types';

const parseActivityRouteName = (name: string) => name.toLowerCase().split(' ').join('-');

const parseAgeGroupRouteName = (name: string) => {
  console.log(name, name.toLowerCase().split(' ')[0]);
  return name.toLowerCase().split(' ')[0];
};

const pageGenerationObjects = [
  {
    pathGenerationFunction: parseActivityRouteName,
    queryFunction: getAllActivities,
    component: path.resolve(`src/templates/activityTemplate/index.tsx`),
    dataKey: 'allStrapiActivity',
  },
  {
    pathGenerationFunction: parseAgeGroupRouteName,
    queryFunction: getAllAgeGroups,
    component: path.resolve(`src/templates/ageGroupTemplate/index.tsx`),
    dataKey: 'allStrapiAgeGroup',
  },
];

const makeRequest = (graphql: CreatePagesArgs['graphql'], request: string): Promise<{ errors?: any; data?: unknown }> =>
  new Promise((resolve, reject) => {
    resolve(
      graphql(request).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        return result;
      }),
    );
  });

exports.createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage, createNode } = actions;

  const promises = pageGenerationObjects.map((pageGenerationObject) =>
    makeRequest(graphql, pageGenerationObject.queryFunction).then((result) => {
      result.data[pageGenerationObject.dataKey].nodes.forEach((node: any) => {
        createPage({
          path: `/${pageGenerationObject.pathGenerationFunction(node.title)}`,
          component: pageGenerationObject.component,
          context: {
            data: node,
          },
        });
      });
    }),
  );

  await handleFrontPageData(graphql, createPage);

  return Promise.all(promises);
};

async function handleFrontPageData(graphql: CreatePagesArgs['graphql'], createPage: Actions['createPage']) {
  const frontPageResponse = await makeRequest(graphql, getFrontPage);
  const frontPage = (frontPageResponse.data as { strapiFrontPage: StrapiFrontPage }).strapiFrontPage as StrapiFrontPage;

  for (const navigationItem of frontPage.navigation || []) {
    // If the page's id is null, the page is not published so let's skip it
    if (!navigationItem?.page?.id) continue;

    if (navigationItem) await createNavigationLevel(graphql, createPage, navigationItem);
  }
}

async function createNavigationLevel(
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage'],
  data: StrapiFrontPageNavigation,
): Promise<void> {
  // If the page's id is null, the page is not published so let's skip it
  if (!data.id) return;

  const pagePath = '/' + parseActivityRouteName(data.title!);

  await fetchAndCreateContentPage(graphql, createPage, data.id, pagePath);

  for (const subitem of data.subnavigation || []) {
    // If the page's id is null, the page is not published so let's skip it
    if (!subitem?.page?.id) continue;

    const subPagePath = pagePath + '/' + parseActivityRouteName(subitem?.title!);

    await fetchAndCreateContentPage(graphql, createPage, subitem.page.id, subPagePath);
  }
}

async function fetchAndCreateContentPage(
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage'],
  id: number,
  pagePath: string,
) {
  const pageDataResponse = await graphql<{ strapiContentpage: StrapiContentpage }>(getContentPage, {
    id,
  });

  createPage({
    path: pagePath,
    component: path.resolve(`src/templates/contentPageTemplate/index.tsx`),
    context: {
      data: pageDataResponse.data?.strapiContentpage,
    },
  });
}

function createStrapiFrontPageNode(
  node: Node,
  actions: Actions,
  createContentDigest: CreateNodeArgs['createContentDigest'],
) {
  if (node.internal.type !== 'StrapiFrontPage') return;
  const { createNode } = actions;

  const frontPage = node as unknown as StrapiFrontPage;

  const { internal, id, parent, children, ...rest } = frontPage;

  createNode(
    {
      id: 'strapi-front-page-' + node?.id,
      children: [],
      parent: null,
      internal: {
        type: 'FrontPage',
        contentDigest: createContentDigest(node),
      },
      ...rest,
    },
    {
      name: 'custom-strapi-data-plugin',
    },
  );
}

exports.onCreateNode = ({ node, actions, createContentDigest }: CreateNodeArgs) => {
  createStrapiFrontPageNode(node, actions, createContentDigest);
};
