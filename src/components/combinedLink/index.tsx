import { Link } from 'gatsby';
import React from 'react';

const CombinedLink = ({ to, className, children }: { to: string, className?: string, children: React.ReactNode }) => {
  if (to.startsWith('/')) {
    return <a href={to} className={className}>{children}</a>;
  }
  return <Link to={to} className={className}>{children}</Link>;
};

export default CombinedLink;