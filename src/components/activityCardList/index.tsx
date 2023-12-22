import React, { useEffect, useState } from 'react';
import { Strapi_Activity } from '../../../graphql-types';
import ActivityCard from '../activityCard';
import PlusIcon from '../../images/plus-round.inline.svg';
import { fetchActivities } from '../../services/activity';
import useNavigation from '../../hooks/navigation';
import { findHeaderItemByTypeAndId } from '../../utils/navigation';
import { useTranslation } from 'react-i18next';
import { currentLocale } from '../../utils/helpers';
import clsx from 'clsx';

interface ActivityCardListProps {
  activities: Strapi_Activity[];
  /**
   * How many activities to show initially (and hide the rest)
   */
  showInitially?: number;
  /**
   * Set this true to fetch the activities' data from Strapi directly.
   * This is needed when showing activities which come from inside Strapi components,
   * which don't currently show component relations properly in api responses.
   */
  augmentData?: boolean;
  showActivityAndAgeGroup?: boolean;
}

const ActivityCardList = ({
  activities,
  showInitially,
  augmentData,
  showActivityAndAgeGroup,
}: ActivityCardListProps) => {
  const [allVisible, setAllVisible] = useState(false);
  const [showableActivities, setShowableActivities] = useState<Strapi_Activity[]>([]);
  const navigation = useNavigation(currentLocale());
  const locale = currentLocale();

  const { t } = useTranslation();

  useEffect(() => {
    if (augmentData) {
      fetchActivities(
        activities.map((activity) => activity.id),
        locale,
      )
        .then((res) => setShowableActivities(res.data))
        .catch((err) => {
          console.error(err);
          setShowableActivities(activities);
        });
    } else {
      setShowableActivities(activities);
    }
  }, []);

  const visibleActivities = showInitially
    ? showableActivities.slice(0, !allVisible ? showInitially : undefined)
    : showableActivities;

  // Ensure that all activities have link-paths. If an activity was fetched directly from Strapi, it doesn't have a path.
  const activitiesWithLinks = visibleActivities.map((activity) => {
    if (activity.fields?.path) return activity;

    const headerItem = findHeaderItemByTypeAndId('Activity', activity.id, navigation);

    return {
      ...activity,
      fields: {
        path: headerItem?.url,
      },
    };
  });

  return (
    <>
      <div className="flex">
        <div
          className={clsx('flex-1 grid grid-cols-1 gap-3', {
            'xl:grid-cols-4': activitiesWithLinks.length > 3,
            'lg:grid-cols-3': activitiesWithLinks.length > 2,
            'sm:grid-cols-2': activitiesWithLinks.length > 1,
          })}
        >
          {activitiesWithLinks?.map((activity) => (
            <ActivityCard activity={activity} key={activity.title} showActivityAndAgeGroup={showActivityAndAgeGroup} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        {activitiesWithLinks.length < activities.length && (
          <div className="flex items-center justify-center my-12">
            <button
              onClick={() => setAllVisible(true)}
              className="group flex justify-center items-center uppercase border border-blue border-opacity-40 rounded py-3 px-16 font-tondu tracking-widest"
            >
              <PlusIcon className="text-blue group-hover:text-opacity-100 text-opacity-40 fill-current mr-2 w-4 h-4" />
              {t('nayta-kaikki')} ({activities.length})
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ActivityCardList;
