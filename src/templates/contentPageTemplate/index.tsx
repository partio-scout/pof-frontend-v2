import React from 'react';
import Layout from '../../layouts/default';
import { StrapiContentPage, SitePage } from '../../../graphql-types';
import BlockArea from '../../components/blockArea';
import { changeLanguage, prependApiUrl, currentLocale } from '../../utils/helpers';
import RichText from '../../components/RichText';
import { graphql, PageProps } from 'gatsby';
import ContentPageNav from './contentPageNav';
import { Locale } from '../../types/locale';

interface ContentPageTemplateProps {
  data: StrapiContentPage;
}
interface LocalePathData {
  localeData: { nodes: SitePage[] };
}
interface MainContentProps {
  data: StrapiContentPage;
}

export const query = graphql`
  query ContentPageQuery($localizations: [Int], $type: String) {
    localeData: allSitePage(filter: { context: { data: { strapiId: { in: $localizations } }, type: { eq: $type } } }) {
      nodes {
        path
        context {
          data {
            locale
          }
        }
      }
    }
  }
`;

const MainContent = ({ data }: MainContentProps) => (
  <div className="flex flex-wrap mt-14">
    <div className="w-full md:w-1/2">
      <h1 className="mb-2">{data.title}</h1>
      <RichText html={data.main_text} />
    </div>
    {data.main_image && <img className="w-full md:w-1/2" src={prependApiUrl(data.main_image?.url)}></img>}
  </div>
);

const ContentPageTemplate = ({ pageContext, path, data }: PageProps<LocalePathData, ContentPageTemplateProps>) => {
  changeLanguage(pageContext.data.locale as Locale);
  const { strapiId } = pageContext.data;
  return (
    <Layout
      showBreadCrumbs
      pageHeader={<ContentPageNav pageId={strapiId!} path={path} currentLocale={currentLocale()} />}
    >
      <MainContent data={pageContext.data} />
      <BlockArea blocks={pageContext.data.content} />
    </Layout>
  );
};

export default ContentPageTemplate;
