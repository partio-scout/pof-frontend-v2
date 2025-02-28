import { Maybe, SitePage } from '../../graphql-types';
import { useTranslation } from 'react-i18next';
import { Locale, LocaleLink } from '../types/locale';
import prependHttp from 'prepend-http';

export const parseDate = (dateString: string) => {
  const d = new Date(dateString);
  return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear();
};

/**
 * Prepend a recourse url with local Strapi url if it starts with '/uploads' (media file from local Strapi)
 * @param url The resources url
 * @returns The url prepended with local Strapi url if necessary
 */
export const prependApiUrl = (url?: Maybe<string>) => {
  if (!url) return undefined;

  if (url.startsWith('/uploads')) {
    // FIXME: Hardcoded URL
    return process.env.GATSBY_API_URL + url;
  }

  return url;
};

export const parseLinkUrl = (url: string | undefined) => {
  if (url) {
    return prependHttp(url);
  }
  return '';
};
export const currentLocale = (): Locale => {
  const { i18n } = useTranslation();
  return i18n.language as Locale;
};

export const changeLanguage = (lng: string) => {
  const { i18n } = useTranslation();
  if (currentLocale() !== lng) {
    i18n.changeLanguage(lng);
  }
};

export const removeHtml = (input: string) => {
  return input.replace(/(<([^>]+)>)/gi, '');
};

export const sitePageDataToLocaleLinks = (sitePages: SitePage[]): LocaleLink[] => {
  if (!sitePages) return [];
  return sitePages.map((page) => ({ path: page.path, locale: page.context?.locale as Locale }))
}

export const createSlug = (text: string) => {
  // Convert the text to lower case
  text = text.toLowerCase();

  // Replace non-ASCII characters with their ASCII equivalents
  const map = {
      'ä': 'ae', 'ö': 'oe', 'ü': 'ue', 'å': 'aa',
      'ø': 'oe', 'ß': 'ss', 'æ': 'ae',
      'œ': 'oe', 'ç': 'c', 'ñ': 'n',
      ' ': '-',  // Spaces replaced with hyphen
  };

  // Use the map to replace characters
  text = text.replace(/[\W\[\] ]/g, function(char) {
      return map[char] || char;
  });

  // Remove any remaining unwanted characters
  text = text.replace(/[^a-z0-9\-]/g, '');

  // Replace multiple hyphens with a single hyphen and trim hyphens from the start and end
  text = text.replace(/-+/g, '-').replace(/^-|-$/g, '');

  return text;
}

/**
 * Find the path for each localization instance
 * @param localizations The localizations of the current page
 * @param localeData The data of all pages
 * @returns An array of objects containing the locale and path of each localization
 */
interface FindLocaleLinksProps {
  localizations: {
    title: string;
    locale: string;
  }[];
  localeData: { nodes: SitePage[] };
}
export const findLocaleLinks = ({ localizations, localeData }: FindLocaleLinksProps): LocaleLink[] => {
  if (!localizations) return [];
  return localizations?.map(localization => {
    const localeLink = localeData.nodes.find(node => node.context.strapi_id === localization.id);
    return {
      locale: localization.locale,
      path: localeLink?.path
    } as LocaleLink
  })
}