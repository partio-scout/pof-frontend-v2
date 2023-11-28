import { PageProps, graphql } from 'gatsby';
import React from 'react';
import {
  StrapiActivity,
  StrapiActivityGroup,
  StrapiAgeGroup,
  StrapiSuggestion,
  SitePage,
} from '../../../graphql-types';
import HeroTitleSection from '../../components/heroTitleSection';
import Metadata from '../../components/metadata';
import Layout from '../../layouts/default';
import Suggestions from './suggestions';
import Activities from './activities';
import ActivityGroupList from '../../components/activityGroupList';
import { prependApiUrl, sitePageDataToLocaleLinks } from '../../utils/helpers';
import PillLink from '../../components/pillLink';
import BlockArea from '../../components/blockArea';
import { useTranslation } from 'react-i18next';
import { currentLocale } from '../../utils/helpers';
import useNavigation from '../../hooks/navigation';
import useMetadata from '../../hooks/metadata';
import { findHitUrl, HitModel } from '../../utils/search';
import { ContentType } from '../../types/content';
import { SuggestionWithUrl } from '../../components/suggestionCard';
import { Locale } from '../../types/locale';
import RichText from '../../components/RichText';
interface ActivityGroupPageTemplateProps {
  data: StrapiActivityGroup;
}

interface QueryType {
  activityGroup: StrapiActivityGroup;
  ageGroup: StrapiAgeGroup | null;
  otherGroups: { nodes: StrapiActivityGroup[] };
  suggestions: { nodes: StrapiSuggestion[] };
  activities: { nodes: StrapiActivity[] };
  localeData: { nodes: SitePage[] };
}

const activityGroupTemplate = ({ path, data }: PageProps<QueryType, ActivityGroupPageTemplateProps>) => {
  const {
    title,
    ingress,
    content,
    main_image,
    age_group,
    logo,
    links,
    activity_group_category,
    activitygroup_term,
    content_area,
    mandatory_activities_title,
    mandatory_activities_description,
    optional_activities_title,
    optional_activities_description,
    locale,
  } = data.activityGroup;

  const localeLinks = sitePageDataToLocaleLinks(data.localeData.nodes);
  const navigation = useNavigation(currentLocale());
  const { t } = useTranslation();
  const metadata = useMetadata(locale || 'fi');

  const { ageGroup, suggestions, otherGroups, activities } = data;

  const subTitle = age_group?.title
    ? `${age_group.title}${activity_group_category?.name ? ' - ' + activity_group_category.name : ''}`
    : '';

  const suggestionsWithUrls = suggestions.nodes.map((suggestion) => ({
    ...suggestion,
    url: findHitUrl(suggestion as HitModel, ContentType.suggestion, navigation),
    logo: logo?.formats?.thumbnail?.url,
  }));

  return (
    <Layout
      showBreadCrumbs
      locale={locale as Locale}
      localeLinks={localeLinks}
      pageHeader={
        <HeroTitleSection
          mainImageUrl={prependApiUrl(main_image?.url || ageGroup?.main_image?.url) || ''}
          mainTitle={title || ''}
          subTitle={subTitle}
          logoUrl={prependApiUrl(logo?.formats?.thumbnail?.url || logo?.url) || ''}
          color={ageGroup?.color}
          smallMainTitle
        />
      }
    >
      <Metadata
        title={title || ''}
        description={ingress || ''}
        path={path}
        locale={locale as Locale}
        imageUrl={prependApiUrl(main_image?.url) || metadata.image || ''}
      />
      <div className="px-8 md:px-0">
        <div className="flex flex-col md:flex-row py-5">
          <div className="flex-1 text-xl font-sourceSansPro tracking-wide pb-3 md:py-0 md:pr-3">{ingress}</div>
          {(links?.length || 0) > 0 && (
            <div className="flex flex-row md:flex-col">
              {links?.map((link) => (
                <div className="mb-1 mr-2 md:mr-0">
                  <PillLink to={link?.url || ''} color={ageGroup?.color} attachmentIcon={true}>
                    {link?.description}
                  </PillLink>
                </div>
              ))}
            </div>
          )}
        </div>
        <RichText html={content} />
        <Activities
          activities={activities.nodes}
          mandatoryTitle={mandatory_activities_title}
          mandatoryDescription={mandatory_activities_description}
          optionalTitle={optional_activities_title}
          optionalDescription={optional_activities_description}
        />
        <div className="my-5">
          <h2 className="uppercase my-5 sm:text-4xl md:text-xxlw">{t('uusimmat-toteutusvinkit')}</h2>
          <Suggestions suggestions={suggestionsWithUrls as SuggestionWithUrl[]} />
        </div>
        <h2 className="uppercase text-center mb-10 mt-20 sm:text-4xl md:text-xxlw">{`${t('muut')} ${
          activitygroup_term?.plural
        }`}</h2>
        <ActivityGroupList groups={otherGroups.nodes} />
        <BlockArea blocks={content_area} />
      </div>
    </Layout>
  );
};

export default activityGroupTemplate;

export const query = graphql`
  query Query($id: Int, $ageGroupId: Int) {
    activityGroup: strapiActivityGroup(strapiId: { eq: $id }) {
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
      ingress
      content
      mandatory
      sort_order
      logo {
        ...ImageFragment
      }
      main_image {
        ...ImageFragment
      }
      activities {
        id
        title
      }
      activity_group_category {
        name
        sort_order
      }
      activitygroup_term {
        name
        plural
        singular
      }
      subactivity_term {
        name
        plural
        singular
      }
      subactivitygroup_term {
        name
        plural
        singular
      }
      age_group {
        id
        title
      }
      links {
        description
        url
      }
      mandatory_activities_description
      optional_activities_description
      mandatory_activities_title
      optional_activities_title
    }
    ageGroup: strapiAgeGroup(activity_groups: { elemMatch: { id: { eq: $id } } }) {
      strapiId
      title
      main_image {
        url
      }
      color
    }
    otherGroups: allStrapiActivityGroup(filter: { strapiId: { ne: $id }, age_group: { id: { eq: $ageGroupId } } }) {
      nodes {
        fields {
          path
        }
        logo {
          url
          formats {
            thumbnail {
              width
              url
              size
              name
              mime
              height
            }
          }
        }
        activity_group_category {
          name
          id
        }
        title
        strapiId
      }
    }
    suggestions: allStrapiSuggestion(
      filter: { activity: { activity_group: { eq: $id } } }
      sort: { fields: published_at, order: DESC }
      limit: 4
    ) {
      nodes {
        author
        content
        published_at
        title
        strapiId
        locale
        like_count
        id
        activity {
          title
          id
        }
        locations {
          slug
          name
          icon {
            url
          }
        }
        duration {
          name
          slug
        }
      }
    }
    activities: allStrapiActivity(filter: { activity_group: { id: { eq: $id } } }) {
      nodes {
        fields {
          path
        }
        title
        activity_group {
          title
          logo {
            formats {
              thumbnail {
                url
              }
            }
          }
        }
        age_group {
          color
          title
        }
        suggestions {
          title
        }
        duration {
          name
          slug
        }
        locations {
          slug
          name
          icon {
            url
          }
        }
        mandatory
      }
    }
  }
`;
