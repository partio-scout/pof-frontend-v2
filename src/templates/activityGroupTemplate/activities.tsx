import React from 'react';
import clsx from 'clsx';
import { StrapiActivity } from '../../../graphql-types';
import ActivityCard from '../../components/activityCard';

interface ActivitiesProps {
  activities: StrapiActivity[];
}

function Activities({ activities }: ActivitiesProps) {
  return (
    <div className="grid gap-1 mb-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {activities?.map((activity) => (
        <ActivityCard activity={activity} key={activity.strapiId} />
      ))}
    </div>
  );
}

export default Activities;
