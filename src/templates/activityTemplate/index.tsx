import React from 'react';
import Layout from '../../layouts/default';
import mockHero from '../../images/mockHero.png';
import HeroTitleSection from '../../components/heroTitleSection';
import { PaddedContainer } from '../../components/ui.general';
import ActivityContentSection from './activityContentSection';
import ActivitySpecsSection from './activitySpecsSection';
import { PageProps, graphql } from 'gatsby';
import { StrapiActivity, StrapiActivityGroup, SitePage } from '../../../graphql-types';
import SuggestionsSection from './suggestionsSection/';
import { prependApiUrl } from '../../utils/helpers';
import Metadata from '../../components/metadata';
import { Locale } from '../../types/locale';
import { currentLocale } from '../../utils/helpers';

interface ActivityPageTemplateProps {
  data: { activity: StrapiActivity; activityGroup: StrapiActivityGroup };
}

interface LocalePathData {
  localeData: { nodes: SitePage[] };
}

interface ActivityQueryType {
  activity: StrapiActivity;
  activityGroup: StrapiActivityGroup;
  localeData: { nodes: SitePage[] };
}

const ActivityPageTemplate = ({ pageContext, path, data }: PageProps<ActivityQueryType, ActivityPageTemplateProps>) => {
  const { activity, activityGroup, localeData } = data;

  const subTitle = `${activityGroup?.title || ''}${
    activityGroup?.activity_group_category?.name ? ` - ${activityGroup.activity_group_category?.name}` : ''
  }`;

  return (
    <Layout
      showBreadCrumbs
      locale={activity.locale}
      pageHeader={
        <HeroTitleSection
          logoUrl={
            prependApiUrl(activity.activity_group?.logo?.formats?.thumbnail?.url || activityGroup?.logo?.url) || ''
          }
          mainImageUrl={mockHero}
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
        locale={currentLocale()}
      />
      <h2 className="pt-4">{activity.title}</h2>
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
