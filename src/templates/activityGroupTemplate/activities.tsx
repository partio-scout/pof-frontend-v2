import React, { useState } from 'react';
import clsx from 'clsx';
import { StrapiActivity } from '../../../graphql-types';
import ActivityCard from '../../components/activityCard';
import PlusIcon from '../../images/plus-round.inline.svg';
import ActivityCardList from '../../components/activityCardList';

interface ActivitiesProps {
  activities: StrapiActivity[];
  mandatoryTitle?: string | null;
  mandatoryDescription?: string | null;
  optionalTitle?: string | null;
  optionalDescription?: string | null;
}

const Heading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl uppercase mb-3">{children}</h2>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => <p className="mb-5 tracking-wide">{children}</p>;

function Activities({
  activities,
  mandatoryTitle,
  mandatoryDescription,
  optionalTitle,
  optionalDescription,
}: ActivitiesProps) {
  const mandatoryActivities = activities.filter((activity) => activity.mandatory);
  const optionalActivities = activities.filter((activity) => !activity.mandatory);

  return (
    <div>
      {/* TODO Translate */}
      {mandatoryActivities.length > 0 && (
        <div className="py-5">
          <Heading>{mandatoryTitle || 'Pakolliset aktiviteetit'}</Heading>
          {mandatoryDescription && <Paragraph>{mandatoryDescription}</Paragraph>}
          <ActivityCardList activities={mandatoryActivities} showInitially={12} />
        </div>
      )}
      {optionalActivities.length > 0 && (
        <div className="py-5">
          <Heading>{optionalTitle || 'Valinnaiset aktiviteetit'}</Heading>
          {optionalDescription && <Paragraph>{optionalDescription}</Paragraph>}
          <ActivityCardList activities={optionalActivities} showInitially={12} />
        </div>
      )}
    </div>
  );
}

export default Activities;
