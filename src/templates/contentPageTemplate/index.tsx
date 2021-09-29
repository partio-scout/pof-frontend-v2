import React from 'react';
import { graphql, PageProps } from 'gatsby';
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

interface ContentPageQueryType {
  contentPage: StrapiContentPage;
}

const MainContent = ({ data }: ContentPageTemplateProps) => (
  <div className="flex flex-wrap mt-14">
    <div className="w-full lg:w-1/2 flex-grow pr-3">
      <h1 className="mb-2 break-words">{data.title}</h1>
      <RichText html={data.main_text} />
    </div>
    {data.main_image && <img className="w-full md:w-1/2" src={prependApiUrl(data.main_image?.url)}></img>}
  </div>
);

const ContentPageTemplate = ({ path, data }: PageProps<ContentPageQueryType, ContentPageTemplateProps>) => {
  const { strapiId, content } = data.contentPage;

  return (
    <Layout
      showBreadCrumbs
      pageHeader={<ContentPageNav pageId={strapiId!} path={path} currentLocale={currentLocale} />}
    >
      <MainContent data={data.contentPage} />
      <BlockArea blocks={content} />
    </Layout>
  );
};

export default ContentPageTemplate;

export const query = graphql`
  query getContentPage($id: Int!) {
    contentPage: strapiContentPage(strapiId: { eq: $id }) {
      locale
      localizations {
        locale
        id
      }
      title
      updated_at
      created_at
      published_at
      id
      strapiId
      content
      main_text
      main_image {
        url
      }
      ingress
    }
  }
`;
