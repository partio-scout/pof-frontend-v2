import React from 'react';
import BulletImage from './bulletImage';
import { Strapi_Activity } from '../../../graphql-types';
import RichText from '../../components/RichText';
import { hexToRgba } from '../../utils/color';
import { useTranslation } from 'react-i18next';

interface AcitivityContentSectionProps {
  data: Strapi_Activity;
}

const ActivityContentSection = ({ data }: AcitivityContentSectionProps) => {
  const iconBackground = hexToRgba(data.age_group?.color || '#eee', 0.2);
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row mt-4 -m-4">
      <div className="flex px-4 py-2 flex-1">
        <BulletImage type={'target'} backgroundColor={iconBackground} />
        <div className="ml-4">
          <h4 className="text-blue tracking-wider sm:text-lt md:text-lw">{t('tavoite')}</h4>
          <p>{data.ingress}</p>
        </div>
      </div>
      <div className="flex px-4 py-2 flex-1">
        <BulletImage type={'description'} backgroundColor={iconBackground} />
        <div className="ml-4">
          <h4 className="text-blue tracking-wider sm:text-lt md:text-lw">{t('kuvaus')}</h4>
          <RichText html={data.content} />
        </div>
      </div>
    </div>
  );
};

export default ActivityContentSection;
