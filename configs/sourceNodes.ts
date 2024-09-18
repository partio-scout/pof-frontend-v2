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
async function createContentNavigationNodes(args: SourceNodesArgs) {
  const { actions, createContentDigest } = args;
  const apiUrl = process.env.GATSBY_API_URL;

  // Fetch data from Strapi (e.g., FrontPage)
  const fetchFrontPageData = async () => {
    try {
      const response = await axios.get(apiUrl + '/api/front-page?populate[navigation][populate][subnavigation][populate][page]=%2A&populate[navigation][populate][subnavigation][populate][subnavigation][populate][page][populate]=%2A&locale=all'); // Adjust the endpoint as per your Strapi API
      return response.data.data; // Assuming Strapi v4 format
    } catch (error) {
      console.error('Error fetching front page data from Strapi:', error);
      return [];
    }
  };

  const frontPages = await fetchFrontPageData();

  for (const frontPage of frontPages) {
    const { createNode } = actions;

    const navigationData: ContentNavigationItemFirstLevel[] =
      frontPage.navigation?.filter(firstLevelNavigationItemFilter).map((navigationItem: any) => ({
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

async function createProgramNavigationNodes(args: SourceNodesArgs) {
  const { actions, createContentDigest, createNodeId } = args;
  const { createNode, createNodeField } = actions;

  const apiUrl = process.env.GATSBY_API_URL;

  const fetchAgeGroupData = async () => {
    try {
      const response = await axios.get(apiUrl + '/api/age-groups?populate=*&activity_groups=*&locale=all'); // Adjust the endpoint as per your Strapi API
      return response.data.data; // Assuming Strapi v4 format
    } catch (error) {
      console.error('Error fetching age group data from Strapi:', error);
      return [];
    }
  };

  const ageGroups = await fetchAgeGroupData();

  // foreach ageGroup and set key to locale and value to ageGroups
  const ageGroupsByLocale = ageGroups.reduce((acc: Map<string, StrapiAgeGroup[]>, ageGroup: StrapiAgeGroup) => {
    const locale = ageGroup.locale || 'fi';
    if (!acc.has(locale)) {
      acc.set(locale, []);
    }
    acc.get(locale)?.push(ageGroup);
    return acc;
  }, new Map<string, StrapiAgeGroup[]>());

  const fetchActivityGroupData = async () => {
    try {
      const response = await axios.get(apiUrl + '/api/activity-groups?populate=*&locale=all'); // Adjust the endpoint as per your Strapi API
      return response.data.data; // Assuming Strapi v4 format
    } catch (error) {
      console.error('Error fetching activity group data from Strapi:', error);
      return [];
    }
  };

  const activityGroups = await fetchActivityGroupData() as StrapiActivityGroup[];
  
  const fetchActivitiesData = async () => {
    try {
      const response = await axios.get(apiUrl + '/api/activities?populate=*&locale=all'); // Adjust the endpoint as per your Strapi API
      return response.data.data; // Assuming Strapi v4 format
    } catch (error) {
      console.error('Error fetching activities data from Strapi:', error);
      return [];
    }
  };

  const activities = await fetchActivitiesData() as StrapiActivity[];


  let localeNavigations = [];

  ageGroupsByLocale.forEach((ageGroups, locale) => {
    const items: ProgramNavItem[] = [];

    for (const ageGroup of ageGroups) {

      const ageGroupPath = '/' + parseAgeGroupRouteName(ageGroup.title!);

      const ageGroupNode = {
        id: createNodeId(`StrapiAgeGroup-${ageGroup.id}`),
        title: ageGroup.title!,
        color: ageGroup.color!,
        minimum_age: ageGroup.minimum_age,
        maximum_age: ageGroup.maximum_age,
        locale: ageGroup.locale!,
        internal: {
          type: 'AgeGroup',
          contentDigest: createContentDigest(ageGroup),
        },
      };
      
      createNode(ageGroupNode);

      const ageGroupNav: ProgramNavItem = {
        title: ageGroup.title!,
        type: 'AgeGroup',
        id: ageGroup.id!,
        strapi_id: ageGroup.strapi_id!,
        path: ageGroupPath,
        color: ageGroup.color!,
        subitems: [],
        minimum_age: ageGroup.minimum_age || undefined,
        maximum_age: ageGroup.maximum_age || undefined,
      };

      createNodeField({
        node: ageGroupNode as unknown as Node,
        name: 'path',
        value: ageGroupPath,
      });

      for (const activityGroup of ageGroup.activity_groups || []) {
        if (!activityGroup?.id) continue;

        const properActivityGroup = activityGroups.find((x) => x.id === activityGroup.id);

        if (!properActivityGroup) continue;

        const activityGroupPath = ageGroupNav.path + '/' + parseRouteName(properActivityGroup.title!);

        const activityGroupNav: ProgramNavItem = {
          title: properActivityGroup.title!,
          type: 'ActivityGroup',
          id: properActivityGroup.id,
          strapi_id: properActivityGroup.strapi_id,
          path: activityGroupPath,
          locale: properActivityGroup.locale!,
          subitems: [],
        };

        const activityGroupNode = {
          id: createNodeId(`StrapiActivityGroup-${properActivityGroup.strapi_id}`),
          title: properActivityGroup.title!,
          internal: {
            type: 'StrapiActivityGroup',
            contentDigest: createContentDigest(properActivityGroup),
          },
        };
        createNode(activityGroupNode);

        createNodeField({
          node: activityGroupNode as unknown as Node,
          name: 'path',
          value: activityGroupPath,
        });

        for (const activity of properActivityGroup.activities || []) {
          if (!activity?.id) continue;

          const properActivity = activities.find((x) => x.strapi_id === activity.strapi_id);

          if (!properActivity) continue;

          const activityPath = activityGroupNav.path + '/' + parseRouteName(properActivity.title!);

          const activityNav: ProgramNavItem = {
            title: properActivity.title!,
            type: 'Activity',
            id: properActivity.id!,
            strapi_id: properActivity.strapi_id,
            path: activityPath,
          };

          
          const activityNode = {
            id: createNodeId(`StrapiActivity-${properActivity.strapi_id}`),
            title: properActivity.title!,
            locale: properActivity.locale!,
            internal: {
              type: 'StrapiActivity',
              contentDigest: createContentDigest(properActivity),
            },
          };
          createNode(activityNode);

          createNodeField({
            node: activityNode as unknown as Node,
            name: 'path',
            value: activityPath,
          });

          createNode({
            id: 'activity-logo-' + properActivity.strapi_id!,
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
    localeNavigations.push({ locale, navigation: items });
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
      const response = await axios.get<Object>(apiUrl + '/api/setting?locale=' + locale);
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

      const translationArray = translations.data?.translations ?? {};

      writeFileSync(filePath, JSON.stringify(translationArray));
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