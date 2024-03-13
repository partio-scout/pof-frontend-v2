import React from 'react';
import { Link } from 'gatsby';

type BreadCrumbsProps = {
  trail: Array<BreadCrumb>;
};

export interface BreadCrumb {
  name: string;
  url: string;
}

interface ConditionWrapper {
  condition: boolean;
  wrapper: Function;
  children: any;
}

const ConditionWrapper = ({ condition, wrapper, children }: ConditionWrapper) =>
  condition ? wrapper(children) : children;

const BreadCrumbs = ({ trail }: BreadCrumbsProps) => (
  <div className="w-full bg-lightBlue-light pl-4 py-1 ">
    {trail.map((breadCrumb, index: number) => (
      <ConditionWrapper
        key={breadCrumb.name + index}
        condition={index !== 0}
        wrapper={(children: any) => (
          <Link to={breadCrumb.url} key={breadCrumb.name + index}>
            {children}
          </Link>
        )}
      >
        <span key={breadCrumb.name + index} className="text-blue text-xs">{`${breadCrumb.name} ${
          index < trail.length - 1 ? ' / ' : ''
        }`}</span>
      </ConditionWrapper>
    ))}
  </div>
);

export default BreadCrumbs;
