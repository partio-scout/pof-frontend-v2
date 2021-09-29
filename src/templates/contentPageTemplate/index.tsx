import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../../layouts/default';
import { StrapiContentPage } from '../../../graphql-types';
import BlockArea from '../../components/blockArea';
import { prependApiUrl } from '../../utils/helpers';
import RichText from '../../components/RichText';
import ContentPageNav from './contentPageNav';

const currentLocale = 'fi';

interface ContentPageTemplateProps {
  data: StrapiContentPage;
}

interface MainContentProps {
  data: StrapiContentPage;
}

const MainContent = ({ data }: MainContentProps) => (
  <div className="flex flex-wrap mt-14">
    <div className="w-full lg:w-1/2 flex-grow pr-3">
      <h1 className="mb-2 break-words">{data.title}</h1>
      <RichText html={data.main_text} />
    </div>
    {data.main_image && <img className="w-full md:w-1/2" src={prependApiUrl(data.main_image?.url)}></img>}
  </div>
);

const ContentPageTemplate = ({ pageContext, path }: PageProps<any, ContentPageTemplateProps>) => {
  const { strapiId } = pageContext.data;

  return (
    <Layout
      showBreadCrumbs
      pageHeader={<ContentPageNav pageId={strapiId!} path={path} currentLocale={currentLocale} />}
    >
      <MainContent data={pageContext.data} />
      <BlockArea blocks={pageContext.data.content} />
    </Layout>
  );
};

export default ContentPageTemplate;
