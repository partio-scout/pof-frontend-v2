import React from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
  link?: string | null;
  borderColor?: string;
  backGround?: boolean;
  rounded?: boolean;
  padded?: boolean;
}

function InnerCard({ children, borderColor, backGround = true, rounded = true, padded = true }: CardProps) {
  return (
    <div
      className={clsx('flex flex-col h-full overflow-hidden', {
        'bg-gray-light': backGround,
        'border-4': borderColor,
        'rounded-xl': rounded,
        'p-2': padded && borderColor,
        'p-3': padded && !borderColor,
      })}
      style={{ borderColor }}
    >
      {children}
    </div>
  );
}

function Card(props: CardProps) {
  return (
    <div
      className={clsx('h-full min-h-0 sm:min-h-20rem', {
        'transform transition-transform hover:-translate-y-0.5 focus-within:-translate-y-0.5 duration-75': props.link,
      })}
    >
      {props.link ? (
        <Link to={props.link} className="h-full w-full">
          <InnerCard {...props}></InnerCard>
        </Link>
      ) : (
        <InnerCard {...props}></InnerCard>
      )}
    </div>
  );
}

export default Card;
