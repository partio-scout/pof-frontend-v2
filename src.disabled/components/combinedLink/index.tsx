import { Link } from 'gatsby';
import { parseLinkUrl } from '../../utils/helpers';
import React from 'react';

/**
 * Link component that renders a Gatsby `<Link />` if the `to`-parameter is a local (relative) address, and a normal `<a />`-tag if it's not.
 */
const CombinedLink = ({ to, className, children }: { to: string; className?: string; children: React.ReactNode }) => {
  if (to.startsWith('/')) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={parseLinkUrl(to)} className={className} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default CombinedLink;
