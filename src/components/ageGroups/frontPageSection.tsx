import React from 'react';

//Mock-data currently, for dev purposes
const ageGroups = [
  { name: 'Sudenpennut', icon: '../../images/sudenpennutLogo.svg' },
  { name: 'Sudenpennut', icon: '../../images/sudenpennutLogo.svg' },
  { name: 'Sudenpennut', icon: '../../images/sudenpennutLogo.svg' },
  { name: 'Sudenpennut', icon: '../../images/sudenpennutLogo.svg' },
  { name: 'Sudenpennut', icon: '../../images/sudenpennutLogo.svg' },
  { name: 'Sudenpennut', icon: '../../images/sudenpennutLogo.svg' },
];

const FrontPageSection = () => (
  <div>
    <div className="mt-4">
      <h2 className="text-blue inline-block lg:w-2/5 md:w-full">
        LOREM IPSUM <br />
        DOLOR SIT AMET <br />
        PARTIO-OHJELMA
      </h2>
      <div className="inline-block lg:w-3/5 md:w-full align-top pt-3">
        <p className="text-blue">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id erat vitae ante tempor volutpat eu eu velit.
          Nullam libero nisi, efficitur vel finibus in, accumsan a est. Morbi ut magna hendrerit, interdum orci porta,
          placerat sapien. <br />
          <br />
          Nulla fringilla eros vel ex eleifend accumsan. Phasellus porta massa eu neque viverra varius. Fusce id sapien
          tortor. Vestibulum at aliquam nunc. Sed bibendum eleifend maximus.
        </p>
      </div>
      <div className="flex flex-row justify-between">
        {ageGroups.map((ageGroup, index: number) => (
          <div key={ageGroup.name + index.toString()} className="rounded-lg bg-gray-light w-36 h-36 mt-4"></div>
        ))}
      </div>
    </div>
  </div>
);

export default FrontPageSection;
