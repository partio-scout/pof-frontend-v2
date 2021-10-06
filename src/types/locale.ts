export const locales = ['fi' , 'sv', 'en', 'sme', 'smn'] as const;

export type Locale = typeof locales[number];