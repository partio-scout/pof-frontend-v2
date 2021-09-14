import React from 'react';
import BulletImage from './bulletImage';
import { StrapiActivity } from '../../../graphql-types';
import RichText from '../../components/RichText';

interface AcitivityContentSectionProps {
  data: StrapiActivity;
}

const ActivityContentSection = ({ data }: AcitivityContentSectionProps) => (
  <div className="flex mt-4 space-x-4">
    <div className="w-1/2">
      <div className="flex">
        <div className="self-start mt-2">
          <BulletImage type={'target'} />
        </div>
        <div className="ml-4">
          <h4 className="text-blue tracking-wider">{'Tavoite'}</h4>
          <p>{data.ingress}</p>
        </div>
      </div>
    </div>
    <div className="w-1/2">
      <div className="flex">
        <div className="self-start mt-2">
          <BulletImage type={'description'} />
        </div>
        <div className="ml-4">
          <h4 className="text-blue tracking-wider">{'Kuvaus'}</h4>
          <RichText html={data.content} />
        </div>
      </div>
    </div>
  </div>
);

export default ActivityContentSection;
