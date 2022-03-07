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

const MobileHeroTitleContainer = ({
  mainImageUrl,
  logoUrl,
  mainTitle,
  subTitle,
  smallMainTitle,
  color,
}: HeroTitleSectionProps) => {
  return (
    <div className="relative block sm:hidden">
      {mainImageUrl && (
        <div className="flex relative h-80 mb-5">
          <div className="bg-gradient-to-t from-blue w-full h-full absolute opacity-75"></div>
          <div style={{ background: `url(${mainImageUrl}) center/cover no-repeat` }} className="w-full h-full">
            {logoUrl && (
              <div
                className="flex z-10 w-44 h-44 rounded-4xl p-1 m-auto"
                style={{ backgroundColor: hexToRgba(color || '', 0.6) }}
              >
                <div className="bg-white rounded-3xl flex flex-col align-center justify-center items-center w-full f-full">
                  <img className="w-24" src={logoUrl} alt={mainTitle} title={mainTitle}></img>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
        <Container className="flex flex-col sm:flex-row items-center">
          <div className="align-top flex flex-col justify-center">
            <div className="h-16 flex items-end">
              <h1
                className={clsx('tracking-wider leading-8 break-words uppercase sm:text-xxxlt md:text-xxxlw', {
                  'text-2rem': smallMainTitle,
                  'sm:text-white': mainImageUrl,
                })}
              >
                {mainTitle}jeeee
              </h1>
            </div>
            <div className="h-16 flex items-center">
              <span className="text-blue text-2xl inline-block">{subTitle}</span>
            </div>
          </div>
        </Container>
    </div>
  )
}

export default MobileHeroTitleContainer;