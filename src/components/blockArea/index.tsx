import clsx from 'clsx';
import React from 'react';
import renderBlock from '../../utils/renderBlock';
import { BlockType, getBlockWidth } from '../blocks';
import { SitePageContext } from '../../../graphql-types';

export interface SitePageLocaleFragment {
  context: SitePageContext;
  path: string;
}

interface BlockAreaProps {
  blocks?: BlockType[];
  links?: SitePageLocaleFragment[];
}

function BlockArea({ blocks, links }: BlockAreaProps) {
  return blocks ? (
    <div className="flex flex-wrap justify-between -mx-4">
      {blocks.map((block: BlockType, i: number) => (
        <div className={clsx('px-4 my-5', getBlockWidth(block.block_width?.name))} key={`block_${i}`}>
          {renderBlock(block, links)}
        </div>
      ))}
    </div>
  ) : null;
}

export default BlockArea;
