import React from 'react';
import CombinedLink from '../combinedLink';

interface BlueLinkProps {
  to: string;
  children: React.ReactNode;
}

function BlueLink({ to, children }: BlueLinkProps) {
  return (
    <CombinedLink
      to={to}
      className="inline-block px-14 py-4 rounded bg-hardBlue text-white uppercase font-tondu font-bold text-xl tracking-widest"
    >
      {children}
    </CombinedLink>
  );
}

export default BlueLink;
