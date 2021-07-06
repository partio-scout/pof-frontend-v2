import React from 'react';
import HeroTitleSection from '../components/heroTitleSection';
import { PaddedContainer } from '../components/ui.general';
import mockHero from '../images/mockHero.png';
import Layout from '../layouts/default';
/* 
type AgeGroupTemplateProps = {
  ageGroupName: string;
  ingress: string;
  body: string;
}; */

const mockLinks = [{ name: 'Kirjan nettiversio' }, { name: 'Akelan opas' }, { name: 'Mallitoimintasuunnitelma' }];

const mockHighlihts = [
  {
    title: 'LOREM IPSUM DOLOR SIT AMET VIDEO',
    bread:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id erat vitae ante tempor volutpat eu eu velit. Nullam libero nisi, efficitur vel finibus in, accumsan a est. Morbi ut magna hendrerit, interdum orci porta, placerat sapien. Nulla fringilla eros vel ex eleifend accumsan. Phasellus porta massa eu neque viverra varius. Fusce id sapien tortor. Vestibulum at aliquam nunc. Sed bibendum eleifend maximus.',
    url: 'https://www.youtube.com/embed/LXb3EKWsInQ',
  },
];

const AgeGroupTemplate = () => (
  <Layout showBreadCrumbs={true}>
    <div className="relative overflow-hidden h-86 mb-8">
      <div className="bg-gradient-to-t from-blue w-full h-full absolute opacity-75"></div>
      <img src={mockHero} className="w-full max-h-6/8 "></img>
      {/*    <div className="bg-white w-full h-16"></div> */}
    </div>
    <PaddedContainer>
      <div className="relative -mt-40 pt-2">
        <HeroTitleSection imageName="sudenpennut.svg" mainTitle="Sudenpennut" subTitle="7-9 vuotiaat" />
      </div>
      <div className="flex flex-row  mt-8">
        <div className="md:w-3/5">
          <p className="text-blue text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id erat vitae ante tempor volutpat eu eu
            velit. Nullam libero nisi, efficitur vel finibus in, accumsan a est. Morbi ut magna hendrerit, interdum orci
            porta, placerat sapien.
          </p>
          <p className="text-blue mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id erat vitae ante tempor volutpat eu eu
            velit. Nullam libero nisi, efficitur vel finibus in, accumsan a est. Morbi ut magna hendrerit, interdum orci
            porta, placerat sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id erat vitae ante
            tempor volutpat eu eu velit. Nullam libero nisi, efficitur vel finibus in, accumsan a est. Morbi ut magna
            hendrerit, interdum orci porta, placerat sapien. Nulla fringilla eros vel ex eleifend accumsan. Phasellus
            porta massa eu neque viverra varius. Fusce id sapien tortor. Vestibulum at aliquam nunc. Sed bibendum
            eleifend maximus.
          </p>
        </div>
        <div className="w-full md:w-1/4 md:ml-4 lg:ml-auto">
          {mockLinks.map((link, key: number) => (
            <div className="bg-gray-light py-3 w-23.5rem pl-3 mb-4 rounded-xl" key={link.name + key}>
              <div className="bg-ageYellow w-16 h-16 rounded-xl inline-block mr-4 align-middle opacity-40"></div>
              <span className="font-tondu text-blue hyphen-auto align-middle break-word">
                {link.name.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div>
        {mockHighlihts.map((highlight, key: number) => (
          <div className="flex flex-row" key={highlight.title + key}>
            <div className="w-full md:w-1/2">
              <div className="media-container">
                <iframe className="" src={highlight.url} title="video" />
              </div>
            </div>

            <div className="w-full md:w-1/2 inline-block md:ml-4">
              <h2 className="text-blue tracking-wider">{highlight.title}</h2>
              <p className="text-blue">{highlight.bread}</p>
            </div>
          </div>
        ))}
      </div>
    </PaddedContainer>
  </Layout>
);

export default AgeGroupTemplate;
