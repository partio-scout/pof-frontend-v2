import { Actions, CreateNodeArgs, Node } from 'gatsby';
import { Maybe, StrapiFrontPage, StrapiFrontPageNavigation } from '../graphql-types';
import { parseActivityRouteName } from './utils';

function createStrapiFrontPageNode(
  node: Node,
  actions: Actions,
  createContentDigest: CreateNodeArgs['createContentDigest'],
) {
  if (node.internal.type !== 'StrapiFrontPage') return;

  const { createNode } = actions;

  const frontPage = node as unknown as StrapiFrontPage;

  const navigationItemFilter = (navigationItem: Maybe<StrapiFrontPageNavigation>) =>
    navigationItem?.id && navigationItem.title && navigationItem.page?.id;

  const navigationData =
    frontPage.navigation?.filter(navigationItemFilter).map((navigationItem) => ({
      title: navigationItem?.title,
      path: '/' + parseActivityRouteName(navigationItem?.page?.title!),
      subitems: navigationItem?.subnavigation?.filter(navigationItemFilter).map((subitem) => ({
        title: subitem?.title,
        path:
          '/' +
          parseActivityRouteName(navigationItem?.page?.title!) +
          '/' +
          parseActivityRouteName(subitem?.page?.title!),
      })),
    })) || [];

  createNode(
    {
      id: 'strapi-navigation-' + frontPage.locale,
      children: [],
      parent: null,
      internal: {
        type: 'Navigation',
        contentDigest: createContentDigest(node),
      },
      items: navigationData,
    },
    {
      name: 'custom-strapi-data-plugin',
    },
  );
  console.log('Created navigation node', 'strapi-navigation-' + frontPage.locale);
}

const onCreateNode = ({ node, actions, createContentDigest }: CreateNodeArgs) => {
  createStrapiFrontPageNode(node, actions, createContentDigest);
};

export default onCreateNode;
