export enum ContentType {
  'activity' = 'activity',
  'activity-group' = 'activity-group',
  'age-group' = 'age-group',
  'suggestion' = 'suggestion',
  'content-page' = 'content-page',
  'others' = 'others',
}

export interface SearchableContentType {
  name: string;
  type: ContentType;
}

export const contentTypes: SearchableContentType[] = [
  { name: 'Aktiviteetit', type: ContentType.activity },
  { name: 'Toteutusvinkit', type: ContentType.suggestion },
  { name: 'Sisältösivut', type: ContentType["content-page"] },
  // { name: 'Aktiviteettipaketit', type: ContentType["activity-group"] },
  // { name: 'Ikäryhmät', type: ContentType["age-group"] },
];
