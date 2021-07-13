import React from 'react';

type BreadCrumbsProps = {
  trail: Array<BreadCrumb>;
};

interface BreadCrumb {
  name: string;
  url: string;
}

const BreadCrumbs = ({ trail }: BreadCrumbsProps) => (
  <div className="w-full bg-lightBlue-light pl-4 py-1 ">
    {trail.map((breadCrumb, index: number) => (
      <a href={breadCrumb.url} key={breadCrumb.name + index}>
        <span className="text-blue text-xs">{`${breadCrumb.name} ${index < trail.length - 1 ? ' / ' : ''}`}</span>
      </a>
    ))}
  </div>
);

export default BreadCrumbs;
