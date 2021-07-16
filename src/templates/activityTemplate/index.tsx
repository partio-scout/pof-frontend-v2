import React from 'react';
import Layout from '../../layouts/default';
import mockHero from '../../images/mockHero.png';
import HeroTitleSection from '../../components/heroTitleSection';
import { PaddedContainer } from '../../components/ui.general';
import ActivityContentSection from './activityContentSection';
import AdditionalInfoSection from './additionalInfoSection';
import ActivitySpecsSection from './activitySpecsSection';
import { ActivityPageData } from './types';

interface ActivityPageTemplateProps {
  pageContext: {
    data: ActivityPageData;
  };
}

const ActivityPageTemplate = ({ pageContext }: ActivityPageTemplateProps) => (
  <Layout>
    {console.log('AP props: ', pageContext)}
    <div className="relative overflow-hidden h-86 mb-8">
      <div className="bg-gradient-to-t from-blue w-full h-full absolute opacity-75"></div>
      <img src={mockHero} className="w-full max-h-6/8 "></img>
    </div>
    <PaddedContainer>
      <div className="relative -mt-40 pt-2">
        <HeroTitleSection
          imageName="sudenpennut.svg"
          mainTitle={pageContext.data.activity_group.title}
          subTitle={pageContext.data.activity_group.title}
          smallMainTitle
        />
      </div>
      <h2 className="text-blue mt-2">{pageContext.data.title}</h2>
      <ActivityContentSection data={pageContext.data} />
      {/*       <AdditionalInfoSection data={mockData.additionalInfo} /> */}
      <ActivitySpecsSection data={pageContext.data} />
    </PaddedContainer>
  </Layout>
);

export default ActivityPageTemplate;
