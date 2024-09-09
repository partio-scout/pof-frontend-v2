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
    locale
    title
    ingress
    hero_link_text
    hero_link_url
  }
}

`;

interface FrontPageQueryType {
  frontPage: Pick<
    StrapiFrontPage,
   'data' | 'locale' | 'title' | 'ingress' | 'hero_image' | 'hero_link_text' | 'hero_link_url'
  >;
}

const IndexPage = ({ data }: PageProps<FrontPageQueryType, FrontPageTemplateProps>) => {
  const {
    frontPage: { data: content, title, hero_link_text, hero_link_url, hero_image, locale },
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
