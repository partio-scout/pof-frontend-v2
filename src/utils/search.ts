import { HeaderItem } from '../components/header';
import { ContentType } from '../types/content';
import { findHeaderItemByTypeAndId } from './navigation';

export const parseType = (type: ContentType) => {
  switch (type) {
    case ContentType.activity:
      return 'Aktiviteetti';
    case ContentType['activity-group']:
      return 'Aktiviteettiryhmä';
    case ContentType['age-group']:
      return 'Ikäryhmä';
    case ContentType.suggestion:
      return 'Toteutusehdotus';
    case ContentType['content-page']:
      return 'Sisältösivu';
    default:
      return '-';
  }
};

export const getContentTypeName = (type: ContentType) => {
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

export const findUrlForContent = (id: number, type: ContentType, navigation: Partial<HeaderItem>[]): string => {
  const correctHeaderItem = findHeaderItemByTypeAndId(getContentTypeName(type), id, navigation);
  return correctHeaderItem ? encodeURI(correctHeaderItem.url!) : '';
};

export interface HitModel {
  id?: string;
  strapi_id?: number;
  activity?: {
    strapi_id?: number;
    id?: string;
  };
}

export const findHitUrl = (hit: HitModel, type: ContentType, navigation: Partial<HeaderItem>[]) => {
  switch (type) {
    case ContentType.suggestion: {
      // If contentType is `suggestion`, find its parent activity's path,
      // and set the suggestion id as query parameter
      const id = hit.activity?.strapi_id || hit.activity?.id;
      const linkUrl = findUrlForContent(id! as number, ContentType.activity, navigation);
      return linkUrl + '?tip=' + (hit.strapi_id || hit.id);
    }
    default: {
      return findUrlForContent(parseInt(hit.id!), type, navigation);
    }
  }
};
