import React from 'react';

interface SquareIconProps {
  icon: any;
  alt?: string;
  backgroundColor?: string;
}

function SquareIcon({ icon, alt, backgroundColor }: SquareIconProps) {
  const Icon = icon;

  return (
    <Icon
      alt={alt}
      className="rounded-xl w-14 h-14 flex fill-current flex-shrink-0 items-center justify-center p-2"
      style={{ backgroundColor }}
    />
  );
}

export default SquareIcon;
