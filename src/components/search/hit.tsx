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
      <div className="p-3 border-solid border-blue-400 border-2 rounded-lg flex-grow">
        <h3>{parseType(type)}</h3>
        {hit.title} <br />
        Ikäryhmä: {hit.age_group.title}
      </div>
    );
  };

export default Hit;
