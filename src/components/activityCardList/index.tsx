import React, { useState } from 'react';
import { StrapiActivity } from '../../../graphql-types';
import ActivityCard from '../activityCard';
import PlusIcon from '../../images/plus-round.inline.svg';

interface ActivityCardListProps {
  activities: StrapiActivity[];
  showInitially?: number;
}

const ActivityCardList = ({ activities, showInitially }: ActivityCardListProps) => {
  const [allVisible, setAllVisible] = useState(false);

  const visibleActivities = showInitially ? activities.slice(0, !allVisible ? showInitially : undefined) : activities;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {visibleActivities?.map((activity) => (
          <ActivityCard activity={activity} key={activity.strapiId} />
        ))}
      </div>
      {visibleActivities.length < activities.length && (
        <div className="flex items-center justify-center my-12">
          <button
            onClick={() => setAllVisible(true)}
            className="group flex justify-center items-center uppercase border border-blue border-opacity-40 rounded py-3 px-16 font-tondu tracking-widest"
          >
            <PlusIcon className="text-blue group-hover:text-opacity-100 text-opacity-40 fill-current mr-2 w-4 h-4" /> Näytä kaikki ({activities.length})
          </button>
        </div>
      )}
    </div>
  );
};

export default ActivityCardList;
