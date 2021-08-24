import React from 'react';
import { HighLightBlock, LinkBlock, ActivityBlock, ContentBlock } from '../components/blocks';

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
      return <ContentBlock block={block} />;
  }
};

export default renderBlock;
