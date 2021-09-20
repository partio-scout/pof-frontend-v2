import React from 'react';
import { ContentType } from '../../types/content';
import { HeaderItem } from '../header';
import { findHitUrl } from '../../utils/search';
import SuggestionCard from '../suggestionCard';
import ActivityCard from '../activityCard';
import { useLogoContext } from '../../contexts/logoContext';
import BasicCard from '../basicCard';

const getHitComponent = (type: ContentType, data: any, url: string) => {
  switch (type) {
    case ContentType.suggestion:
      return <SuggestionCard suggestion={data} link={url} />;
    case ContentType.activity:
      return <ActivityCard activity={data} link={url} />;
    case ContentType['content-page']:
      return <BasicCard title={data.title} text={data.main_text} link={url} image={data.main_image?.formats?.medium?.url} />
    case ContentType['activity-group']:
      return <BasicCard title={data.title} text={data.ingress} link={url} />
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
    logo: activityLogos[type === ContentType.suggestion ? hit.activity?.id : hit.id],
  }

  return getHitComponent(type, hitWithLogo, linkUrl) || null;
};

export default Hit;
