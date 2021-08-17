import { SourceNodesArgs } from 'gatsby';
import { StrapiAgeGroup, StrapiActivityGroup, StrapiActivity, Maybe } from '../graphql-types';
import { parseActivityRouteName, parseAgeGroupRouteName } from './utils';

interface NavItem {
  title: string;
  path: string;
  subitems?: NavItem[];
}

const sourceNodes = async ({ getNodesByType, actions, createContentDigest }: SourceNodesArgs) => {
  const { touchNode, createNode } = actions;

  // touch nodes to ensure they aren't garbage collected
  getNodesByType('Navigation').forEach((node) => {
    console.log('Touching navigation node', node.id);
    touchNode(node);
  });

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

    const nav: NavItem = {
      title: 'Program',
      path: '/',
      subitems: [],
    };

    for (const ageGroup of ageGroups) {
      const ageGroupNav: NavItem = {
        title: ageGroup.title!,
        path: '/' + parseAgeGroupRouteName(ageGroup.title!),
        subitems: [],
      };

      for (const activityGroup of ageGroup.activity_groups || []) {
        if (!activityGroup?.id) continue;

        const properActivityGroup = activityGroups[locale].find((x) => x.strapiId === activityGroup.id);

        if (!properActivityGroup) continue;

        const activityGroupNav: NavItem = {
          title: properActivityGroup.title!,
          path: ageGroupNav.path + '/' + parseActivityRouteName(properActivityGroup.title!),
          subitems: [],
        };

        for (const activity of properActivityGroup.activities || []) {
          if (!activity?.id) continue;

          const properActivity = activities[locale].find((x) => x.strapiId === activity.id);

          if (!properActivity) continue;

          const activityNav: NavItem = {
            title: properActivity.title!,
            path: activityGroupNav.path + '/' + parseActivityRouteName(properActivity.title!),
          };

          activityGroupNav.subitems?.push(activityNav);
        }

        ageGroupNav.subitems?.push(activityGroupNav);
      }

      nav.subitems?.push(ageGroupNav);
    }
    return { locale, navigation: nav };
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
};

export default sourceNodes;
