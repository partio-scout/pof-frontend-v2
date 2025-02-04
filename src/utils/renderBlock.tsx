import React from 'react';
import { HighLightBlock, BlockType, TextBlock, ActivityBlock, LinkBlock, ImageBlock } from '../components/blocks';
import AgeGroupBlock from '../components/blocks/ageGroupBlock';
import ContentPageBlock from '../components/blocks/contentPageBlock';
import VideoBlock from '../components/blocks/videoBlock';
import { SitePageLocaleFragment } from '../components/blockArea';

const renderBlock = (block: BlockType, links?: SitePageLocaleFragment[]) => {
  switch (block.strapi_component) {
    case 'blocks.text-block':
      return <TextBlock block={block} />;
    case 'blocks.image-block':
      return <ImageBlock block={block} />;
    case 'blocks.hero-block':
      return <HighLightBlock block={block} />;
    case 'blocks.link-block':
      return <LinkBlock block={block} />;
    case 'blocks.activity-block':
      return <ActivityBlock block={block} links={links} />;
    case 'blocks.content-page-block':
      return <ContentPageBlock block={block} />;
    case 'blocks.age-group-block':
      return <AgeGroupBlock block={block} />;
    case 'blocks.video-block':
      return <VideoBlock block={block} />;
    default:
      console.warn('Unkown block type:', block.strapi_component);
      return null;
  }
};

export default renderBlock;
