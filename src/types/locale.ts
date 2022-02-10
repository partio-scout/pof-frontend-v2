export const locales = ['fi', 'sv', 'en', 'sme', 'smn', 'ru'] as const;

export type Locale = typeof locales[number];

export interface LocaleLink {
  path: string;
  locale: Locale;
}
