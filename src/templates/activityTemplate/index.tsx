import React from 'react';
import Layout from '../../layouts/default';
import mockHero from '../../images/mockHero.png';
import HeroTitleSection from '../../components/heroTitleSection';
import { PaddedContainer } from '../../components/ui.general';
import ActivityContentSection from './activityContentSection';
import ActivitySpecsSection from './activitySpecsSection';
import { PageProps } from 'gatsby';
import { StrapiActivity } from '../../../graphql-types';
import SuggestionsSection from './suggestionsSection/';

interface ActivityPageTemplateProps {
  data: StrapiActivity;
}

const ActivityPageTemplate = ({ pageContext }: PageProps<object, ActivityPageTemplateProps>) => (
  <Layout showBreadCrumbs>
    <div className="relative overflow-hidden h-86 mb-8">
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

export default ActivityPageTemplate;
