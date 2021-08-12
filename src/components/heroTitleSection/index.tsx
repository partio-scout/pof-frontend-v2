import React from 'react';
import sp from '../../images/sudenpennut.svg';

type HeroTitleSectionProps = {
  imageName: string;
  smallMainTitle?: boolean;
  mainTitle?: string;
  subTitle?: string;
};

const HeroTitleSection = ({ imageName, mainTitle, subTitle, smallMainTitle }: HeroTitleSectionProps) => (
  <>
    <div className="w-44 h-44 rounded-3xl bg-white opaque-border-yellow mt-4 align-top inline-flex align-center justify-center">
      <img className="w-4.5rem" src={sp}></img>
    </div>
    <div className="inline-block ml-4 align-top mt-2 mb-5">
      <h1 className={`text-white tracking-wider ${smallMainTitle && 'text-2rem mt-6 mb-3'}`}>
        {mainTitle?.toUpperCase()}
      </h1>
      <span className="text-blue text-2xl inline-block">{subTitle}</span>
    </div>
  </>
);

export default HeroTitleSection;