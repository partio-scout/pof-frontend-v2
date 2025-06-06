import { graphql, useStaticQuery } from 'gatsby';
import { HeaderItem } from '../components/header';
import { ContentType } from '../types/content';
import { findHeaderItemByTypeAndId } from './navigation';
import { currentLocale } from './helpers';
import { getActivityUrls } from '../services/activity';

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
      const urls = getActivityUrls();
      const id = hit.activity?.strapi_id || hit.activity?.id;

      const linkUrl = urls?.find((url) => url.context?.strapi_id === id)?.path;
      return linkUrl + '?tip=' + (hit?.strapi_id || hit?.id);
    }
    case ContentType.activity: {
      const urls = getActivityUrls();
      const id = hit.strapi_id || hit.id;
      const linkUrl = urls?.find((url) => url.context?.strapi_id === id);
      return linkUrl?.path;
    }
    default: {
      return findUrlForContent(parseInt(hit?.id!), type, navigation);
    }
  }
};
