import React from 'react';
import { ContentType } from '../../types/content';
import { HeaderItem } from '../header';
import CombinedLink from '../combinedLink';
import { findHitUrl, parseType } from '../../utils/search';

const Hit = ({
  hit,
  type,
  navigation,
}: {
  hit: any;
  type: ContentType;
  navigation: HeaderItem[];
}): React.ReactElement => {
  const linkUrl = findHitUrl(hit, type, navigation);

  // TODO Proper UI for these results

  return (
    <div className="p-3 bg-gray border-2 rounded-lg h-full w-full">
      <div className="text-2xl uppercase font-extrabold">{parseType(type)}</div>
      {hit?.title} <br />
      Ikäryhmä: {hit?.age_group?.title} <br />
      <CombinedLink to={linkUrl}>Linkki</CombinedLink>
    </div>
  );
};

export default Hit;
