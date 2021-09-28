import React from 'react';
import BulletImage from './bulletImage';
import { StrapiActivity } from '../../../graphql-types';
import RichText from '../../components/RichText';
import { hexToRgba } from '../../utils/color';

interface AcitivityContentSectionProps {
  data: StrapiActivity;
}

const ActivityContentSection = ({ data }: AcitivityContentSectionProps) => {
  const iconBackground = hexToRgba(data.age_group?.color || '#eee', 0.2);

  return (
    <div className="flex flex-col md:flex-row mt-4 -m-4">
      <div className="flex px-4 py-2 flex-1">
        <BulletImage type={'target'} backgroundColor={iconBackground} />
        <div className="ml-4">
          <h4 className="text-blue tracking-wider">{'Tavoite'}</h4>
          <p>{data.ingress}</p>
        </div>
      </div>
      <div className="flex px-4 py-2 flex-1">
        <BulletImage type={'description'} backgroundColor={iconBackground} />
        <div className="ml-4">
          <h4 className="text-blue tracking-wider">{'Kuvaus'}</h4>
          <RichText html={data.content} />
        </div>
      </div>
    </div>
  );
};

export default ActivityContentSection;
