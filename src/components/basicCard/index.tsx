import React from 'react';
import Card from '../card';
import { prependApiUrl } from '../../utils/helpers';
import ClampLines from 'react-clamp-lines';
import { v4 as uuidv4 } from 'uuid'

interface BasicCardProps {
  image?: string;
  title?: string;
  text?: string;
  link?: string;
}

function BasicCard({image, title, text, link}: BasicCardProps) {
  return (
    <Card link={link} padded={false} rounded={false} backGround={false}>
      {image && <img src={prependApiUrl(image)} className="rounded-2xl"></img>}
      {title && <h3>{title}</h3>}
      {text && <ClampLines text={text} id={`basic-card-${uuidv4()}-text`} lines={7} buttons={false} />}
    </Card>
  );
}

export default BasicCard;
