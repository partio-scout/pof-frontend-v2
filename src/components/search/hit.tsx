import React from 'react';
import { ContentType } from '../../types/content';

const parseType = (type: ContentType) => {
  switch (type) {
    case ContentType.activity:
      return 'Aktiviteetti';
    case ContentType['activity-group']:
      return 'Aktiviteettiryhmä';
    case ContentType['age-group']:
      return 'Ikäryhmä';
    case ContentType.suggestion:
      return 'Toteutusehdotus';
    default:
      return '-';
  }
};

const Hit =
  (type: ContentType) =>
  ({ hit }: { hit: any }): React.ReactElement => {
    return (
      <div className="p-3 bg-gray border-2 rounded-lg h-full w-full">
        <div className="text-2xl uppercase font-extrabold">{parseType(type)}</div>
        {hit.title} <br />
        Ikäryhmä: {hit.age_group.title}
      </div>
    );
  };

export default Hit;
