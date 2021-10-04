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
        <div style={{ background: `url(${mainImageUrl}) center/cover no-repeat` }} className="w-full h-full" />
      </div>
    )}
    <div
      className={clsx('w-full mt-3', {
        'absolute bottom-0 transform translate-y-1/2 mt-0': mainImageUrl,
      })}
    >
      <Container className="flex">
        {logoUrl && (
          <div
            className="flex w-44 h-44 rounded-4xl align-top p-3 mr-4"
            style={{ backgroundColor: hexToRgba(color || '', 0.6) }}
          >
            <div className="bg-white rounded-3xl flex flex-col align-center justify-center items-center w-full">
              <img className="w-24" src={logoUrl} alt={mainTitle} title={mainTitle}></img>
            </div>
          </div>
        )}
        <div className="align-top flex flex-col justify-center">
          <div className="h-16 flex items-center">
            <h1
              className={clsx('tracking-wider leading-8 break-words uppercase', {
                'text-2rem': smallMainTitle,
                'text-white': mainImageUrl,
              })}
            >
              {mainTitle}
            </h1>
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
