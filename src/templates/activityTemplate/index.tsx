import React from 'react';
import Layout from '../../layouts/default';
import HeroTitleSection from '../../components/heroTitleSection';
import ActivityContentSection from './activityContentSection';
import ActivitySpecsSection from './activitySpecsSection';
import { PageProps, graphql } from 'gatsby';
import { Strapi_Activity, Strapi_Activity_Group, SitePage } from '../../../graphql-types';
import SuggestionsSection from './suggestionsSection/';
import { prependApiUrl, sitePageDataToLocaleLinks } from '../../utils/helpers';
import Metadata from '../../components/metadata';
import useMetadata from '../../hooks/metadata';
import { Locale } from '../../types/locale';
import { currentLocale } from '../../utils/helpers';

interface ActivityPageTemplateProps {
  data: { activity: Strapi_Activity; activityGroup: Strapi_Activity_Group };
}

interface ActivityQueryType {
  activity: Strapi_Activity;
  activityGroup: Strapi_Activity_Group;
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
      <SuggestionsSection data={activity} activityId={activity.strapi_id!} />
    </Layout>
  );
};

export default ActivityPageTemplate;

export const query = graphql`
  query getActivity($strapi_id: Int!, $localizations: [Int], $type: String) {
    localeData: allSitePage(filter: { context: { id: { in: $localizations }, type: { eq: $type } } }) {
      nodes {
        ...SitePageLocaleFragment
      }
    }
    activity: strapiActivity(strapi_id: { eq: $strapi_id }) {
      locale
      localizations {
        data {
          id
          attributes {
            locale
          }
        }
      }
      title
      updatedAt
      createdAt
      publishedAt
      id
      strapi_id
      content {
        data {
          content
        }
      }
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
        publishedAt
        #links {
        #  url
        #  id
        #  description
        #}
        #files {
        #  url
        #  size
        #  name
        #  mime
        #  id
        #}
      }
      age_group {
        color
        title
        main_image {
          ...ImageFragment
        }
      }
    }
    activityGroup: strapiActivityGroup(activities: { elemMatch: { strapi_id: { eq: $strapi_id } } }) {
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
