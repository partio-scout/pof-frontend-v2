import { Actions, CreatePagesArgs } from 'gatsby';
import path from 'path';
import {
  StrapiAgeGroup,
  StrapiActivityGroup,
  StrapiActivity,
  StrapiFrontPage,
  StrapiFrontPageNavigation,
  StrapiContentPage,
  StrapiActivityGroupActivities,
  StrapiAgeGroupActivity_Groups,
  StrapiFrontPageNavigationSubnavigation,
} from '../graphql-types';
import { getActivity } from '../src/queries/activity';
import { getActivityGroup } from '../src/queries/activityGroup';
import { getAllAgeGroups } from '../src/queries/ageGroup';
import { getContentPage } from '../src/queries/contentPage';
import { getAllFrontPages } from '../src/queries/frontPage';
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
  activity: StrapiActivityGroupActivities,
  activityGroupPath: string,
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage'],
): Promise<PageCreationResults> {
  const results = createPageCreationResults();

  if (!activity?.id) {
    return results;
  }

  const { data } = await graphql<{ strapiActivity: StrapiActivity }>(getActivity, {
    id: activity?.id,
  });

  const activityData = data?.strapiActivity;

  if (!activityData?.title) {
    results.skippedActivities.push(activityData?.id!);
    return results;
  }

  const activityPath = `${activityGroupPath}/${parseRouteName(activityData?.title!)}`;

  createPage({
    path: activityPath,
    component: path.resolve(`src/templates/activityTemplate/index.tsx`),
    context: {
      data: activityData,
      type: 'activity',
      id: activityData.strapiId,
      activityGroupId: activityData.activity_group?.id,
    },
  });
  results.activities.push(activityData?.title!);

  return results;
}

async function handleActivityGroup(
  activityGroup: StrapiAgeGroupActivity_Groups,
  ageGroupPath: string,
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage'],
): Promise<PageCreationResults> {
  const results = createPageCreationResults();

  if (!activityGroup?.id) {
    return results;
  }

  const { data } = await graphql<{ strapiActivityGroup: StrapiActivityGroup }>(getActivityGroup, {
    id: activityGroup?.id,
  });

  const activityGroupData = data?.strapiActivityGroup;

  if (!activityGroupData?.title) {
    results.skippedActivityGroups.push(activityGroupData?.id!);
    return results;
  }

  const activityGroupPath = `${ageGroupPath}/${parseRouteName(activityGroupData?.title!)}`;

  createPage({
    path: activityGroupPath,
    component: path.resolve(`src/templates/activityGroupTemplate/index.tsx`),
    context: {
      data: activityGroupData,
      type: 'activityGroup',
      id: activityGroupData.strapiId,
      ageGroupId: activityGroupData.age_group?.id,
    },
  });
  results.activityGroups.push(activityGroupData?.title!);

  // Fetch Activities
  const promises = (activityGroupData?.activities || []).map(async (activity) =>
    handleActivity(activity!, activityGroupPath, graphql, createPage),
  );

  const activityResults = await Promise.all(promises);

  return mergePageCreationResults(results, ...activityResults);
}

async function handleAgeGroup(
  ageGroup: StrapiAgeGroup,
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage'],
): Promise<PageCreationResults> {
  const results = createPageCreationResults();

  if (!ageGroup?.title) {
    results.skippedAgeGroups.push(ageGroup?.id!);
    return results;
  }

  const ageGroupPath = `/${parseAgeGroupRouteName(ageGroup.title!)}`;
  createPage({
    path: ageGroupPath,
    component: path.resolve(`src/templates/ageGroupTemplate/index.tsx`),
    context: {
      data: ageGroup,
      type: 'ageGroup',
      id: ageGroup.strapiId,
    },
  });
  results.ageGroups.push(ageGroup.title!);

  const promises = (ageGroup.activity_groups || []).map(async (activityGroup) =>
    handleActivityGroup(activityGroup!, ageGroupPath, graphql, createPage),
  );

  const activityGroupResults = await Promise.all(promises);

  return mergePageCreationResults(results, ...activityGroupResults);
}

async function handleProgramData(
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage'],
): Promise<PageCreationResults> {
  // Fetch AgeGroups
  const { data } = await graphql<{ allStrapiAgeGroup: { nodes: StrapiAgeGroup[] } }>(getAllAgeGroups);

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
  const frontPageResponse = await graphql<{ allStrapiFrontPage: { nodes: StrapiFrontPage[] } }>(getAllFrontPages);

  const frontPages = frontPageResponse.data?.allStrapiFrontPage.nodes || [];

  if (!frontPages.length) return results;

  const localizationPromises = (frontPages || []).map(async (localization) => {
    const navigationPromises = (localization.navigation || []).map(
      async (navigationItem) => await createNavigationLevel(graphql, createPage, navigationItem!),
    );
    const results = await Promise.all(navigationPromises);
    return mergePageCreationResults(...results);
  });
  const subResults = await Promise.all(localizationPromises);
  return mergePageCreationResults(results, ...subResults);
}

async function createNavigationLevel(
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage'],
  data: StrapiFrontPageNavigation,
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
    data.subnavigation as StrapiFrontPageNavigationSubnavigation[],
    pagePath,
  );

  return mergePageCreationResults(results, pageResults);
}

async function createNavigationItems(
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage'],
  items: StrapiFrontPageNavigationSubnavigation[],
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

    const pageResult = await fetchAndCreateContentPage(graphql, createPage, subitem!.page!.id!, subPagePath);

    if (!subitem.subnavigation?.length) {
      return pageResult;
    }

    const result = await createNavigationItems(
      graphql,
      createPage,
      subitem.subnavigation as StrapiFrontPageNavigationSubnavigation[],
      subPagePath,
    );
    return mergePageCreationResults(pageResult, result);
  });

  const results = await Promise.all(promises);
  return mergePageCreationResults(...results);
}

async function fetchAndCreateContentPage(
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage'],
  id: number,
  pagePath: string,
): Promise<PageCreationResults> {
  const pageDataResponse = await graphql<{ strapiContentPage: StrapiContentPage }>(getContentPage, {
    id,
  });

  createPage({
    path: pagePath,
    component: path.resolve(`src/templates/contentPageTemplate/index.tsx`),
    context: {
      data: pageDataResponse.data?.strapiContentPage,
    },
  });
  const results = createPageCreationResults();
  results.contentPages.push(pageDataResponse.data?.strapiContentPage.title!);
  return results;
}

const createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage } = actions;

  const results = await Promise.all([
    await handleProgramData(graphql, createPage),
    await handleContentPages(graphql, createPage),
  ]);

  const finalResults = mergePageCreationResults(...results);
  printPageCreationResults(finalResults);
};

export default createPages;
