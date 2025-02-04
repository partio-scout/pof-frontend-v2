import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../../layouts/default';
import Hero from '../../components/hero';
import BlockArea, { SitePageLocaleFragment } from '../../components/blockArea';
import { SitePage, SitePageContext, StrapiFrontPage } from '../../../graphql-types';
import { Locale } from '../../types/locale';

interface FrontPageTemplateProps {
  locale: string;
}

export const query = graphql`
query FrontPageQuery($locale: String) {
  activityUrls: allSitePage (
    filter: {context: {locale: {eq: $locale}, type: {eq: "Activity"}}}
  ) {
    nodes {
      ...SitePageLocaleFragment
    }
  }
  frontPage: strapiFrontPage(locale: { eq: $locale }) {
    locale
    title
    hero_image {
      url
    }
    locale
    title
    hero_image {
      url
    }
    locale
    title
    id

    content {

      ... on STRAPI__COMPONENT_BLOCKS_ACTIVITY_BLOCK {
        id
        strapi_id
        strapi_component
        activities {
          title
          strapi_id
          id
          wp_guid
        }
        block_width {
          name
        }
      }
      ... on STRAPI__COMPONENT_BLOCKS_AGE_GROUP_BLOCK {
        id
        title
        strapi_id
        strapi_component
        ingress {
					data {
						ingress
          }
        }
        block_width {
					name
        }
      }
      ... on STRAPI__COMPONENT_BLOCKS_TEXT_BLOCK {
        id
        title
        strapi_id
        strapi_component
        textBlockText: text {
					data {
						text
					}
				}
      }
      ... on STRAPI__COMPONENT_BLOCKS_CONTENT_PAGE_BLOCK {
        id
        strapi_component
        strapi_id
        content_pages {
          title
          ingress {
            data
          }
          main_image {
            url
            alternativeText
          }
          publishedAt
          id
          strapi_id
        }
      }

    }
  }
}
`;

interface FrontPageQueryType {
  frontPage: Pick<
    StrapiFrontPage,
   'content' | 'locale' | 'title' | 'hero_image'
  >;
  activityUrls: { nodes: SitePageLocaleFragment[] };
}

const IndexPage = ({ data }: PageProps<FrontPageQueryType, FrontPageTemplateProps>) => {
  const {
    frontPage: { content, title, hero_image, locale },
    activityUrls: { nodes: activityUrls },
  } = data;

  return (
    <Layout
      locale={locale as Locale}
      pageHeader={<Hero title={title} imageUrl={hero_image?.url} />}
    >
      <BlockArea blocks={content} links={activityUrls} />
    </Layout>
  );
};

export default IndexPage;
