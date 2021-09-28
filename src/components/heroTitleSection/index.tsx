import React from 'react';
import mockHero from '../../images/mockHero.png';
import { hexToRgba } from '../../utils/color';
import Container from '../container';

type HeroTitleSectionProps = {
  mainImageUrl: string;
  logoUrl: string;
  smallMainTitle?: boolean;
  mainTitle?: string;
  subTitle?: string;
  color?: string | null;
};

const HeroTitleSection = ({
  mainImageUrl,
  logoUrl,
  mainTitle,
  subTitle,
  smallMainTitle,
  color,
}: HeroTitleSectionProps) => (
  <div className="relative h-80 mb-24">
    <div className="bg-gradient-to-t from-blue w-full h-full absolute opacity-75"></div>
    <div style={{ background: `url(${mainImageUrl}) center/cover no-repeat` }} className="w-full h-full" />
    <div className="absolute bottom-0 transform translate-y-1/2 w-full">
      <Container className="flex">
        <div
          className="flex w-44 h-44 rounded-4xl align-top p-3"
          style={{ backgroundColor: hexToRgba(color || '', 0.6) }}
        >
          <div className="bg-white rounded-3xl flex flex-col align-center justify-center items-center w-full">
            <img className="w-24" src={logoUrl}></img>
          </div>
        </div>
        <div className="ml-4 align-top flex flex-col justify-center">
          <div className="h-16 flex items-center">
            <h1 className={`text-white tracking-wider ${smallMainTitle && 'text-2rem'}`}>{mainTitle?.toUpperCase()}</h1>
          </div>
          <div className="h-16 flex items-center">
            <span className="text-blue text-2xl inline-block">{subTitle}</span>
          </div>
        </div>
      </Container>
    </div>
  </div>
);

export default HeroTitleSection;
