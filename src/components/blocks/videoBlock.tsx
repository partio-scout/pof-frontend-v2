import React from 'react';
import ReactPlayer from 'react-player';
import { BlockProps, BlockType } from '.';
import { prependApiUrl } from '../../utils/helpers';

export interface VideoBlockType extends BlockType {
  video?: {
    url: string;
  };
  video_url?: string;
}

const VideoBlock = ({ block }: BlockProps<VideoBlockType>) => {
  const video = block.video?.url || block.video_url;

  return video ? (
    <div className="flex">
      <ReactPlayer url={prependApiUrl(video)} controls />
    </div>
  ) : null;
};

export default VideoBlock;
