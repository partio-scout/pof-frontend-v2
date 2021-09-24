import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../../layouts/default';
import { PaddedContainer } from '../../components/ui.general';
import Hero from '../../components/hero';
import BlockArea from '../../components/blockArea';
import { changeLanguage } from '../../utils/helpers';

interface FrontPageTemplateProps {
  content: any;
  locale: string;
}

const IndexPage = ({ pageContext }: PageProps<object, FrontPageTemplateProps>) => {
  changeLanguage(pageContext.locale);
  return (
    <Layout>
      <PaddedContainer>
        <Hero />
        <BlockArea blocks={pageContext?.content} />
      </PaddedContainer>
    </Layout>
  );
};

export default IndexPage;
