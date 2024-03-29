import React from 'react';
import Card from '../card';
import { prependApiUrl, removeHtml } from '../../utils/helpers';
import ClampLines from 'react-clamp-lines';
import { v4 as uuidv4 } from 'uuid';
import Pill from '../pill';

interface BasicCardProps {
  image?: string;
  title?: string;
  text?: string;
  link?: string;
  typeName?: string;
}

function BasicCard({ image, title, text, link, typeName }: BasicCardProps) {
  function trimText(text: string, n: number) {
    const trimmed = text.substr(0, n);
    const cut = trimmed.substr(0, Math.min(trimmed.length, trimmed.lastIndexOf(' ')));
    return cut + '...';
  }

  return (
    <Card link={link} padded={false} backGround={false} noMinHeight rounded={false}>
      {image && <img src={prependApiUrl(image)} className="rounded-2xl h-48 object-cover mb-2" alt={title}></img>}
      {typeName && (
        <div className="flex">
          <Pill className="text-sm py-0.5 px-1">{typeName}</Pill>
        </div>
      )}
      {title && <h4 className="mb-3 mt-1 uppercase break-words sm:text-lt md:text-lw">{title}</h4>}
      {text && (
        <ClampLines
          text={trimText(removeHtml(text), 400)}
          id={`basic-card-${uuidv4()}-text`}
          lines={7}
          buttons={false}
        />
      )}
    </Card>
  );
}

export default BasicCard;
