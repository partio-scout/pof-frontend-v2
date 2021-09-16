import React from 'react';
import { Link } from 'gatsby';

interface CardProps {
  children: React.ReactNode;
  link?: string | null;
  borderColor?: string;
}

function InnerCard({ children, borderColor }: Pick<CardProps, 'children' | 'borderColor'>) {
  return (
    <div
      className="flex flex-col bg-gray-light border-4 rounded-xl p-2 h-full"
      style={{ borderColor }}
    >
      {children}
    </div>
  );
}

function Card({ children, link, borderColor }: CardProps) {
  return (
    <div className="h-full min-h-20rem transform transition-transform hover:-translate-y-0.5 focus-within:-translate-y-0.5 duration-75">
      {link ? (
        <Link to={link} className="h-full w-full">
          <InnerCard borderColor={borderColor}>{children}</InnerCard>
        </Link>
      ) : (
        <InnerCard borderColor={borderColor}>{children}</InnerCard>
      )}
    </div>
  );
}

export default Card;
