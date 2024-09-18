import React from 'react';
import Layout from '../../layouts/default';
import { StrapiContentPage, SitePage } from '../../../graphql-types';
import BlockArea from '../../components/blockArea';
import { prependApiUrl, currentLocale, sitePageDataToLocaleLinks } from '../../utils/helpers';
import RichText from '../../components/RichText';
import { graphql, PageProps } from 'gatsby';
import ContentPageNav from './contentPageNav';
import { Locale } from '../../types/locale';
import Metadata from '../../components/metadata';
import useMetadata from '../../hooks/metadata';
interface ContentPageTemplateProps {
  data: StrapiContentPage;
}

interface ContentPageQueryType {
  contentPage: StrapiContentPage;
  localeData: { nodes: SitePage[] };
}

const MainContent = ({ data }: ContentPageTemplateProps) => (
  <div className="flex flex-wrap mt-14">
    <div className="w-full lg:w-1/2 grow pr-3">
      <h1 className="mb-2 break-words sm:text-xxxlt md:text-xxxlw">{data.title}</h1>
      <RichText html={data.main_text} />
    </div>
    {data.main_image && (
      <div className="w-full md:w-1/2">

        <img
          src={prependApiUrl(data.main_image?.url)}
          alt={data.main_image?.alternativeText || ''}
          title={data.main_image.caption || ''}
        ></img>
      </div>

    )}
  </div>
);

const ContentPageTemplate = ({ path, data }: PageProps<ContentPageQueryType, ContentPageTemplateProps>) => {
  const { strapi_id, content, locale, main_text } = data.contentPage;
  const localeLinks = sitePageDataToLocaleLinks(data.localeData.nodes);
  const metadata = useMetadata(locale || 'fi');

  console.log('data', data);
  data.contentPage.main_text = main_text;

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
query getContentPage($locale: String, $type: String, $id: String) {
  localeData: allSitePage(filter: { context: { locale: { eq: $locale }, type: { eq: $type } } }) {
    nodes {
      ...SitePageLocaleFragment
    }
  }
  contentPage: strapiContentPage(id: { eq: $id }) {
    locale
    title
    updatedAt
    createdAt
    publishedAt
    id
    strapi_id
    main_text: main_text_data
    main_image {
      url
    }
    ingress
    content {
      __typename
      ... on STRAPI__COMPONENT_BLOCKS_AGE_GROUP_BLOCK {
        strapi_id
        strapi_component
        title
        block_width {
          name
        }
      }
      ... on STRAPI__COMPONENT_BLOCKS_CONTENT_PAGE_BLOCK {
        id
        strapi_component
        content_pages {
          title
          strapi_id
          meta_description
          locale
          publishedAt
          ingress
          main_image {
            alternativeText
            caption
            formats {
              large {
                ext
                url
                hash
                mime
                name
                size
                width
                height
              }
              medium {
                ext
                url
                hash
                mime
                name
                size
                width
                height
              }
              small {
                ext
                url
                hash
                mime
                name
                size
                width
                height
              }
              thumbnail {
                ext
                url
                hash
                mime
                name
                size
                width
                height
              }
            }
            height
            name
            size
            strapi_id
            url
          }
        }
      }
    }
  }
}
`;
