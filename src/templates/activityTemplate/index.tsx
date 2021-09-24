import React from 'react';
import Layout from '../../layouts/default';
import mockHero from '../../images/mockHero.png';
import HeroTitleSection from '../../components/heroTitleSection';
import { PaddedContainer } from '../../components/ui.general';
import ActivityContentSection from './activityContentSection';
import ActivitySpecsSection from './activitySpecsSection';
import { PageProps, graphql } from 'gatsby';
import { StrapiActivity, SitePage } from '../../../graphql-types';
import SuggestionsSection from './suggestionsSection/';
import Metadata from '../../components/metadata';
import { Locale } from '../../types/locale';
import { changeLanguage, currentLocale } from '../../utils/helpers';

interface ActivityPageTemplateProps {
  data: StrapiActivity;
}

interface LocalePathData {
  localeData: { nodes: SitePage[] };
}

export const query = graphql`
  query MyQuery($localizations: [Int], $type: String) {
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

const ActivityPageTemplate = ({ pageContext, path, data }: PageProps<LocalePathData, ActivityPageTemplateProps>) => {
  changeLanguage(pageContext.data.locale as Locale);
  return (
    <Layout showBreadCrumbs>
      <Metadata
        title={pageContext.data.title || ''}
        description={pageContext.data.ingress || ''}
        path={path}
        locale={currentLocale()}
      />
      <div className="relative overflow-hidden h-80 mb-8">
        <div className="bg-gradient-to-t from-blue w-full h-full absolute opacity-75"></div>
        <img src={mockHero} className="w-full max-h-6/8 "></img>
      </div>
      <PaddedContainer>
        <div className="relative -mt-40 pt-2">
          <HeroTitleSection
            imageName="sudenpennut.svg"
            mainTitle={pageContext.data.activity_group?.title || ''}
            subTitle={pageContext.data.activity_group?.title || ''}
            smallMainTitle
          />
        </div>
        <h2 className="text-blue mt-2">{pageContext.data.title}</h2>
        <ActivityContentSection data={pageContext.data} />
        <ActivitySpecsSection data={pageContext.data} />
        <SuggestionsSection data={pageContext.data} activityId={pageContext.data.strapiId!} />
      </PaddedContainer>
    </Layout>
  );
};

export default ActivityPageTemplate;
