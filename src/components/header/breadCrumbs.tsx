import React from 'react';

type BreadCrumbsProps = {
  trail: string; //TODO: Change to real one, propably not a string
};

const BreadCrumbs = ({ trail }: BreadCrumbsProps) => (
  <div className="w-full bg-lightBlue-light pl-4 py-1 ">
    <span className="text-blue text-xs">{trail}</span>
  </div>
);

export default BreadCrumbs;
