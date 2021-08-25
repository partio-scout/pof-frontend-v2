import { Node, SourceNodesArgs } from 'gatsby';
import {
  StrapiAgeGroup,
  StrapiActivityGroup,
  StrapiActivity,
  Maybe,
  StrapiFrontPage,
  StrapiFrontPageNavigation,
} from '../graphql-types';
import { parseActivityRouteName, parseAgeGroupRouteName } from './utils';

interface ContentNavigationItem {
  title: string;
  path: string;
  subitems?: ProgramNavItem[];
  type: string;
  id: number;
}
interface ProgramNavItem extends ContentNavigationItem { 
  minimum_age?: number;
  maximum_age?: number;
}

/**
 * Reads navigation data from StrapiFrontPage nodes and write them as Navigation nodes.
 * NOTE: The Navigation nodes only contain navigation for content pages and NOT for program data (ageGroups, activityGroups and activities).
 */
function createContentNavigationNodes(args: SourceNodesArgs) {
  const { getNodesByType, actions, createContentDigest } = args;
  const nodes = getNodesByType('StrapiFrontPage');

  for (const node of nodes) {
    const { createNode } = actions;

    const frontPage = node as unknown as StrapiFrontPage;

    const navigationItemFilter = (navigationItem: Maybe<StrapiFrontPageNavigation>) =>
      navigationItem?.id && navigationItem.title && navigationItem.page?.id;

    const navigationData: ContentNavigationItem[] =
      frontPage.navigation?.filter(navigationItemFilter).map((navigationItem) => ({
        title: navigationItem?.title!,
        type: 'ContentPage',
        id: navigationItem?.page?.id!,
        path: '/' + parseActivityRouteName(navigationItem?.page?.title!),
        subitems: navigationItem?.subnavigation?.filter(navigationItemFilter).map((subitem) => ({
          title: subitem?.title!,
          type: 'ContentPage',
          id: subitem?.page?.id!,
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
          type: 'Content_Navigation',
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
}

function createProgramNavigationNodes(args: SourceNodesArgs) {
  const { getNodesByType, actions, createContentDigest } = args;
  const { createNode, createNodeField } = actions;

  const getNodesByLocale = <TYPE extends { locale?: Maybe<string> }>(type: string) =>
    getNodesByType(type).reduce((prev, curr) => {
      const data = curr as unknown as TYPE;

      prev[data.locale!] = [...(prev[data.locale!] || []), data];

      return prev;
    }, {} as Record<string, TYPE[]>);

  const ageGroups = Object.entries(getNodesByLocale<StrapiAgeGroup>('StrapiAgeGroup'));

  const activityGroups = getNodesByLocale<StrapiActivityGroup>('StrapiActivityGroup');

  const activities = getNodesByLocale<StrapiActivity>('StrapiActivity');

  const localeNavigations = ageGroups.map(([locale, ageGroups]) => {
    console.log('Creating ageGroup navigation for locale', locale);

    const items: ProgramNavItem[] = [];

    for (const ageGroup of ageGroups) {
      const ageGroupPath = '/' + parseAgeGroupRouteName(ageGroup.title!);
      
      const ageGroupNav: ProgramNavItem = {
        title: ageGroup.title!,
        type: 'AgeGroup',
        id: ageGroup.strapiId!,
        path: ageGroupPath,
        subitems: [],
        minimum_age: ageGroup.minimum_age || undefined,
        maximum_age: ageGroup.maximum_age || undefined,
      };

      createNodeField({
        node: ageGroup as unknown as Node,
        name: 'path',
        value: ageGroupPath,
      });

      for (const activityGroup of ageGroup.activity_groups || []) {
        if (!activityGroup?.id) continue;

        const properActivityGroup = activityGroups[locale].find((x) => x.strapiId === activityGroup.id);

        if (!properActivityGroup) continue;

        const activityGroupPath = ageGroupNav.path + '/' + parseActivityRouteName(properActivityGroup.title!);

        const activityGroupNav: ProgramNavItem = {
          title: properActivityGroup.title!,
          type: 'ActivityGroup',
          id: properActivityGroup.strapiId!,
          path: activityGroupPath,
          subitems: [],
        };

        createNodeField({
          node: properActivityGroup as unknown as Node,
          name: 'path',
          value: activityGroupPath,
        });

        for (const activity of properActivityGroup.activities || []) {
          if (!activity?.id) continue;

          const properActivity = activities[locale].find((x) => x.strapiId === activity.id);

          if (!properActivity) continue;

          const activityPath = activityGroupNav.path + '/' + parseActivityRouteName(properActivity.title!);

          const activityNav: ProgramNavItem = {
            title: properActivity.title!,
            type: 'Activity',
            id: properActivity.strapiId!,
            path: activityPath,
          };

          createNodeField({
            node: properActivity as unknown as Node,
            name: 'path',
            value: activityPath,
          });

          activityGroupNav.subitems?.push(activityNav);
        }

        ageGroupNav.subitems?.push(activityGroupNav);
      }

      items?.push(ageGroupNav);
    }
    return { locale, navigation: items };
  });

  for (const localeNavigation of localeNavigations) {
    createNode(
      {
        id: 'strapi-program-navigation-' + localeNavigation.locale,
        children: [],
        parent: null,
        internal: {
          type: 'Program_Navigation',
          contentDigest: createContentDigest(localeNavigation.navigation),
        },
        items: localeNavigation.navigation,
      },
      {
        name: 'custom-strapi-data-plugin',
      },
    );
  }
}

const sourceNodes = async (args: SourceNodesArgs) => {
  createContentNavigationNodes(args);
  createProgramNavigationNodes(args);
};

export default sourceNodes;
