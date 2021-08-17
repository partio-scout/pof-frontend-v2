import React from 'react';
import { Link } from 'gatsby';

type BreadCrumbsProps = {
  trail: Array<BreadCrumb>;
};

export interface BreadCrumb {
  name: string;
  url: string;
}

const BreadCrumbs = ({ trail }: BreadCrumbsProps) => (
  <div className="w-full bg-lightBlue-light pl-4 py-1 ">
    {trail.map((breadCrumb, index: number) => (
      <Link to={breadCrumb.url} key={breadCrumb.name + index}>
        <span className="text-blue text-xs">{`${breadCrumb.name} ${index < trail.length - 1 ? ' / ' : ''}`}</span>
      </Link>
    ))}
  </div>
);

export default BreadCrumbs;
