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
        <div className="flex relative h-80 mb-5 justify-center items-center">
          <div className="bg-gradient-to-t from-blue w-full h-full absolute opacity-75"></div>
          <div style={{ background: `url(${mainImageUrl}) center/cover no-repeat` }} className="w-full h-full"></div>
          {logoUrl && (
            <div
              className="flex absolute w-44 h-44 rounded-4xl p-1 m-auto"
              style={{ backgroundColor: hexToRgba(color || '', 0.6) }}
            >
              <div className="bg-white rounded-3xl flex flex-col align-center justify-center items-center w-full f-full">
                <img className="w-24" src={logoUrl} alt={mainTitle} title={mainTitle}></img>
              </div>
            </div>
          )}
        </div>
      )}
      <Container className="flex flex-col px-10 items-start">
        <div className="align-top flex flex-col justify-center">
          <div className="min-h-12 min-w-0 flex items-center">
            <h2
              className={clsx('tracking-wider leading-8 break-words uppercase', {
                'text-2rem': smallMainTitle,
              })}
            >
              {mainTitle}
            </h2>
          </div>
          <div className="min-h-12 flex items-center">
            <span className="text-blue text-2xl inline-block">{subTitle}</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MobileHeroTitleContainer;
