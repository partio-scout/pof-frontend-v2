import React from 'react';
import { ContentType } from '../../types/content';
import { HeaderItem } from '../header';
import { findHitUrl } from '../../utils/search';
import SuggestionCard from '../suggestionCard';
import ActivityCard from '../activityCard';
import { useLogoContext } from '../../contexts/logoContext';
import BasicCard from '../basicCard';
import { useTranslation } from 'react-i18next';

const getHitComponent = (type: ContentType, data: any, url: string, typeName?: string) => {
  switch (type) {
    case ContentType.suggestion:
      return <SuggestionCard suggestion={data} link={url} />;
    case ContentType.activity:
      return <ActivityCard activity={data} link={url} showActivityAndAgeGroup />;
    case ContentType['age-group']:
      return <BasicCard title={data.title} text={data.content} link={url} typeName={typeName} />; 
    case ContentType['content-page']:
      return <BasicCard title={data.title} text={data.main_text} link={url} image={data.main_image?.formats?.medium?.url} typeName={typeName} />
    case ContentType['activity-group']:
      return <BasicCard title={data.title} text={data.ingress} link={url} typeName={typeName} />
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
  const { t } = useTranslation();

  const linkUrl = findHitUrl(hit, type, navigation);

  const typeName = t(type);

  const hitWithLogo = {
    ...hit,
    logo: activityLogos[type === ContentType.suggestion ? hit.activity?.id : hit.id],
  }

  return getHitComponent(type, hitWithLogo, linkUrl, typeName) || null;
};

export default Hit;
