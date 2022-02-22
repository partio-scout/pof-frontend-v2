import clsx from 'clsx';
import React from 'react';
import { hexToRgba } from '../../utils/color';
import Container from '../container';

type HeroTitleSectionProps = {
  mainImageUrl?: string;
  logoUrl?: string;
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
  <div className="relative">
    {mainImageUrl && (
      <div className="relative h-80 mb-24">
        <div className="bg-gradient-to-t from-blue w-full h-full absolute opacity-75"></div>
        <div style={{ background: `url(${mainImageUrl}) center/cover no-repeat` }} className="w-full h-full flex align-bottom justify-center">
          <Container className='flex relative'>
            {logoUrl && (
              <div
                className="flex ml-2 sm:ml-0 h-28 w-24 top-64 sm:h-44 sm:w-44 sm:top-56 rounded-4xl align-top p-1 mr-4 absolute bottom-0 left-0"
                style={{ backgroundColor: hexToRgba(color || '', 0.6) }}
              >
                <div className="bg-white rounded-3xl flex flex-col align-center justify-center items-center w-full">
                  <img className="w-12 sm:w-24" src={logoUrl} alt={mainTitle} title={mainTitle}></img>
                </div>
              </div>
            )}
            <h1
            className={clsx('absolute bottom-0 left-28 sm:left-48 tracking-wider leading-8 sm:break-words uppercase sm:text-xxxlt md:text-xxxlw', {
              'text-2xl': smallMainTitle,
              'text-white': mainImageUrl,
            })}
          >
            {mainTitle}
          </h1>
            <div className="absolute top-full left-28 sm:left-48 h-16 flex items-center">
              <span className="text-blue pt-4 text-2xl inline-block">{subTitle}</span>
            </div>
          </Container>
        </div>
      </div>
    )}
  </div>
);

export default HeroTitleSection;
