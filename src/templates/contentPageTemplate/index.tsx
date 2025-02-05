import React from 'react';
import Layout from '../../layouts/default';
import { StrapiContentPage, SitePage } from '../../../graphql-types';
import BlockArea, { SitePageLocaleFragment } from '../../components/blockArea';
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
  activityUrls: { nodes: SitePageLocaleFragment[]; }
}

const MainContent = ({ data }: ContentPageTemplateProps) => {
  return (
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
            title={data.main_image?.caption || ''}
          ></img>
        </div>
  
      )}
    </div>
  )
};

const ContentPageTemplate = ({ path, data }: PageProps<ContentPageQueryType, ContentPageTemplateProps>) => {
  const { strapi_id, content, locale } = data.contentPage;
  const localeLinks = sitePageDataToLocaleLinks(data.localeData?.nodes);
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
        description={data.contentPage.ingress?.data || ''}
        path={path}
        locale={currentLocale()}
        imageUrl={prependApiUrl(data.contentPage.main_image?.url) || metadata.image || ''}
      />
      <MainContent data={data.contentPage} />
      <BlockArea blocks={content} links={data.activityUrls?.nodes} />
    </Layout>
  );
};

export default ContentPageTemplate;

export const query = graphql`
query getContentPage($locale: String, $id: String) {
  activityUrls: allSitePage (
    filter: {context: {locale: {eq: $locale}, type: {eq: "Activity"}}}
  ) {
    nodes {
      ...SitePageLocaleFragment
    }
  }

  contentPage: strapiContentPage(id: { eq: $id }) {
    id
    strapi_id
    updatedAt
    createdAt
    publishedAt
    locale
    title
    main_image {
      url
    }
    main_text: main_text_data
    ingress {
      data
    }

    content {
      ... on STRAPI__COMPONENT_BLOCKS_ACTIVITY_BLOCK {
        id
        strapi_id
        strapi_component
        activities {
          title
          strapi_id
          id
        }
        block_width {
          name
        }
      }
      ... on STRAPI__COMPONENT_BLOCKS_HERO_BLOCK {
        id
        link_text
        link_url
        text {
          data
        }
        title
        strapi_id
        strapi_component
      }
      ... on STRAPI__COMPONENT_BLOCKS_IMAGE_BLOCK {
        id
        strapi_id
        strapi_component
        block_width {
          name
        }
        image {
          url
          alternativeText
          caption
        }
      }
      ... on STRAPI__COMPONENT_BLOCKS_LINK_BLOCK {
        id
        url
        text {
          data
        }
        strapi_id
        strapi_component
        block_width {
          name
        }
      }
      ... on STRAPI__COMPONENT_BLOCKS_TEXT_BLOCK {
        id
        title
        strapi_id
        strapi_component
        textBlockText: text {
          data {
            text
          }
        }
        block_width {
          name
        }
      }
      ... on STRAPI__COMPONENT_BLOCKS_VIDEO_BLOCK {
        id
        strapi_id
        strapi_component
        video_url
        block_width {
          name
        }
      }
    }

  }
}
`;
