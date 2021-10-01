import { Maybe } from "../../graphql-types";
import { useTranslation } from "react-i18next";
import { Locale } from "../types/locale";

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
    return 'http://localhost:1337' + url;
  }

  return url;
};

export const currentLocale = (): Locale => {
  const { i18n } = useTranslation();
  return i18n.language as Locale
}

export const changeLanguage = (lng: string) => {
  const { i18n } = useTranslation();
  if (currentLocale() !== lng) {
    i18n.changeLanguage(lng)
  }
}

export const removeHtml = (input: string) => {
  return input.replace(/(<([^>]+)>)/gi, "");
};