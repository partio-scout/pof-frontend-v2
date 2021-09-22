import React from 'react';
import sp from '../../images/sudenpennut.svg';
import { hexToRgba } from '../../utils/color';

type HeroTitleSectionProps = {
  imageName: string;
  smallMainTitle?: boolean;
  mainTitle?: string;
  subTitle?: string;
  color?: string | null;
};

const HeroTitleSection = ({ imageName, mainTitle, subTitle, smallMainTitle, color }: HeroTitleSectionProps) => (
  <>
    <div className="flex w-44 h-44 rounded-3xl mt-4 align-top p-3" style={{ backgroundColor: hexToRgba(color || '', .6)}}>
      <div className="bg-white rounded-3xl flex flex-col align-center justify-center">
        <img className="" src={imageName}></img>
      </div>
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
