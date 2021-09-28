import React from 'react';
import target from '../../images/target.svg';
import plan from '../../images/plan.svg';

interface BulletImageProps {
  type: string;
  backgroundColor?: string;
}

const BulletImage = ({ type, backgroundColor }: BulletImageProps) => (
  <div className="rounded-xl w-16 h-20 flex align-center justify-center" style={{ backgroundColor }}>
    <img className="w-10" src={type === 'target' ? target : plan}></img>
  </div>
);

export default BulletImage;
