import React from 'react';
import ActivityCard from '../activityCard';
import { StrapiActivity } from '../../../graphql-types';
import { prependApiUrl } from '../../utils/helpers';

export interface GeneralBlockType extends BlockType {
  title?: string;
  text?: string;
  image?: any;
}

export interface BlockType {
  block_width: {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  };
  strapi_component: string;
}

export interface LinkBlockType extends BlockType {
  url?: string;
  text?: string;
}

export interface HighlightBlockType extends BlockType {
  title?: string;
  url?: string;
  text?: string;
  image?: any;
  background?: any;
}

export interface ActivityBlockType extends BlockType {
  activities?: Array<StrapiActivity>;
}

export const getBlockWidth = (widthString: string | undefined) => {
  switch (widthString) {
    case '1/2':
      return 'md:w-1/2';
      break;
    case '1/1':
      return 'w-full';
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

export interface BlockProps<BLOCK_TYPE> {
  block: BLOCK_TYPE;
}

export const GeneralBlock = ({ block }: BlockProps<GeneralBlockType>) => (
  <div className="flex-none inline-block w-full">
    {block.title && <h2>{block.title.toUpperCase()}</h2>}
    {block.text && <div className="text-blue" dangerouslySetInnerHTML={{ __html: block.text }} />}
    {block.image && <img className="w-full" src={prependApiUrl(block.image?.url)} />}
  </div>
);

export const LinkBlock = ({ block }: BlockProps<LinkBlockType>) => (
  <a
    href={block.url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block md:w-full bg-gray-light font-tondu text-blue w-full py-4 justify-center text-center rounded-xl"
  >
    {block.text}
  </a>
);

export const HighLightBlock = ({ block }: BlockProps<HighlightBlockType>) => (
  <div
    className="inline-block text-center justify-center p-2 bg-cover"
    style={{ backgroundImage: `url(${block.background.url})` }}
  >
    <div className="md:max-w-1/2 mx-auto bg-white bg-opacity-50 rounded-xl">
      {block.title && <h2>{block.title.toUpperCase()}</h2>}
      {block.text && <div className="text-blue" dangerouslySetInnerHTML={{ __html: block.text }} />}
      {block.image && <img className="w-full" src={prependApiUrl(block.image?.url)} />}
    </div>
  </div>
);

export const ActivityBlock = ({ block }: BlockProps<ActivityBlockType>) => (
  <div className="flex flex-wrap space-x-2">
    {block.activities && block.activities.map((activity) => <ActivityCard activity={activity} />)}
  </div>
);
