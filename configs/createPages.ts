import { Actions, CreatePagesArgs } from 'gatsby';
import path from 'path';
import {
  StrapiAgeGroup,
  StrapiActivityGroup,
  StrapiActivity,
  StrapiFrontPage,
  StrapiFrontPageNavigation,
  StrapiContentPage,
} from '../graphql-types';
import { getActivity } from '../src/queries/activity';
import { getActivityGroup } from '../src/queries/activityGroup';
import { getAllAgeGroups } from '../src/queries/ageGroup';
import { getContentPage } from '../src/queries/contentPage';
import { getAllFrontPages } from '../src/queries/frontPage';
import { parseAgeGroupRouteName, parseActivityRouteName } from './utils';

interface PageCreationResults {
  ageGroups: string[];
  activityGroups: string[];
  activities: string[];
  skippedAgeGroups: string[];
  skippedActivityGroups: string[];
  skippedActivities: string[];
}

async function handleProgramData(graphql: CreatePagesArgs['graphql'], createPage: Actions['createPage']) {
  const pageCreationlResults: PageCreationResults = {
    ageGroups: [],
    activityGroups: [],
    activities: [],
    skippedAgeGroups: [],
    skippedActivityGroups: [],
    skippedActivities: [],
  };

  // Fetch AgeGroups
  const { data } = await graphql<{ allStrapiAgeGroup: { nodes: StrapiAgeGroup[] } }>(getAllAgeGroups);

  for (const ageGroup of data?.allStrapiAgeGroup.nodes || []) {
    if (!ageGroup?.title) {
      pageCreationlResults.skippedAgeGroups.push(ageGroup?.id!);
      continue;
    }

    const ageGroupPath = `/${parseAgeGroupRouteName(ageGroup.title!)}`;
    createPage({
      path: ageGroupPath,
      component: path.resolve(`src/templates/ageGroupTemplate/index.tsx`),
      context: {
        data: ageGroup,
        type: 'ageGroup',
        localizations: ageGroup.localizations?.map((x) => x?.id),
        id: ageGroup.strapiId,
      },
    });
    pageCreationlResults.ageGroups.push(ageGroup.title!);

    // Fetch ActivityGroups
    for (const activityGroup of ageGroup.activity_groups || []) {
      if (!activityGroup?.id) {
        continue;
      }

      const { data } = await graphql<{ strapiActivityGroup: StrapiActivityGroup }>(getActivityGroup, {
        id: activityGroup?.id,
      });

      const activityGroupData = data?.strapiActivityGroup;

      if (!activityGroupData?.title) {
        pageCreationlResults.skippedActivityGroups.push(activityGroupData?.id!);
        continue;
      }

      const activityGroupPath = `${ageGroupPath}/${parseActivityRouteName(activityGroupData?.title!)}`;

      createPage({
        path: activityGroupPath,
        component: path.resolve(`src/templates/activityGroupTemplate/index.tsx`),
        context: {
          data: activityGroupData,
          type: 'activityGroup',
          localizations: activityGroupData.localizations?.map((x) => x?.id),
          id: activityGroupData.strapiId,
          ageGroupId: activityGroupData.age_group?.id,
        },
      });
      pageCreationlResults.activityGroups.push(activityGroupData?.title!);

      // Fetch Activities
      for (const activity of activityGroupData?.activities || []) {
        if (!activity?.id) {
          continue;
        }

        const { data } = await graphql<{ strapiActivity: StrapiActivity }>(getActivity, {
          id: activity?.id,
        });

        const activityData = data?.strapiActivity;

        if (!activityData?.title) {
          pageCreationlResults.skippedActivities.push(activityData?.id!);
          continue;
        }

        const activityPath = `${activityGroupPath}/${parseActivityRouteName(activityData?.title!)}`;

        createPage({
          path: activityPath,
          component: path.resolve(`src/templates/activityTemplate/index.tsx`),
          context: {
            data: activityData,
            type: 'activity',
            localizations: activityData.localizations?.map((x) => x?.id),
            id: activityData.strapiId,
            activityGroupId: activityData.activity_group?.id,
          },
        });
        pageCreationlResults.activities.push(activityData?.title!);
      }
    }
  }
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

  for (const localization of frontPages) {
    const locale = localization.locale;
    console.log(locale)
    createPage({
      path: locale === 'fi' ? '/' : `/${locale}/`,
      component: path.resolve(`src/templates/frontPageTemplate/index.tsx`),
      context: {
        content: localization.content,
        locale,
      }

    })
    for (const navigationItem of localization?.navigation || []) {
      if (navigationItem) await createNavigationLevel(graphql, createPage, navigationItem);
    }
  }
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

  const pagePath = '/' + parseActivityRouteName(data.title);

  for (const subitem of data.subnavigation || []) {
    // If the page's id is null, the page is not published so let's skip it
    if (!subitem?.page?.id) continue;
    if (!subitem.title) {
      console.warn('No title', subitem);
      continue;
    }

    const subPagePath = pagePath + '/' + parseActivityRouteName(subitem?.title);

    await fetchAndCreateContentPage(graphql, createPage, subitem.page.id, subPagePath);
  }
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
  console.log(pagePath)
  createPage({
    path: pagePath,
    component: path.resolve(`src/templates/contentPageTemplate/index.tsx`),
    context: {
      type: 'contentPage',
      localizations: pageDataResponse.data?.strapiContentPage.localizations?.map((x) => x?.id),
      data: pageDataResponse.data?.strapiContentPage,
    },
  });
}

const createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage } = actions;

  await handleProgramData(graphql, createPage);

  await handleContentPages(graphql, createPage);
};

export default createPages;
