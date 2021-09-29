import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../layouts/default';
import { PaddedContainer } from '../components/ui.general';
import Hero from '../components/hero';
import { StrapiFrontPage } from '../../graphql-types';
import BlockArea from '../components/blockArea';

export const query = graphql`
  {
    allStrapiFrontPage {
      nodes {
        content
        locale
        title
        ingress
      }
    }
  }
`;

const currentLocale = 'fi';

const IndexPage = ({ data }: PageProps<{ allStrapiFrontPage: { nodes: StrapiFrontPage[] } }>) => {
  const { nodes: frontPages } = data.allStrapiFrontPage;

  const correctFrontPage = frontPages.find((page) => page.locale === currentLocale);

  return (
    <Layout>
      <PaddedContainer>
        <Hero data={correctFrontPage} />
        <BlockArea blocks={correctFrontPage?.content} />
      </PaddedContainer>
    </Layout>
  );
};

export default IndexPage;
