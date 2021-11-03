import React from 'react';
import Layout from '../../layouts/default';
import { StrapiContentPage, SitePage } from '../../../graphql-types';
import BlockArea from '../../components/blockArea';
import { prependApiUrl, currentLocale, sitePageDataToLocaleLinks } from '../../utils/helpers';
import RichText from '../../components/RichText';
import { graphql, PageProps } from 'gatsby';
import ContentPageNav from './contentPageNav';
import { Locale } from '../../types/locale';

interface ContentPageTemplateProps {
  data: StrapiContentPage;
}

interface ContentPageQueryType {
  contentPage: StrapiContentPage;
  localeData: { nodes: SitePage[] };
}

const MainContent = ({ data }: ContentPageTemplateProps) => (
  <div className="flex flex-wrap mt-14">
    <div className="w-full lg:w-1/2 flex-grow pr-3">
      <h1 className="mb-2 break-words sm:text-xxxlt md:text-xxxlw">{data.title}</h1>
      <RichText html={data.main_text} />
    </div>
    {data.main_image && (
      <img
        className="w-full md:w-1/2"
        src={prependApiUrl(data.main_image?.url)}
        alt={data.main_image?.alternativeText || ''}
        title={data.main_image.caption || ''}
      ></img>
    )}
  </div>
);

const ContentPageTemplate = ({ path, data }: PageProps<ContentPageQueryType, ContentPageTemplateProps>) => {
  const { strapiId, content, locale } = data.contentPage;
  const localeLinks = sitePageDataToLocaleLinks(data.localeData.nodes);

  return (
    <Layout
      showBreadCrumbs
      localeLinks={localeLinks}
      locale={locale as Locale}
      pageHeader={<ContentPageNav pageId={strapiId!} path={path} currentLocale={currentLocale()} />}
    >
      <MainContent data={data.contentPage} />
      <BlockArea blocks={content} />
    </Layout>
  );
};

export default ContentPageTemplate;

export const query = graphql`
  query getContentPage($id: Int!, $localizations: [Int], $type: String) {
    localeData: allSitePage(filter: { context: { id: { in: $localizations }, type: { eq: $type } } }) {
      nodes {
        ...SitePageLocaleFragment
      }
    }
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
