import path from 'path';
import { CreatePagesArgs } from 'gatsby';
import { getAllActivities } from './src/queries/activity';

const generateRouteName = (name: string) => name.toLowerCase().split(' ').join('-');

const makeRequest = (graphql, request: string) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
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

  const getArticles = makeRequest(graphql, getAllActivities).then((result) => {
    // Create pages for each article.
    result.data.allStrapiActivity.edges.forEach(({ node }) => {
      createPage({
        path: `/${generateRouteName(node.title)}`,
        component: path.resolve(`src/templates/activityTemplate/index.tsx`),
        context: {
          data: node,
        },
      });
    });
  });
  // Query for articles nodes to use in creating pages.
  return getArticles;
};
