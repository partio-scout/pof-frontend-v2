import { Link } from 'gatsby';
import React from 'react';
import { StrapiActivity } from '../../../graphql-types';

interface ActivitiesProps {
  activities: StrapiActivity[];
}

function Activities({ activities }: ActivitiesProps) {
  return (
    <div className="masonry before:box-inherit after:box-inherit mb-5">
      {activities?.map((activity) => (
        // TODO real activity cards
        <Link
          to={activity.fields?.path || ''}
          className="block break-inside bg-gray-light rounded-2xl p-8 mb-3"
          key={activity?.id}
        >
          {activity?.title}
        </Link>
      ))}
    </div>
  );
}

export default Activities;
