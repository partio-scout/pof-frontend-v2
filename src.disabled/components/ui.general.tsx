import React from 'react';

interface PaddedContainerProps {
  children: React.ReactNode;
}

export const PaddedContainer = ({ children }: PaddedContainerProps) => (
  <div className="md:px-24 2xl:px-0 max-w-7xl mx-auto">{children}</div>
);
