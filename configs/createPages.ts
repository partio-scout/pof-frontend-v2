import { Actions, CreatePagesArgs } from 'gatsby';
import path from 'path';
import {
  Strapi_Age_Group,
  Strapi_Activity,
  Strapi_Front_Page,
  Strapi__Component_Navigation_Navigation,
  Strapi__Component_Navigation_Subnavigation,
  Strapi_Content_Page,
  Strapi_Activity_GroupLocalizations,
  Strapi_Activity_Group,
} from '../graphql-types';
import { getActivityGroup } from '../src/queries/activityGroup';
import { getAllAgeGroups } from '../src/queries/ageGroup';
import { getAllFrontPages } from '../src/queries/frontPage';
import { getContentPage } from '../src/queries/contentPage';
import { parseAgeGroupRouteName, parseRouteName } from './utils';

interface PageCreationResults {
  ageGroups: string[];
  activityGroups: string[];
  activities: string[];
  contentPages: string[];
  skippedAgeGroups: string[];
  skippedActivityGroups: string[];
  skippedActivities: string[];
  skippedContentPages: string[];
}

function printPageCreationResults(results: PageCreationResults) {
  console.log('Created pages:');
  console.table([
    ['AgeGroups', results.ageGroups.length],
    ['ActivityGroups', results.activityGroups.length],
    ['Activities', results.activities.length],
    ['ContentPages', results.contentPages.length],
  ]);
  console.log('\nSkipped pages:');
  console.table([
    ['AgeGroups', results.skippedAgeGroups],
    ['ActivityGroups', results.skippedActivityGroups],
    ['Activities', results.skippedActivities],
    ['ContentPages', results.skippedContentPages],
  ]);
}

function createPageCreationResults(): PageCreationResults {
  return {
    ageGroups: [],
    activityGroups: [],
    activities: [],
    contentPages: [],
    skippedAgeGroups: [],
    skippedActivityGroups: [],
    skippedActivities: [],
    skippedContentPages: [],
  };
}

function mergePageCreationResults(...results: PageCreationResults[]): PageCreationResults {
  return {
    ageGroups: results.map((r) => r.ageGroups).flat(),
    activityGroups: results.map((r) => r.activityGroups).flat(),
    activities: results.map((r) => r.activities).flat(),
    contentPages: results.map((r) => r.contentPages).flat(),
    skippedAgeGroups: results.map((r) => r.skippedAgeGroups).flat(),
    skippedActivityGroups: results.map((r) => r.skippedActivityGroups).flat(),
    skippedActivities: results.map((r) => r.skippedActivities).flat(),
    skippedContentPages: results.map((r) => r.skippedContentPages).flat(),
  };
}

async function handleActivity(
  activity: Pick<Strapi_Activity, 'id' | 'title' | 'localizations' | 'locale' | 'strapi_id'>,
  activityGroupPath: string,
  createPage: Actions['createPage'],
): Promise<PageCreationResults> {
  const results = createPageCreationResults();

  if (!activity?.id) {
    return results;
  }

  const activityPath = `${activityGroupPath}/${parseRouteName(activity?.title!)}`;

  const page = {
    path: activityPath,
    component: path.resolve(`src/templates/activityTemplate/index.tsx`),
    context: {
      strapi_id: activity.strapi_id,
      type: 'activity',
      localizations: activity.localizations?.data?.map((x) => x?.id) || [],
      locale: activity.locale,
    },
  };

  createPage(page);

  results.activities.push(activity?.title!);

  return results;
}

async function graphqlWithErrors<T>(graphql: CreatePagesArgs['graphql'], query: string, variables?: any) {
  const { data, errors } = await graphql<T>(query, variables);

  if (errors) {
    errors.forEach((err: any) => console.error(err));
  }

  return { data };
}

async function handleActivityGroup(
  activityGroup: Pick<Strapi_Activity_Group, 'id' | 'title' | 'age_group' | 'strapi_id'>,
  ageGroupPath: string,
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage'],
): Promise<PageCreationResults> {
  const results = createPageCreationResults();

  if (!activityGroup?.id) {
    return results;
  }

  const { data } = await graphqlWithErrors<{
    strapiActivityGroup: {
      activities: Pick<Strapi_Activity, 'id' | 'title' | 'localizations' | 'locale' | 'strapi_id'>[];
      localizations: Strapi_Activity_GroupLocalizations[];
      locale?: string;
    };
  }>(graphql, getActivityGroup, {
    title: activityGroup?.title,
    id: activityGroup?.id,
  });

  const activityGroupData = data?.strapiActivityGroup;

  if (!activityGroup.title) {
    results.skippedActivityGroups.push(activityGroup?.id.toString());
    return results;
  }

  const activityGroupPath = `${ageGroupPath}/${parseRouteName(activityGroup?.title)}`;

  const page = {
    path: activityGroupPath,
    component: path.resolve(`src/templates/activityGroupTemplate/index.tsx`),
    context: {
      strapi_id: activityGroup!.strapi_id,
      ageGroupId: activityGroup.age_group,
      localizations: activityGroupData!.localizations?.data?.map((x) => x?.id) || [],
      type: 'activityGroup',
    },
  };

  createPage(page);

  results.activityGroups.push(activityGroup?.title!);

  // Fetch Activities
  const promises = (activityGroupData?.activities || []).map(async (activity) =>
    handleActivity(activity!, activityGroupPath, createPage),
  );

  const activityResults = await Promise.all(promises);

  return mergePageCreationResults(results, ...activityResults);
}

async function handleAgeGroup(
  ageGroup: Pick<Strapi_Age_Group, 'id' | 'strapi_id' | 'title' | 'activity_groups' | 'localizations' | 'locale'>,
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage'],
): Promise<PageCreationResults> {
  const results = createPageCreationResults();

  if (!ageGroup?.title) {
    results.skippedAgeGroups.push(ageGroup?.id!);
    return results;
  }

  const ageGroupPath = `/${parseAgeGroupRouteName(ageGroup.title!)}`;

  const page = {
    path: ageGroupPath,
    component: path.resolve(`src/templates/ageGroupTemplate/index.tsx`),
    context: {
      type: 'ageGroup',
      localizations: ageGroup.localizations?.data?.map((x) => x?.id) || [],
      locale: ageGroup.locale,
      id: ageGroup.strapi_id,
    },
  };

  createPage(page);

  results.ageGroups.push(ageGroup.title!);

  const promises = (ageGroup.activity_groups || []).map(async (activityGroup) =>
    handleActivityGroup(
      activityGroup as Pick<Strapi_Activity_Group, 'id' | 'title' | 'age_group' | 'strapi_id'>,
      ageGroupPath,
      graphql,
      createPage,
    ),
  );

  const activityGroupResults = await Promise.all(promises);

  return mergePageCreationResults(results, ...activityGroupResults);
}

async function handleProgramData(
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage'],
): Promise<PageCreationResults> {
  // Fetch AgeGroups
  const { data } = await graphqlWithErrors<{ allStrapiAgeGroup: { nodes: Strapi_Age_Group[] } }>(
    graphql,
    getAllAgeGroups,
  );

  const promises = (data?.allStrapiAgeGroup.nodes || []).map((ageGroup) =>
    handleAgeGroup(ageGroup, graphql, createPage),
  );

  const results = await Promise.all(promises);

  const pageCreationlResults = mergePageCreationResults(...results);

  return pageCreationlResults;
}

async function handleContentPages(
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage'],
): Promise<PageCreationResults> {
  const results = createPageCreationResults();

  // First fetch all FrontPages (all language versions)
  const frontPageResponse = await graphqlWithErrors<{ allStrapiFrontPage: { nodes: Strapi_Front_Page[] } }>(
    graphql,
    getAllFrontPages,
  );
  frontPageResponse.data?.allStrapiFrontPage.nodes.forEach((frontPage) => {
    const locale = frontPage.locale;
    createPage({
      path: locale === 'fi' ? '/' : `/${locale}/`,
      component: path.resolve(`src/templates/frontPageTemplate/index.tsx`),
      context: {
        type: 'frontPage',
        locale,
        id: frontPage.strapi_id,
      },
    });
  });

  const frontPages = frontPageResponse.data?.allStrapiFrontPage.nodes || [];

  if (!frontPages.length) return results;

  const promises = (frontPages || []).map(async (localization) => {
    const navigationPromises = (localization.navigation || []).map(async (navigationItem) =>
      createNavigationLevel(graphql, createPage, navigationItem!),
    );

    const navigationResults = await Promise.all(navigationPromises);
    return mergePageCreationResults(...navigationResults);
  });

  const subResults = await Promise.all(promises);

  return mergePageCreationResults(results, ...subResults);
}

async function createNavigationLevel(
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage'],
  data: Strapi__Component_Navigation_Navigation,
): Promise<PageCreationResults> {
  const results = createPageCreationResults();

  // If the page's id is null, the page is not published so let's skip it
  if (!data.id) return results;
  if (!data.title) {
    console.warn('No title', data);
    return results;
  }

  const pagePath = '/' + parseRouteName(data.title);

  if (!data.subnavigation?.length) {
    return results;
  }
  const pageResults = await createNavigationItems(
    graphql,
    createPage,
    data.subnavigation as Strapi__Component_Navigation_Subnavigation[],
    pagePath,
  );

  return mergePageCreationResults(results, pageResults);
}

async function createNavigationItems(
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage'],
  items: Strapi__Component_Navigation_Subnavigation[],
  rootPath: string,
): Promise<PageCreationResults> {
  const promises = (items || []).map(async (subitem) => {
    // If the page's id is null, the page is not published so let's skip it
    if (!subitem?.page?.id) return createPageCreationResults();
    if (!subitem.title) {
      console.warn('No title', subitem);
      return createPageCreationResults();
    }

    const subPagePath = rootPath + '/' + parseRouteName(subitem?.title!);

    const pageResult = await createContentPage(
      graphql,
      createPage,
      subitem!.page!.id!,
      subitem!.page!.title!,
      subPagePath,
    );

    if (!subitem.subnavigation?.length) {
      return pageResult;
    }

    const result = await createNavigationItems(
      graphql,
      createPage,
      subitem.subnavigation as Strapi__Component_Navigation_Subnavigation[],
      subPagePath,
    );
    return mergePageCreationResults(pageResult, result);
  });

  const results = await Promise.all(promises);

  return mergePageCreationResults(...results);
}

async function createContentPage(
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage'],
  id: string,
  title: string,
  pagePath: string,
): Promise<PageCreationResults> {
  const pageDataResponse = await graphqlWithErrors<{ strapiContentPage: Strapi_Content_Page }>(
    graphql,
    getContentPage,
    {
      title,
    },
  );

  const page = {
    path: pagePath,
    component: path.resolve(`src/templates/contentPageTemplate/index.tsx`),
    context: {
      type: 'contentPage',
      localizations: pageDataResponse.data?.strapiContentPage.localizations?.data?.map((x) => x?.id) || [],
      locale: pageDataResponse.data?.strapiContentPage.locale,
      id: pageDataResponse?.data?.strapiContentPage.strapi_id,
    },
  };

  createPage(page);

  const results = createPageCreationResults();
  results.contentPages.push(id.toString());
  return results;
}

const createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage } = actions;

  const results = await Promise.all([
    await handleProgramData(graphql, createPage),
    await handleContentPages(graphql, createPage),
  ]);

  const finalResults = mergePageCreationResults(...results);
  console.log('TEST finalResults: ', finalResults);
  printPageCreationResults(finalResults);
};

export default createPages;
