import React from 'react';
import { prependApiUrl } from '../../utils/helpers';
import Button from '../button';
import CombinedLink from '../combinedLink';
import Container from '../container';

interface HeroProps {
  title?: string | null;
  linkText?: string | null;
  linkUrl?: string | null;
  imageUrl?: string | null;
}

const Hero = ({ title, linkText, linkUrl, imageUrl }: HeroProps) => (
  <div className="relative py-20 min-h-25rem">
    <div
      className="absolute right-0 top-0 h-full w-full -z-10 bg-no-repeat bg-right"
      style={{ backgroundImage: `url(${prependApiUrl(imageUrl)})` }}
    />
    <Container>
      <h1 className="text-blue tracking-wider font-tondu break-words uppercase mb-5">{title}</h1>
      {linkText && linkUrl && (
        <CombinedLink
          to={linkUrl}
          className="bg-hardBlue uppercase text-xl rounded px-6 py-3 font-tondu text-white tracking-wider"
        >
          {linkText}
        </CombinedLink>
      )}
    </Container>
  </div>
);

export default Hero;
