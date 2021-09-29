import React from 'react';
import Button from '../button';

const Hero = ({ data }) => (
  <div>
    <div className="mt-12">
      <h1 className="text-blue tracking-wider break-words font-">{data?.title}</h1>
      <Button text="LOREM IPSUM DOLOR" />
    </div>
  </div>
);

export default Hero;
