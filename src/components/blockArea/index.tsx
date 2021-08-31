import clsx from 'clsx';
import React from 'react';
import renderBlock from '../../utils/renderBlock';
import { ContentBlock, getBlockWidth } from '../blocks';

interface BlockAreaProps {
  blocks?: ContentBlock[];
}

function BlockArea({ blocks }: BlockAreaProps) {
  return blocks ? (
    <div className="flex flex-wrap justify-between -mx-4">
      {blocks.map((block: ContentBlock, i: number) => (
        <div className={clsx('px-4 py-3', getBlockWidth(block.block_width?.name))} key={`block_${i}`}>{renderBlock(block)}</div>
      ))}
    </div>
  ) : null;
}

export default BlockArea;
