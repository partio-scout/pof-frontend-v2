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

  const fetchAgeGroupData = async (page: number) => {
    try {
      const response = await axios.get(apiUrl + `/api/age-groups?populate[activity_groups][populate][activity_group]=%2A&populate[activity_groups][populate][logo]=%2A&populate[main_image]=%2A&populate[logo]=%2A&populate[icon]=%2A&populate[activities][populate]=%2A&populate[activities][activity_group]=%2A&populate[subactivitygroup_term][populate]=%2A&populate[links]=%2A&populate[lower_content_area][populate]=%2A&populate[upper_content_area][populate]=%2A&populate[content]=%2A&populate[ingress]=%2A&pagination[page]=${page}&pagination[pageSize]=100`); // Adjust the endpoint as per your Strapi API
      return response.data; // Assuming Strapi v4 format
    } catch (error) {
      console.error('Error fetching age group data from Strapi:', error);
      return [];
    }
  };

  const ageGroups: any[] = [];
  let currentAgeGroupsPage = 0;
  let maxAgeGroupsPage = 1;
  while (true) {
    const data = await fetchAgeGroupData(currentAgeGroupsPage + 1);
    maxAgeGroupsPage = data.meta?.pagination?.pageCount || 1;
    ageGroups.push(...data.data);
    currentAgeGroupsPage++;
    if (currentAgeGroupsPage >= maxAgeGroupsPage) {
      break;
    }
  }


  const fetchActivityGroupData = async (page: number) => {
    try {
      const response = await axios.get(apiUrl + `/api/activity-groups?populate=activities&populate=logo&pagination[page]=${page}&pagination[pageSize]=100`); // Adjust the endpoint as per your Strapi API
      return response.data; // Assuming Strapi v4 format
    } catch (error) {
      console.error('Error fetching activity group data from Strapi:', error);
      return [];
    }
  };

  let activityGroups: StrapiActivityGroup[] = [];
  let currentActivityGroupsPage = 0;
  let maxActivityGroupsPage = 1;
  while (true) {
    const activityGroupData = await fetchActivityGroupData(currentActivityGroupsPage + 1);
    const data = activityGroupData.data || activityGroupData;

    maxActivityGroupsPage = data.meta?.pagination?.pageCount || 1;
    activityGroups.push(...data);
    currentActivityGroupsPage++;
    if (currentActivityGroupsPage >= maxActivityGroupsPage) {
      break;
    }
  }


  const fetchActivitiesData = async (page: number) => {
    try {
      const response = await axios.get(apiUrl + `/api/activities?populate[activity_group]=%2&populate[logo]=%2&&pagination[page]=${page}&pagination[pageSize]=100`); // Adjust the endpoint as per your Strapi API
      return response.data; // Assuming Strapi v4 format
    } catch (error) {
      console.error('Error fetching activities data from Strapi:', error);
      return [];
    }
  };

  let activities: StrapiActivity[] = [];
  let currentActivitiesPage = 0;
  let maxActivitiesPage = 1;
  while (true) {
    const data = await fetchActivitiesData(currentActivitiesPage + 1);
    maxActivitiesPage = data.meta?.pagination?.pageCount || 1;
    activities.push(...data.data);
    currentActivitiesPage++;
    if (currentActivitiesPage >= maxActivitiesPage) {
      break;
    }
  }

  let localeNavigations: any[] = [];

  const ageGroupsByLocale = ageGroups.reduce((acc: Map<string, StrapiAgeGroup[]>, ageGroup: StrapiAgeGroup) => {
    const locale = ageGroup.locale || 'fi';
    if (!acc.has(locale)) {
      acc.set(locale, []);
    }
    acc.get(locale)?.push(ageGroup);
    return acc;
  }, new Map<string, StrapiAgeGroup[]>());

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
          path: activityGroupPath,
          locale: properActivityGroup.locale!,
          subitems: [],
        };

        const activityGroupNode = {
          id: createNodeId(`StrapiActivityGroup-${properActivityGroup.id}`),
          title: properActivityGroup.title!,
          locale: properActivityGroup.locale!,
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



        const activityGroupActivities = activities.filter((activity) => activity.activity_group?.id === properActivityGroup.id);

        for (const activity of activityGroupActivities || []) {
          const activityPath = activityGroupNav.path + '/' + parseRouteName(activity.title!);

          const activityNav: ProgramNavItem = {
            title: activity.title!,
            type: 'Activity',
            id: activity.id!,
            path: activityPath,
          };

          const activityNode = {
            id: createNodeId(`StrapiActivity-${activity.id}`),
            title: activity.title!,
            locale: activity.locale!,
            internal: {
              type: 'StrapiActivity',
              contentDigest: createContentDigest(activity),
            },
          };
          createNode(activityNode);

          createNodeField({
            node: activityNode as unknown as Node,
            name: 'path',
            value: activityPath,
          });

          if (properActivityGroup?.logo?.formats?.thumbnail?.url) {
            createNode({
              id: 'activity-logo-' + activity.id!,
              internal: {
                type: 'Activity_Logo',
                contentDigest: createContentDigest(properActivityGroup?.logo?.formats?.thumbnail?.url || ''),
              },
              logo: properActivityGroup?.logo,
            });
          }
          
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