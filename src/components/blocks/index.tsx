import React from 'react';
import ActivityCard from '../activityCard';
import { StrapiActivity } from '../../../graphql-types';
import { parseLinkUrl, prependApiUrl } from '../../utils/helpers';
import RichText from '../RichText';
import CombinedLink from '../combinedLink';
import ActivityCardList from '../activityCardList';

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
  background?: any;
  link_text?: string;
  link_url?: string;
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
    {block.text && <RichText className="text-blue" html={block.text} />}
    {block.image && <img className="w-full" src={prependApiUrl(block.image?.url)} />}
  </div>
);

export const LinkBlock = ({ block }: BlockProps<LinkBlockType>) => (
  <a
    href={parseLinkUrl(block.url)}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block md:w-full bg-gray-light font-tondu text-blue w-full py-4 justify-center text-center rounded-xl"
  >
    {block.text}
  </a>
);

export const HighLightBlock = ({ block }: BlockProps<HighlightBlockType>) => (
  <div
    className="text-center justify-center py-20 md:py-40 bg-cover bg-center -mx-2 sm:-mx-10 md:-mx-24 xl:px-0"
    style={
      block.background && {
        backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${prependApiUrl(
          block.background.url,
        )})`,
      }
    }
  >
    <div className="flex flex-col items-center justify-center">
      {block.title && <h2 className="mb-4">{block.title.toUpperCase()}</h2>}
      {block.text && <p className="text-blue mb-4">{block.text}</p>}
      {block.link_text && block.link_url && (
        <CombinedLink
          to={block.link_url}
          className="px-14 py-4 rounded bg-hardBlue text-white uppercase font-tondu font-bold text-xl tracking-widest"
        >
          {block.link_text}
        </CombinedLink>
      )}
    </div>
  </div>
);

export const ActivityBlock = ({ block }: BlockProps<ActivityBlockType>) =>
  block.activities ? <ActivityCardList activities={block.activities} augmentData showActivityAndAgeGroup  /> : null;
