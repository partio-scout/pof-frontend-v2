import React from 'react';
import { ContentType } from '../../types/content';
import { HeaderItem } from '../header';
import { findHitUrl, parseType } from '../../utils/search';
import SuggestionCard from '../suggestionCard';
import ActivityCard from '../activityCard';
import { useLogoContext } from '../../contexts/logoContext';

const getHitComponent = (type: ContentType, data: any, url: string) => {
  switch (type) {
    case ContentType.suggestion:
      return <SuggestionCard suggestion={data} link={url} />;
    case ContentType.activity:
      return <ActivityCard activity={data} link={url} />;
  }
}

const Hit = ({
  hit,
  type,
  navigation,
}: {
  hit: any;
  type: ContentType;
  navigation: HeaderItem[];
}): React.ReactElement | null => {
  const { activityLogos } = useLogoContext();

  const linkUrl = findHitUrl(hit, type, navigation);

  const hitWithLogo = {
    ...hit,
    logo: activityLogos[hit.id],
  }

  return getHitComponent(type, hitWithLogo, linkUrl) || null;
};

export default Hit;
