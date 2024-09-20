import React from 'react';
import HeroTitleSection from '../../components/heroTitleSection';
import Layout from '../../layouts/default';
import { graphql, PageProps } from 'gatsby';
import { StrapiActivityGroup, StrapiAgeGroup, SitePage } from '../../../graphql-types';
import Metadata from '../../components/metadata';
import useMetadata from '../../hooks/metadata';
import ActivityGroupList from '../../components/activityGroupList';
import { prependApiUrl, sitePageDataToLocaleLinks } from '../../utils/helpers';
import PillLink from '../../components/pillLink';
import BlockArea from '../../components/blockArea';
import RichText from '../../components/RichText';
import { useTranslation } from 'react-i18next';
import { Locale } from '../../types/locale';

interface AgeGroupPageTemplateProps {
  data: StrapiAgeGroup;
}

interface QueryType {
  ageGroup: StrapiAgeGroup;
  activityGroups: { nodes: StrapiActivityGroup[] };
  localeData: { nodes: SitePage[] };
}

const AgeGroupTemplate = ({ path, data }: PageProps<QueryType, AgeGroupPageTemplateProps>) => {

  const {
    title,
    ingress,
    content,
    main_image,
    maximum_age,
    minimum_age,
    logo,
    links,
    subactivitygroup_term,
    lower_content_area,
    upper_content_area,
    color,
    locale
  } = data.ageGroup;


  const { t } = useTranslation();
  const activityGroups = data.activityGroups.nodes;
  const subTitle = t('vuotiaat', { minAge: minimum_age, maxAge: maximum_age });

  const localeLinks = sitePageDataToLocaleLinks(data.localeData?.nodes);

  const metadata = useMetadata(locale || 'fi');

  return (
    <Layout
      showBreadCrumbs={true}
      locale={locale as Locale}
      localeLinks={localeLinks}
      pageHeader={
        <HeroTitleSection
          mainImageUrl={prependApiUrl(main_image?.url) || ''}
          mainTitle={title || ''}
          subTitle={subTitle}
          logoUrl={prependApiUrl(logo?.formats?.thumbnail?.url || logo?.url) || ''}
          color={color}
          smallMainTitle
        />
      }
    >
      <Metadata
        title={title || ''}
        description={ingress || content.data?.content || ''}
        path={path}
        locale={locale as Locale}
        imageUrl={metadata.image || prependApiUrl(main_image?.url) || ''}
      />
      <div className="px-8 md:px-0">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col flex-1 pb-3 md:py-0 md:pr-3">
            <div className="text-xl font-sourceSansPro tracking-wide font-semibold mb-4">{ingress}</div>
            <RichText html={content.data?.content} />
          </div>
          {(links?.length || 0) > 0 && (
            <div className="flex flex-col sm:flex-row md:flex-col">
              {links?.map((link) => (
                <div key={link?.url} className="mb-1 mr-2 md:mr-0">
                  <PillLink to={link?.url || ''} icon={link?.url!} color={color}>
                    {link && link.description}
                  </PillLink>
                </div>
              ))}
            </div>
          )}
        </div>
        <BlockArea blocks={upper_content_area} />
        <h2 className="uppercase text-center my-6 sm:text-4xl md:text-xxlw">{subactivitygroup_term?.plural}</h2>
        <ActivityGroupList groups={activityGroups} links={data.localeData?.nodes} />
        <BlockArea blocks={lower_content_area} />
      </div>
    </Layout>
  );
};

export default AgeGroupTemplate;

export const query = graphql`
query AgeGroupQuery($locale: String, $strapi_id: Int, $id: String) {
  localeData: allSitePage(filter: { context: { locale: { eq: $locale }, type: { eq: "ActivityGroup" } } }) {
    nodes {
      ...SitePageLocaleFragment
    }
  }
  ageGroup: strapiAgeGroup(strapi_id: { eq: $strapi_id }) {
    locale
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
    ingress
    links {
      description
      id
      url
    }
    logo {
      id
      name
      alternativeText
      caption
      width
      height
      formats {
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
      hash
      ext
      mime
      size
      url
      createdAt
      updatedAt
    }
    maximum_age
    minimum_age
    main_image {
      id
      name
      alternativeText
      caption
      width
      height
      formats {
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
      hash
      ext
      mime
      size
      url
      createdAt
      updatedAt
    }
    title
    upper_content_area {
      ... on STRAPI__COMPONENT_BLOCKS_TEXT_BLOCK {
        id
        strapi_id
        text
        title
        strapi_component
      }
      ... on STRAPI__COMPONENT_BLOCKS_VIDEO_BLOCK {
        id
        video_url
        strapi_id
        strapi_component
      }
    }
    title
    lower_content_area {
      ... on STRAPI__COMPONENT_BLOCKS_TEXT_BLOCK {
        id
        strapi_id
        text
        title
        strapi_component
      }
      ... on STRAPI__COMPONENT_BLOCKS_VIDEO_BLOCK {
        id
        video_url
        strapi_id
        strapi_component
      }
    }
    color
  }
  activityGroups: allStrapiActivityGroup(filter: { age_group: { id: { eq: $id } } }) {
    nodes {
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
      sort_order
      title
      strapi_id
    }
  }
}
`;
