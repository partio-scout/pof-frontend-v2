import clsx from 'clsx';
import React from 'react';
import renderBlock from '../../utils/renderBlock';
import { BlockType, getBlockWidth } from '../blocks';

interface BlockAreaProps {
  blocks?: BlockType[];
}

function BlockArea({ blocks }: BlockAreaProps) {
  return blocks ? (
    <div className="flex flex-wrap justify-between -mx-4">
      {blocks.map((block: BlockType, i: number) => (
        <div className={clsx('px-4 my-5', getBlockWidth(block.block_width?.name))} key={`block_${i}`}>{renderBlock(block)}</div>
      ))}
    </div>
  ) : null;
}

export default BlockArea;
