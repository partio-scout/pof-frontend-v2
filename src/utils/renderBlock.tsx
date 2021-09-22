import React from 'react';
import { HighLightBlock, BlockType, GeneralBlock, ActivityBlock, LinkBlock } from '../components/blocks';
import AgeGroupBlock from '../components/blocks/ageGroupBlock';
import ContentPageBlock from '../components/blocks/contentPageBlock';

const renderBlock = (block: BlockType) => {
  switch (block.strapi_component) {
    case 'blocks.hero-block':
      return <HighLightBlock block={block} />;
    case 'blocks.link-block':
      return <LinkBlock block={block} />;
    case 'blocks.activity-block':
      return <ActivityBlock block={block} />;
    case 'blocks.content-page-block':
      return <ContentPageBlock block={block} />;
    case 'blocks.age-group-block':
      return <AgeGroupBlock block={block} />;
    default:
      return <GeneralBlock block={block} />;
  }
};

export default renderBlock;
