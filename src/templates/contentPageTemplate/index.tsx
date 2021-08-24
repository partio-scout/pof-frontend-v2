import React from 'react';
import Layout from '../../layouts/default';
import renderBlock from '../../utils/renderBlock';
import { StrapiContentpage } from '../../../graphql-types';

interface ContentPageTemplateProps {
  pageContext: {
    data: StrapiContentpage;
  };
}

interface MainContentProps {
  data: StrapiContentpage;
}

export interface ContentBlock {
  block_width: {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  };
  image: any;
}

const MainContent = ({ data }: MainContentProps) => (
  <div className="flex flex-wrap px-20">
    <div className="w-full md:w-1/2">
      <h1 className="mb-2">{data.title}</h1>
      <p>{data.ingress}</p>
    </div>
    {data.main_image && <img className="w-full md:w-1/2" src={data.main_image.url}></img>}
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
