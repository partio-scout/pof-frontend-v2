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

  console.log('activity', activity);

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
      {
        activity.strapi_id && (<SuggestionsSection data={activity.suggestions} />)
      }
    </Layout>
  );
};

export default ActivityPageTemplate;

export const query = graphql`
query getActivity($strapi_id: Int, $locale: String, $type: String) {
  localeData: allSitePage(filter: { context: { locale: { eq: $locale }, type: { eq: $type } } }) {
    nodes {
      ...SitePageLocaleFragment
    }
  }
  activity: strapiActivity(strapi_id: { eq: $strapi_id }) {
    locale
    title
    updatedAt
    createdAt
    publishedAt
    id
    strapi_id
    content {
			data {
			  id
        content
			}
    }
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
      alternativeText
      caption
      createdAt
      hash
      height
      id
      formats {
        medium {
          ext
          url
          hash
          mime
          name
          size
          width
          height
        }
        large {
          ext
          url
          hash
          mime
          name
          size
          width
          height
        }
        small {
          ext
          url
          hash
          mime
          name
          size
          width
          height
        }
        thumbnail {
          ext
          url
          hash
          mime
          name
          size
          width
          height
        }
      }
      mime
      name
      size
      url
      updatedAt
      width
      strapi_id
    }
    is_marine_activity
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
      strapi_id
    }
    age_group {
      color
      title
      main_image {
        alternativeText
        caption
        createdAt
        hash
        height
        id
        formats {
          medium {
            ext
            url
            hash
            mime
            name
            size
            width
            height
          }
          large {
            ext
            url
            hash
            mime
            name
            size
            width
            height
          }
          small {
            ext
            url
            hash
            mime
            name
            size
            width
            height
          }
          thumbnail {
            ext
            url
            hash
            mime
            name
            size
            width
            height
          }
        }
        mime
        name
        size
        url
        updatedAt
        width
        strapi_id
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
