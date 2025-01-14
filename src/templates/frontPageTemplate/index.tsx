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
      ... on STRAPI__COMPONENT_BLOCKS_ACTIVITY_BLOCK {
        id
        strapi_id
        strapi_component
      }
      ... on STRAPI__COMPONENT_BLOCKS_AGE_GROUP_BLOCK {
        id
        title
        strapi_id
        strapi_component
      }
      ... on STRAPI__COMPONENT_BLOCKS_HERO_BLOCK {
        id
        title
        strapi_id
        strapi_component
        link_url
        link_text
      }
      ... on STRAPI__COMPONENT_BLOCKS_TEXT_BLOCK {
        id
        title
        strapi_id
        strapi_component
      }
    }
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
