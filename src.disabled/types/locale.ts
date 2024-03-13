export type Locale = 'fi' | 'sv' | 'en' | 'sme' | 'smn';

export interface LocaleLink {
  path: string;
  locale: Locale;
}
