import React from 'react';
import Layout from '../../layouts/default';
import renderBlock from '../../utils/renderBlock';
import { StrapiContentpage } from '../../../graphql-types';
import { ContentBlock } from '../../components/blocks';

interface ContentPageTemplateProps {
  pageContext: {
    data: StrapiContentpage;
  };
}

interface MainContentProps {
  data: StrapiContentpage;
}

const MainContent = ({ data }: MainContentProps) => (
  <div className="flex flex-wrap px-20">
    <div className="w-full md:w-1/2">
      <h1 className="mb-2">{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.main_text! }}></div>
    </div>
    {data.main_image && <img className="w-full md:w-1/2" src={data.main_image.url!}></img>}
  </div>
);

const ContentPageTemplate = ({ pageContext }: ContentPageTemplateProps) => (
  <Layout omitPadding>
    <MainContent data={pageContext.data} />
    <div className="flex flex-wrap justify-between mt-8">
      {pageContext.data.content.map((block: ContentBlock) => renderBlock(block))}
    </div>
  </Layout>
);

export default ContentPageTemplate;
