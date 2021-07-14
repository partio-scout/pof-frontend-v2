import React from 'react';
import target from '../../images/target.svg';
import plan from '../../images/plan.svg';

const BulletImage = ({ type }) => (
  <div className="rounded-xl bg-ageYellow w-14 h-14 flex align-center justify-center bg-opacity-20">
    <img className="w-8" src={type === 'goal' ? target : plan}></img>
  </div>
);

export default BulletImage;
