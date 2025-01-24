import React from 'react';
import clsx from 'clsx';
import { StrapiActivity } from '../../../graphql-types';
import ActivityCardList from '../../components/activityCardList';
import { useTranslation } from 'react-i18next';

interface ActivitiesProps {
  activities: StrapiActivity[];
  mandatoryTitle?: string | null;
  mandatoryDescription?: string | null;
  optionalTitle?: string | null;
  optionalDescription?: string | null;
  links: { path: string; context: { strapi_id: number } }[];
}

const Heading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl uppercase mb-3 sm:text-4xl md:text-xxlw">{children}</h2>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-5 tracking-wide md:text-base">{children}</p>
);

function Activities({
  activities,
  mandatoryTitle,
  mandatoryDescription,
  optionalTitle,
  optionalDescription,
  links
}: ActivitiesProps) {
  const mandatoryActivities = activities.filter((activity) => activity.mandatory);
  const optionalActivities = activities.filter((activity) => !activity.mandatory);
  const { t } = useTranslation();

  return (
    <div>
      {mandatoryActivities.length > 0 && (
        <div className="py-5">
          <Heading>{mandatoryTitle || t('pakolliset-aktiviteetit')}</Heading>
          {mandatoryDescription && <Paragraph>{mandatoryDescription}</Paragraph>}
          <ActivityCardList activities={mandatoryActivities} showInitially={12} links={links} />
        </div>
      )}
      {optionalActivities.length > 0 && (
        <div className="py-5">
          <Heading>{optionalTitle || t('valinnaiset-aktiviteetit')}</Heading>
          {optionalDescription && <Paragraph>{optionalDescription}</Paragraph>}
          <ActivityCardList activities={optionalActivities} showInitially={12} links={links} />
        </div>
      )}
    </div>
  );
}

export default Activities;
