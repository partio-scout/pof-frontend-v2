import path from 'path';
import { CreatePagesArgs } from 'gatsby';
import { getAllActivities } from './src/queries/activity';
import { getAllAgeGroups } from './src/queries/ageGroup';

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

  const promises = pageGenerationObjects.map((pageGenerationObject) =>
    makeRequest(graphql, pageGenerationObject.queryFunction).then((result) => {
      result.data[pageGenerationObject.dataKey].edges.forEach(({ node }) => {
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

  return Promise.all(promises);
};
