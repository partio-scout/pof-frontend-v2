import clsx from 'clsx';
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  omitPadding?: boolean;
  className?: string;
}

/**
 * Container that keeps it's children at the right width
 * @returns
 */
const Container = ({ children, omitPadding, className }: ContainerProps) => {
  return (
    <div
      className={clsx(
        'container mx-auto max-w-7xl overflow-hidden',
        {
          'px-2 sm:px-10 md:px-24 2xl:px-0': !omitPadding,
        },
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
