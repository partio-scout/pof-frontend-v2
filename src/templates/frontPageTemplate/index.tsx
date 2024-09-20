import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../../layouts/default';
import Hero from '../../components/hero';
import BlockArea from '../../components/blockArea';
import { StrapiFrontPage } from '../../../graphql-types';
import { Locale } from '../../types/locale';

interface FrontPageTemplateProps {
  locale: string;
}

export const query = graphql`
query FrontPageQuery($locale: String) {
  frontPage: strapiFrontPage(locale: { eq: $locale }) {
    content {
      __typename
      ... on STRAPI__COMPONENT_BLOCKS_ACTIVITY_BLOCK {
        strapi_id
        strapi_component
        activities {
          strapi_id
          title
        }
        block_width {
          name
        }
      }
      ... on STRAPI__COMPONENT_BLOCKS_AGE_GROUP_BLOCK {
        strapi_id
        strapi_component
        title
        block_width {
          name
        }
      }
      ... on STRAPI__COMPONENT_BLOCKS_CONTENT_PAGE_BLOCK {
        id
        strapi_component
        content_pages {
          title
          strapi_id
          meta_description
          locale
          publishedAt
          ingress
          main_image {
            alternativeText
            caption
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
            height
            name
            size
            strapi_id
            url
          }
        }
      }
    }
    locale
    title
    hero_image {
      url
    }
    locale
    title
    hero_link_text
    hero_link_url
    id
  }
}
`;

interface FrontPageQueryType {
  frontPage: Pick<
    StrapiFrontPage,
   'content' | 'locale' | 'title' | 'hero_image' | 'hero_link_text' | 'hero_link_url'
  >;
}

const IndexPage = ({ data }: PageProps<FrontPageQueryType, FrontPageTemplateProps>) => {
  const {
    frontPage: { content, title, hero_link_text, hero_link_url, hero_image, locale },
  } = data;

  return (
    <Layout
      locale={locale as Locale}
      pageHeader={<Hero title={title} linkText={hero_link_text} linkUrl={hero_link_url} imageUrl={hero_image?.url} />}
    >
      <BlockArea blocks={content} />
    </Layout>
  );
};

export default IndexPage;
