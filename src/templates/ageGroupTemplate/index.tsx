import React from 'react';
import HeroTitleSection from '../../components/heroTitleSection';
import Layout from '../../layouts/default';
import { graphql, PageProps } from 'gatsby';
import { StrapiActivityGroup, StrapiAgeGroup, SitePage } from '../../../graphql-types';
import Metadata from '../../components/metadata';
import ActivityGroupList from '../../components/activityGroupList';
import { prependApiUrl, sitePageDataToLocaleLinks } from '../../utils/helpers';
import PillLink from '../../components/pillLink';
import BlockArea from '../../components/blockArea';
import RichText from '../../components/RichText';
import { currentLocale } from '../../utils/helpers';
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
    locale,
  } = data.ageGroup;

  const { t } = useTranslation();
  const activityGroups = data.activityGroups.nodes;
  const localeLinks = sitePageDataToLocaleLinks(data.localeData.nodes);

  const subTitle = `${minimum_age}-${maximum_age} ${t('aged')}`;

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
      <Metadata title={title || ''} description={ingress || ''} path={path} locale={currentLocale()} />
      <div className="px-8 md:px-0">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col flex-1 pb-3 md:py-0 md:pr-3">
            <div className="text-xl font-sourceSansPro tracking-wide font-semibold mb-4">{ingress}</div>
            <RichText html={content} />
          </div>
          {(links?.length || 0) > 0 && (
            <div className="flex flex-row md:max-w-sm md:flex-col">
              {links?.map((link) => (
                <div className="mb-1 mr-2 md:mr-0">
                  <PillLink to={link?.url || ''}>{link?.description}</PillLink>
                </div>
              ))}
            </div>
          )}
        </div>
        <BlockArea blocks={upper_content_area} />
        <h2 className="uppercase text-center my-6">{subactivitygroup_term?.plural}</h2>
        <ActivityGroupList groups={activityGroups} />
        <BlockArea blocks={lower_content_area} />
      </div>
    </Layout>
  );
};

export default AgeGroupTemplate;

export const query = graphql`
  query ActivityGroupQuery($id: Int, $localizations: [Int], $type: String) {
    localeData: allSitePage(filter: { context: { id: { in: $localizations }, type: { eq: $type } } }) {
      nodes {
        ...SitePageLocaleFragment
      }
    }
    ageGroup: strapiAgeGroup(strapiId: { eq: $id }) {
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
      ingress
      links {
        description
        id
        url
      }
      logo {
        ...ImageFragment
      }
      maximum_age
      minimum_age
      subactivitygroup_term {
        locale
        name
        plural
        singular
      }
      main_image {
        ...ImageFragment
      }
      title
      upper_content_area
      lower_content_area
      color
    }
    activityGroups: allStrapiActivityGroup(filter: { age_group: { id: { eq: $id } } }) {
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
          sort_order
        }
        sort_order
        title
        strapiId
      }
    }
  }
`;
