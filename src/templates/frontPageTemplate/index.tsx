import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../../layouts/default';
import { PaddedContainer } from '../../components/ui.general';
import Hero from '../../components/hero';
import BlockArea from '../../components/blockArea';
import { changeLanguage } from '../../utils/helpers';
import { StrapiFrontPage } from '../../../graphql-types';

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
  frontPage: Pick<StrapiFrontPage, 'content' | 'locale' | 'title' | 'ingress'>
}

const IndexPage = ({ pageContext, data }: PageProps<FrontPageQueryType, FrontPageTemplateProps>) => {
  const { frontPage } = data;

  changeLanguage(pageContext.locale);

  return (
    <Layout>
      <PaddedContainer>
        <Hero data={frontPage} />
        <BlockArea blocks={frontPage.content} />
      </PaddedContainer>
    </Layout>
  );
};

export default IndexPage;
