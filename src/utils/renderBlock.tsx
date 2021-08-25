import React from 'react';
import { HighLightBlock, LinkBlock, ActivityBlock, GeneralBlock } from '../components/blocks';
import { ContentPage } from './';

const renderBlock = (block: ContentBlock) => {
  switch (block.strapi_component) {
    case 'blocks.hero-block':
      return <HighLightBlock block={block} />;
      break;
    case 'blocks.link-block':
      return <LinkBlock block={block} />;
      break;
    case 'blocks.activity-block':
      return <ActivityBlock block={block} />;
      break;
    default:
      return <GeneralBlock block={block} />;
  }
};

export default renderBlock;
