import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../../layouts/default';
import { PaddedContainer } from '../../components/ui.general';
import Hero from '../../components/hero';
import BlockArea from '../../components/blockArea';
import { StrapiFrontPage } from '../../../graphql-types';
import { Locale } from '../../types/locale';

interface FrontPageTemplateProps {
  locale: string;
}

export const query = graphql`
  query FrontPageQuery($locale: String!) {
    frontPage: strapiFrontPage(locale: { eq: $locale }) {
      content
      locale
      title
      ingress
    }
  }
`;

interface FrontPageQueryType {
  frontPage: Pick<StrapiFrontPage, 'content' | 'locale' | 'title' | 'ingress'>;
}

const IndexPage = ({ pageContext, data }: PageProps<FrontPageQueryType, FrontPageTemplateProps>) => {
  const { frontPage } = data;

  return (
    <Layout locale={frontPage.locale as Locale}>
      <PaddedContainer>
        <Hero data={frontPage} />
        <BlockArea blocks={frontPage.content} />
      </PaddedContainer>
    </Layout>
  );
};

export default IndexPage;
