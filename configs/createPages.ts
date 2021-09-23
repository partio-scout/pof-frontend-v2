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
  skippedAgeGroups: string[];
  skippedActivityGroups: string[];
  skippedActivities: string[];
}

function createPageCreationResults(): PageCreationResults {
  return {
    ageGroups: [],
    activityGroups: [],
    activities: [],
    skippedAgeGroups: [],
    skippedActivityGroups: [],
    skippedActivities: [],
  };
}

function mergePageCreationResults(...results: PageCreationResults[]): PageCreationResults {
  return {
    ageGroups: results.map((r) => r.ageGroups).flat(),
    activityGroups: results.map((r) => r.activityGroups).flat(),
    activities: results.map((r) => r.activities).flat(),
    skippedAgeGroups: results.map((r) => r.skippedAgeGroups).flat(),
    skippedActivityGroups: results.map((r) => r.skippedActivityGroups).flat(),
    skippedActivities: results.map((r) => r.skippedActivities).flat(),
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

async function handleProgramData(graphql: CreatePagesArgs['graphql'], createPage: Actions['createPage']) {
  // Fetch AgeGroups
  const { data } = await graphql<{ allStrapiAgeGroup: { nodes: StrapiAgeGroup[] } }>(getAllAgeGroups);

  const promises = (data?.allStrapiAgeGroup.nodes || []).map((ageGroup) => handleAgeGroup(ageGroup, graphql, createPage));

  const results = await Promise.all(promises);

  const pageCreationlResults = mergePageCreationResults(...results);

  console.log('Created program pages:');
  console.table([
    ['AgeGroups', pageCreationlResults.ageGroups.length],
    ['ActivityGroups', pageCreationlResults.activityGroups.length],
    ['Activities', pageCreationlResults.activities.length],
  ]);
  console.log('\nSkipped program pages:');
  console.table([
    ['AgeGroups', pageCreationlResults.skippedAgeGroups],
    ['ActivityGroups', pageCreationlResults.skippedActivityGroups],
    ['Activities', pageCreationlResults.skippedActivities],
  ]);
}

async function handleContentPages(graphql: CreatePagesArgs['graphql'], createPage: Actions['createPage']) {
  // First fetch all FrontPages (all language versions)
  const frontPageResponse = await graphql<{ allStrapiFrontPage: { nodes: StrapiFrontPage[] } }>(getAllFrontPages);

  const frontPages = frontPageResponse.data?.allStrapiFrontPage.nodes || [];

  if (!frontPages.length) return;

  const localizationPromises = (frontPages || []).map(async (localization) => {
    const navigationPromises = (localization.navigation || [])
      .filter((n) => n)
      .map(async (navigationItem) => {
        await createNavigationLevel(graphql, createPage, navigationItem!);
      });
    await Promise.all(navigationPromises);
  });
  await Promise.all(localizationPromises);
}

async function createNavigationLevel(
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage'],
  data: StrapiFrontPageNavigation,
): Promise<void> {
  // If the page's id is null, the page is not published so let's skip it
  if (!data.id) return;
  if (!data.title) {
    console.warn('No title', data);
    return;
  }

  const pagePath = '/' + parseRouteName(data.title);

  const promises = (data.subnavigation || [])
    .filter((subitem) => {
      if (!subitem?.page?.id) return false;
      if (!subitem.title) {
        console.warn('No title', subitem);
        return false;
      }
    })
    .map(async (subitem) => {
      const subPagePath = pagePath + '/' + parseRouteName(subitem!.title!);
      await fetchAndCreateContentPage(graphql, createPage, subitem!.page!.id!, subPagePath);
    });

  await Promise.all(promises);
}

async function fetchAndCreateContentPage(
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage'],
  id: number,
  pagePath: string,
) {
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
}

const createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage } = actions;

  await Promise.all([await handleProgramData(graphql, createPage), await handleContentPages(graphql, createPage)]);
};

export default createPages;
