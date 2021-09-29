import { Actions, CreatePagesArgs } from 'gatsby';
import path from 'path';
import {
  StrapiAgeGroup,
  StrapiActivityGroup,
  StrapiActivity,
  StrapiFrontPage,
  StrapiFrontPageNavigation,
  StrapiFrontPageNavigationSubnavigation,
} from '../graphql-types';
import { getActivityGroup } from '../src/queries/activityGroup';
import { getAllAgeGroups } from '../src/queries/ageGroup';
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
  activity: Pick<StrapiActivity, 'id' | 'title'>,
  activityGroupPath: string,
  createPage: Actions['createPage'],
): Promise<PageCreationResults> {
  const results = createPageCreationResults();

  if (!activity?.id) {
    return results;
  }

  const activityPath = `${activityGroupPath}/${parseRouteName(activity?.title!)}`;

  createPage({
    path: activityPath,
    component: path.resolve(`src/templates/activityTemplate/index.tsx`),
    context: {
      type: 'activity',
      id: activity.id,
    },
  });
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
  activityGroup: Pick<StrapiActivityGroup, 'id' | 'title' | 'age_group'>,
  ageGroupPath: string,
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage'],
): Promise<PageCreationResults> {
  const results = createPageCreationResults();

  if (!activityGroup?.id) {
    return results;
  }

  const { data } = await graphqlWithErrors<{
    strapiActivityGroup: { activities: Pick<StrapiActivity, 'id' | 'title'>[] };
  }>(graphql, getActivityGroup, {
    id: activityGroup?.id,
  });

  const activityGroupData = data?.strapiActivityGroup;

  if (!activityGroup.title) {
    results.skippedActivityGroups.push(activityGroup?.id.toString());
    return results;
  }

  const activityGroupPath = `${ageGroupPath}/${parseRouteName(activityGroup?.title)}`;

  createPage({
    path: activityGroupPath,
    component: path.resolve(`src/templates/activityGroupTemplate/index.tsx`),
    context: {
      type: 'activityGroup',
      id: activityGroup.id,
      ageGroupId: activityGroup.age_group?.id,
    },
  });
  results.activityGroups.push(activityGroup?.title!);

  // Fetch Activities
  const promises = (activityGroupData?.activities || []).map(async (activity) =>
    handleActivity(activity!, activityGroupPath, createPage),
  );

  const activityResults = await Promise.all(promises);

  return mergePageCreationResults(results, ...activityResults);
}

async function handleAgeGroup(
  ageGroup: Pick<StrapiAgeGroup, 'id' | 'strapiId' | 'title' | 'activity_groups'>,
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
      type: 'ageGroup',
      id: ageGroup.strapiId,
    },
  });
  results.ageGroups.push(ageGroup.title!);

  const promises = (ageGroup.activity_groups || []).map(async (activityGroup) =>
    handleActivityGroup(
      activityGroup as unknown as Pick<StrapiActivityGroup, 'id' | 'title' | 'age_group'>,
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
  const { data } = await graphqlWithErrors<{ allStrapiAgeGroup: { nodes: StrapiAgeGroup[] } }>(
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
  const frontPageResponse = await graphqlWithErrors<{ allStrapiFrontPage: { nodes: StrapiFrontPage[] } }>(
    graphql,
    getAllFrontPages,
  );

  const frontPages = frontPageResponse.data?.allStrapiFrontPage.nodes || [];

  if (!frontPages.length) return results;

  const subResults = (frontPages || []).map((localization) => {
    const navigationResults = (localization.navigation || []).map((navigationItem) =>
      createNavigationLevel(graphql, createPage, navigationItem!),
    );
    return mergePageCreationResults(...navigationResults);
  });

  return mergePageCreationResults(results, ...subResults);
}

function createNavigationLevel(
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage'],
  data: StrapiFrontPageNavigation,
): PageCreationResults {
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
  const pageResults = createNavigationItems(
    createPage,
    data.subnavigation as StrapiFrontPageNavigationSubnavigation[],
    pagePath,
  );

  return mergePageCreationResults(results, pageResults);
}

function createNavigationItems(
  createPage: Actions['createPage'],
  items: StrapiFrontPageNavigationSubnavigation[],
  rootPath: string,
): PageCreationResults {
  const results = (items || []).map((subitem) => {
    // If the page's id is null, the page is not published so let's skip it
    if (!subitem?.page?.id) return createPageCreationResults();
    if (!subitem.title) {
      console.warn('No title', subitem);
      return createPageCreationResults();
    }

    const subPagePath = rootPath + '/' + parseRouteName(subitem?.title!);

    const pageResult = createContentPage(createPage, subitem!.page!.id!, subPagePath);

    if (!subitem.subnavigation?.length) {
      return pageResult;
    }

    const result = createNavigationItems(
      createPage,
      subitem.subnavigation as StrapiFrontPageNavigationSubnavigation[],
      subPagePath,
    );
    return mergePageCreationResults(pageResult, result);
  });

  return mergePageCreationResults(...results);
}

function createContentPage(
  createPage: Actions['createPage'],
  id: number,
  pagePath: string,
): PageCreationResults {
  createPage({
    path: pagePath,
    component: path.resolve(`src/templates/contentPageTemplate/index.tsx`),
    context: {
      id,
    },
  });
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
  printPageCreationResults(finalResults);
};

export default createPages;
