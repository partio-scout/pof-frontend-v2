import { Node, SourceNodesArgs } from 'gatsby';
import axios, { AxiosError } from 'axios';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import Path from 'path';
import {
  StrapiAgeGroup,
  StrapiActivityGroup,
  StrapiActivity,
  Maybe,
  StrapiFrontPage,
  StrapiFrontPageNavigation,
  StrapiFrontPageNavigationSubnavigation,
} from '../graphql-types';
import { parseRouteName, parseAgeGroupRouteName } from './utils';
import { locales } from '../src/types/locale';

interface ContentNavigationItemFirstLevel {
  title: string;
  subitems?: ContentNavigationItem[];
}
interface ContentNavigationItem extends ContentNavigationItemFirstLevel {
  path: string;
  subitems?: ProgramNavItem[];
  type: string;
  id: number;
}
interface ProgramNavItem extends ContentNavigationItem {
  minimum_age?: number;
  maximum_age?: number;
  color?: string;
}

const mapNavigationItems = (
  items?: Maybe<Maybe<StrapiFrontPageNavigationSubnavigation>[]>,
  rootPath?: string,
): ContentNavigationItem[] => {
  return (
    items?.filter(subNavigationItemFilter).map((item) => {
      const path = `${rootPath || ''}/${parseRouteName(item?.title!)}`;

      return {
        title: item?.title!,
        type: 'ContentPage',
        id: item?.page?.id!,
        path,
        subitems: mapNavigationItems(item?.subnavigation, path),
      };
    }) || []
  );
};

const firstLevelNavigationItemFilter = (navigationItem: Maybe<Pick<StrapiFrontPageNavigation, 'id' | 'title'>>) =>
  navigationItem?.id && navigationItem.title;

const subNavigationItemFilter = (
  navigationItem: Maybe<Pick<StrapiFrontPageNavigationSubnavigation, 'id' | 'title' | 'page'>>,
) => navigationItem?.id && navigationItem.title && navigationItem.page?.id;

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

    const navigationData: ContentNavigationItemFirstLevel[] =
      frontPage.navigation?.filter(firstLevelNavigationItemFilter).map((navigationItem) => ({
        title: navigationItem?.title!,
        subitems: mapNavigationItems(navigationItem?.subnavigation, `/${parseRouteName(navigationItem?.title!)}`),
      })) || [];

    createNode(
      {
        id: 'strapi-navigation-' + frontPage.locale,
        children: [],
        parent: null,
        internal: {
          type: 'Content_Navigation',
          contentDigest: createContentDigest(navigationData),
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
        color: ageGroup.color!,
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

        const activityGroupPath = ageGroupNav.path + '/' + parseRouteName(properActivityGroup.title!);

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

          const activityPath = activityGroupNav.path + '/' + parseRouteName(properActivity.title!);

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

          createNode({
            id: 'activity-logo-' + properActivity.strapiId!,
            internal: {
              type: 'Activity_Logo',
              contentDigest: createContentDigest(properActivity.activity_group?.logo?.formats?.thumbnail?.url || ''),
            },
            logo: properActivity.activity_group?.logo?.formats?.thumbnail?.url,
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

/**
 * Fetch and write translations for i18next into: `/.cache/translations`
 */
const loadTranslations = async () => {
  const apiUrl = process.env.GATSBY_API_URL;
  const translationsPath = './.cache/translations';

  const promises = locales.map(async (locale) => {
    let translations;
    try {
      const response = await axios.get<Object>(apiUrl + '/settings/translations/' + locale);
      translations = response.data;
    } catch (error: any) {
      if (error.isAxiosError && (error as AxiosError).response?.status === 404) {
        console.warn("Couldn't load translations for locale", locale, 'error: Not found');
      } else {
        console.error("Couldn't load translations for locale", locale, 'error:', error);
      }
      translations = {};
    }

    try {
      const filePath = Path.join(translationsPath, `${locale}.json`);

      if (!existsSync(translationsPath)) {
        mkdirSync(translationsPath, { recursive: true });
      }

      writeFileSync(filePath, JSON.stringify(translations));
    } catch (error) {
      console.error("Couldn't write translations for locale", locale, 'error:', error);
    }
  });

  return Promise.all(promises);
};

const sourceNodes = async (args: SourceNodesArgs) => {
  createContentNavigationNodes(args);
  createProgramNavigationNodes(args);
  await loadTranslations();
};

export default sourceNodes;
