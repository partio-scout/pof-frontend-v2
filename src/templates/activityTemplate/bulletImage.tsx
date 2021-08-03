import React from 'react';
import target from '../../images/target.svg';
import plan from '../../images/plan.svg';

interface BulletImageProps {
  type: string;
}

const BulletImage = ({ type }: BulletImageProps) => (
  <div className="rounded-xl bg-ageYellow w-16 h-20 flex align-center justify-center bg-opacity-20">
    <img className="w-10" src={type === 'target' ? target : plan}></img>
  </div>
);

export default BulletImage;
