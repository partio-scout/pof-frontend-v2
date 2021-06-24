import React from 'react';
import CurrentNewsCard from './currentNewsCard';

const CurrentNewsHighlights = ({ currentNews }) => (
  <div className="flex flex-row space-x-4 md:w-full my-8">
    {currentNews.map((item) => (
      <CurrentNewsCard title={item.title} ingress={item.ingress} date={item.date} buttonText={item.buttonText} />
    ))}
  </div>
);

export default CurrentNewsHighlights;
