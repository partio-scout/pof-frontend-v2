import React from 'react';
import Layout from '../../layouts/default';
import { StrapiContentPage } from '../../../graphql-types';
import BlockArea from '../../components/blockArea';
import { prependApiUrl } from '../../utils/helpers';
import RichText from '../../components/RichText';

interface ContentPageTemplateProps {
  pageContext: {
    data: StrapiContentPage;
  };
}

interface MainContentProps {
  data: StrapiContentPage;
}

const MainContent = ({ data }: MainContentProps) => (
  <div className="flex flex-wrap px-20">
    <div className="w-full md:w-1/2">
      <h1 className="mb-2">{data.title}</h1>
      <RichText html={data.main_text} />
    </div>
    {data.main_image && <img className="w-full md:w-1/2" src={prependApiUrl(data.main_image?.url)}></img>}
  </div>
);

const ContentPageTemplate = ({ pageContext }: ContentPageTemplateProps) => (
  <Layout omitPadding showBreadCrumbs>
    <MainContent data={pageContext.data} />
    <BlockArea blocks={pageContext.data.content} />
  </Layout>
);

export default ContentPageTemplate;
