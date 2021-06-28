import React from 'react';
import Button from '../button';

const Hero = () => (
  <div>
    <div className="mt-12">
      <h1 className="text-blue tracking-wider">
        LOREM IPSUM <br /> DOLOR SIS ET <br /> AJANKOHTAISTA
      </h1>
      <Button text="LOREM IPSUM DOLOR" onClick={() => console.log('test this shit')} />
    </div>
  </div>
);

export default Hero;
