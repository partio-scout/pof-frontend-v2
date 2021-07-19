import path from 'path';
import { CreatePagesArgs } from 'gatsby';
import { getAllActivities } from './src/queries/activity';

const generateRouteName = (name: string) => name.toLowerCase().split(' ').join('-');

const makeRequest = (graphql, request: string) =>
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

  const getArticles = makeRequest(graphql, getAllActivities).then((result) => {
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
  return getArticles;
};
