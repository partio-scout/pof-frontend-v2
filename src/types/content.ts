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
  { name: 'Aktiviteetti', type: ContentType.activity },
  { name: 'Toteutusvinkki', type: ContentType.suggestion },
  // { name: 'Muut', type: ContentType.others },
];
