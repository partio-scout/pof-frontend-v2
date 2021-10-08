export const locales = ['fi', 'sv', 'en', 'sme', 'smn'] as const;

export type Locale = typeof locales[number];

export interface LocaleLink {
  path: string;
  locale: Locale;
}