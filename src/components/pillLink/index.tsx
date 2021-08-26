import React from 'react';
import CombinedLink from '../combinedLink';

interface PillLinkProps {
  to: string;
  children: React.ReactNode;
}

function PillLink({ to, children }: PillLinkProps) {
  return (
    <CombinedLink
      to={to}
      className="block bg-gray-light rounded-2xl p-3 md:p-5 font-tondu text-2xl uppercase tracking-wider"
    >
      {children}
    </CombinedLink>
  );
}

export default PillLink;
