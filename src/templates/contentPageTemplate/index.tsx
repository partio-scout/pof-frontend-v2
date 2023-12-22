import React from 'react';
import Layout from '../../layouts/default';
import { Strapi_Content_Page, SitePage } from '../../../graphql-types';
import BlockArea from '../../components/blockArea';
import { prependApiUrl, currentLocale, sitePageDataToLocaleLinks } from '../../utils/helpers';
import RichText from '../../components/RichText';
import { graphql, PageProps } from 'gatsby';
import ContentPageNav from './contentPageNav';
import { Locale } from '../../types/locale';
import Metadata from '../../components/metadata';
import useMetadata from '../../hooks/metadata';
interface ContentPageTemplateProps {
  data: Strapi_Content_Page;
}

interface ContentPageQueryType {
  contentPage: Strapi_Content_Page;
  localeData: { nodes: SitePage[] };
}

const MainContent = ({ data }: ContentPageTemplateProps) => (
  <div className="flex flex-wrap mt-14">
    <div className="w-full lg:w-1/2 grow pr-3">
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
  const { strapi_id, content, locale } = data.contentPage;
  const localeLinks = sitePageDataToLocaleLinks(data.localeData.nodes);
  const metadata = useMetadata(locale || 'fi');

  return (
    <Layout
      showBreadCrumbs
      localeLinks={localeLinks}
      locale={locale as Locale}
      pageHeader={<ContentPageNav pageId={strapi_id!} path={path} currentLocale={currentLocale()} />}
    >
      <Metadata
        title={data.contentPage.title || ''}
        description={data.contentPage.ingress || ''}
        path={path}
        locale={currentLocale()}
        imageUrl={prependApiUrl(data.contentPage.main_image?.url) || metadata.image || ''}
      />
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
    contentPage: strapiContentPage(strapi_id: { eq: $id }) {
      locale
      localizations {
        data {
          id
          attributes {
            locale
          }
        }
      }
      title
      updatedAt
      createdAt
      publishedAt
      id
      strapi_id
      content {
        ...ActivityBlockFields
        ...AgeGroupBlockFields
        #...ContentPageBlockFields
        #...HeroBlockFields
        #...ImageBlockFields
        #...LinkBlockFields
        #...TextBlockFields
        #...VideoBlockFields
      }
      main_text {
        data {
          main_text
        }
      }
      #main_image {
      #  url
      #}
      ingress
    }
  }
`;
