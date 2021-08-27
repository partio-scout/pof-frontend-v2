import React from 'react';
import { ContentType } from '../../types/content';
import { HeaderItem } from '../header';
import { findHeaderItemByTypeAndId } from '../../utils/navigation';
import { Link } from 'gatsby';
import CombinedLink from '../combinedLink';

const parseType = (type: ContentType) => {
  switch (type) {
    case ContentType.activity:
      return 'Aktiviteetti';
    case ContentType['activity-group']:
      return 'Aktiviteettiryhmä';
    case ContentType['age-group']:
      return 'Ikäryhmä';
    case ContentType.suggestion:
      return 'Toteutusehdotus';
    default:
      return '-';
  }
};

const getContentTypeName = (type: ContentType) => {
  switch (type) {
    case ContentType.activity:
      return 'Activity';
    case ContentType['activity-group']:
      return 'ActivityGroup';
    case ContentType['age-group']:
      return 'AgeGroup';
    case ContentType['content-page']:
      return 'ContentPage';
    default:
      return '';
  }
};

const Hit = ({
  hit,
  type,
  navigation,
}: {
  hit: any;
  type: ContentType;
  navigation: HeaderItem[];
}): React.ReactElement => {
  const correctHeaderItem = findHeaderItemByTypeAndId(getContentTypeName(type), hit.id, navigation);

  const linkUrl = correctHeaderItem ? encodeURI(correctHeaderItem.url!) : '';

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
