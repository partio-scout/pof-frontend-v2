import React from 'react';
import Layout from '../../layouts/default';
import HeroTitleSection from '../../components/heroTitleSection';
import ActivityContentSection from './activityContentSection';
import ActivitySpecsSection from './activitySpecsSection';
import { PageProps, graphql } from 'gatsby';
import { StrapiActivity, StrapiActivityGroup, SitePage } from '../../../graphql-types';
import SuggestionsSection from './suggestionsSection/';
import { prependApiUrl, sitePageDataToLocaleLinks } from '../../utils/helpers';
import Metadata from '../../components/metadata';
import useMetadata from '../../hooks/metadata';
import { Locale } from '../../types/locale';
import { currentLocale } from '../../utils/helpers';

interface ActivityPageTemplateProps {
  data: { activity: StrapiActivity; activityGroup: StrapiActivityGroup };
}

interface ActivityQueryType {
  activity: StrapiActivity;
  activityGroup: StrapiActivityGroup;
  localeData: { nodes: SitePage[] };
}

const ActivityPageTemplate = ({ path, data }: PageProps<ActivityQueryType, ActivityPageTemplateProps>) => {
  const { activity, activityGroup, localeData } = data;
  const localeLinks = sitePageDataToLocaleLinks(localeData.nodes);
  const subTitle = `${activityGroup?.title || ''}${
    activityGroup?.activity_group_category?.name ? ` - ${activityGroup.activity_group_category?.name}` : ''
  }`;
  const metadata = useMetadata(activity.locale || 'fi');

  return (
    <Layout
      showBreadCrumbs
      locale={activity.locale as Locale}
      localeLinks={localeLinks}
      pageHeader={
        <HeroTitleSection
          logoUrl={
            prependApiUrl(
              activity.logo?.formats?.thumbnail?.url ||
                activity.activity_group?.logo?.formats?.thumbnail?.url ||
                activity.age_group?.logo?.formats?.thumbnail?.url,
            ) || ''
          }
          mainImageUrl={prependApiUrl(activity.activity_group?.main_image?.url || activity.age_group?.main_image?.url)}
          mainTitle={activityGroup?.title || ''}
          subTitle={subTitle}
          smallMainTitle
          color={activity.age_group?.color}
        />
      }
    >
      <Metadata
        title={activity.title || ''}
        description={activity.ingress || ''}
        path={path}
        locale={activity.locale as Locale}
        imageUrl={prependApiUrl(activity.main_image?.url || metadata.image || '')}
      />
      <h2 className="pt-4 sm:text-4xl md:text-xxlw">{activity.title}</h2>
      <ActivityContentSection data={activity} />
      <ActivitySpecsSection data={activity} />
      <SuggestionsSection data={activity} activityId={activity.strapiId!} />
    </Layout>
  );
};

export default ActivityPageTemplate;

export const query = graphql`
  query getActivity($id: Int!, $localizations: [Int], $type: String) {
    localeData: allSitePage(filter: { context: { id: { in: $localizations }, type: { eq: $type } } }) {
      nodes {
        ...SitePageLocaleFragment
      }
    }
    activity: strapiActivity(strapiId: { eq: $id }) {
      locale
      localizations {
        locale
        id
      }
      title
      updated_at
      created_at
      published_at
      id
      strapiId
      content
      is_marine_activity
      duration {
        locale
        name
        slug
        id
      }
      educational_objectives {
        id
        locale
        name
        slug
      }
      files {
        url
        size
        name
        mime
        id
      }
      group_sizes {
        slug
        name
        locale
        id
      }
      images {
        ...ImageFragment
      }
      ingress
      leader_skills {
        id
        locale
        name
        slug
      }
      leader_tasks
      locations {
        id
        locale
        icon {
          url
        }
        name
        slug
      }
      logo {
        width
        url
        size
        name
        mime
        id
        height
      }
      mandatory
      preparation_duration {
        slug
        name
        locale
        id
      }
      skill_areas {
        slug
        name
        locale
        id
      }
      suggestions {
        author
        content
        from_web
        id
        like_count
        locale
        title
        published_at
        links {
          url
          id
          description
        }
        files {
          url
          size
          name
          mime
          id
        }
      }
      age_group {
        color
        title
        main_image {
          ...ImageFragment
        }
      }
    }
    activityGroup: strapiActivityGroup(activities: { elemMatch: { id: { eq: $id } } }) {
      title
      logo {
        url
        formats {
          thumbnail {
            url
          }
        }
      }
      activity_group_category {
        name
      }
    }
  }
`;
