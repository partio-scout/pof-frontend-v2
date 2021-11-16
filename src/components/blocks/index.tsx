import React from 'react';
import { StrapiActivity, StrapiImage } from '../../../graphql-types';
import { prependApiUrl } from '../../utils/helpers';
import RichText from '../RichText';
import ActivityCardList from '../activityCardList';
import BlueLink from '../BlueLink';

export interface TextBlockType extends BlockType {
  title?: string;
  text?: string;
}

export interface ImageBlockType extends BlockType {
  image?: StrapiImage;
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
    case '1/1':
      return 'w-full';
    case '1/3':
      return 'md:w-1/3';
    case '2/3':
      return 'md:w-2/3';
    default:
      return 'w-full';
  }
};

export interface BlockProps<BLOCK_TYPE> {
  block: BLOCK_TYPE;
}

export const TextBlock = ({ block }: BlockProps<TextBlockType>) => (
  <div className="flex-none inline-block w-full">
    {block.title && <h2 className="sm:text-4xl md:text-xxlw">{block.title.toUpperCase()}</h2>}
    {block.text && <RichText className="text-blue" html={block.text} />}
  </div>
);

export const ImageBlock = ({ block }: BlockProps<ImageBlockType>) => (
  <div className="flex-none inline-block w-full">
    {block.image && (
      <img
        className="w-full"
        src={prependApiUrl(block.image?.url)}
        alt={block.image.alternativeText || ''}
        title={block.image.caption || ''}
      />
    )}
  </div>
);

export const LinkBlock = ({ block }: BlockProps<LinkBlockType>) => (
  <BlueLink to={block.url || ''}>{block.text}</BlueLink>
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
      {block.title && <h2 className="mb-4 sm:text-4xl md:text-xxlw">{block.title.toUpperCase()}</h2>}
      {block.text && <p className="text-blue mb-4 md:text-base">{block.text}</p>}
      {block.link_text && block.link_url && <BlueLink to={block.link_url}>{block.link_text}</BlueLink>}
    </div>
  </div>
);

export const ActivityBlock = ({ block }: BlockProps<ActivityBlockType>) =>
  block.activities ? <ActivityCardList activities={block.activities} augmentData showActivityAndAgeGroup /> : null;
