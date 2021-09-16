import React from 'react';
import { StrapiActivity } from '../../../graphql-types';
import ActivityCard from '../../components/activityCard';

interface ActivitiesProps {
  activities: StrapiActivity[];
}

function Activities({ activities }: ActivitiesProps) {
  return (
    <div className="grid grid-cols-4 gap-1 mb-5">
      {activities?.map((activity) => (
        <ActivityCard activity={activity} />
      ))}
    </div>
  );
}

export default Activities;
