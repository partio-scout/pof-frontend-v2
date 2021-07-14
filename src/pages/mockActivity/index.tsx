import React from 'react';
import Layout from '../../layouts/default';
import mockHero from '../../images/mockHero.png';
import HeroTitleSection from '../../components/heroTitleSection';
import { PaddedContainer } from '../../components/ui.general';
import ActivityContentSection from './activityContentSection';
import AdditionalInfoSection from './additionalInfoSection';
import ActivitySpecsSection from './activitySpecsSection';
import { mockData } from './mockData.js';

/* const mockData = {
  activityInfo: [
    {
      title: 'Tavoite',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id erat vitae ante tempor volutpat eu eu velit. Nullam libero nisi, efficitur vel finibus in, accumsan a est.',
      type: 'goal',
    },
    {
      title: 'Kuvaus',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id erat vitae ante tempor volutpat eu eu velit. Nullam libero nisi, efficitur vel finibus in, accumsan a est.',
      type: 'description',
    },
  ],
  additionalInfo: {
    header: 'Lisätiedot LOREM IPSUM DOLOR SIT AMET CONTENT',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id erat vitae ante tempor volutpat eu eu velit. Nullam libero nisi, efficitur vel finibus in, accumsan a est. Morbi ut magna hendrerit, interdum orci porta, placerat sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id erat vitae ante tempor volutpat eu eu velit. Nullam libero nisi, efficitur vel finibus in, accumsan a est. Morbi ut magna hendrerit, interdum orci porta, placerat sapien.',
    subHeader: 'Sub header morbi ut magna ',
  },
}; */

const ActivityPageTemplate = () => (
  <Layout>
    <div className="relative overflow-hidden h-86 mb-8">
      <div className="bg-gradient-to-t from-blue w-full h-full absolute opacity-75"></div>
      <img src={mockHero} className="w-full max-h-6/8 "></img>
      {console.log('MOCKDATA: ', mockData)}
    </div>
    <PaddedContainer>
      <div className="relative -mt-40 pt-2">
        <HeroTitleSection
          imageName="sudenpennut.svg"
          mainTitle={mockData.data.activity_group.title}
          subTitle={mockData.data.activity_group.title}
          smallMainTitle
        />
      </div>
      <h2 className="text-blue mt-2">{mockData.data.title}</h2>
      <ActivityContentSection data={mockData.data} />
      {/*       <AdditionalInfoSection data={mockData.additionalInfo} /> */}
      <ActivitySpecsSection data={mockData.data} />
    </PaddedContainer>
  </Layout>
);
export default ActivityPageTemplate;
