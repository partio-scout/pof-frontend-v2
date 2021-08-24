import React from 'react';
import ActivityCard from '../activityCard';

const getWidth = (widthString: string) => {
  switch (widthString) {
    case '1/2':
      return 'md:w-1/2';
      break;
    case '1/1':
      return 'md:w-full';
      break;
    case '1/3':
      return 'md:w-1/3';
      break;
    case '1/3':
      return 'md:w-2/3';
      break;
    default:
      return 'w-full';
      break;
  }
};

export const ContentBlock = ({ block }) => (
  <div className={`${getWidth(block.block_width?.name)} flex-none inline-block mt-4 px-20 w-full`}>
    {block.title && <h2>{block.title.toUpperCase()}</h2>}
    {block.text && <div className="text-blue" dangerouslySetInnerHTML={{ __html: block.text }} />}
    {block.image && <img className="w-full" src={block.image.url} />}
  </div>
);

export const LinkBlock = ({ block }) => (
  <a
    href={block.url}
    className={`${getWidth(
      block.block_width?.name,
    )}inline-block mt-4 px-20 md:w-full bg-gray-light font-tondu text-blue w-full py-4 justify-center text-center rounded-xl`}
  >
    {block.text}
  </a>
);

export const HighLightBlock = ({ block }) => (
  <div
    className="inline-block mt-10 text-center justify-center p-2 bg-cover"
    style={{ backgroundImage: `url(${block.background.url})` }}
  >
    <div className="md:max-w-1/2 mx-auto bg-white bg-opacity-50 rounded-xl">
      {block.title && <h2>{block.title.toUpperCase()}</h2>}
      {block.text && <div className="text-blue" dangerouslySetInnerHTML={{ __html: block.text }} />}
      {block.image && <img className="w-full" src={block.image.url} />}
    </div>
  </div>
);

export const ActivityBlock = ({ block }) => (
  <div className="mt-4 flex flex-wrap space-x-2">
    {block.activities.map((activity) => (
      <ActivityCard activity={activity} />
    ))}
  </div>
);
