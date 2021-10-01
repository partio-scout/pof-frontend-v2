import React from 'react';
import clsx from 'clsx';

interface PillProps {
  children: React.ReactNode;
  className?: string;
}

function Pill({ children, className }: PillProps) {
  return (
    <div className={clsx('flex rounded-xl p-1 bg-gray items-center text-xs font-bold mr-0.5 mb-0.5', className)}>
      {children}
    </div>
  );
}

export default Pill;
