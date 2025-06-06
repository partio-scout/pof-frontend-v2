import React, { useEffect, useState } from 'react';
import { StrapiActivity } from '../../../graphql-types';
import ActivityCard from '../activityCard';
import PlusIcon from '../../images/plus-round.inline.svg';
import { fetchActivities } from '../../services/activity';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { SitePageLocaleFragment } from '../blockArea';
import { currentLocale } from '../../utils/helpers';

interface ActivityCardListProps {
  activities: StrapiActivity[];
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
  links: SitePageLocaleFragment[];
}

const ActivityCardList = ({
  activities,
  showInitially,
  augmentData,
  showActivityAndAgeGroup,
  links,
}: ActivityCardListProps) => {
  const [allVisible, setAllVisible] = useState(false);
  const [showableActivities, setShowableActivities] = useState<StrapiActivity[]>([]);

  const { t } = useTranslation();
  const locale = currentLocale();

  useEffect(() => {
    if (augmentData) {
      const activityIds = activities.map((activity) => activity.strapi_id);
      fetchActivities(activityIds, locale)
        .then((res) => {
          setShowableActivities(res.data?.data);
        })
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

  const activitiesWithLinks = visibleActivities?.map((activity) => {
    const id = typeof activity.strapi_id === 'undefined' ? activity.id : activity.strapi_id;
    const headerItem = links?.find((link) => link.context.strapi_id === id);

    return {
      ...activity,
      link: headerItem?.path,
    };

  });

  return (
    <>
      <div className="flex">
        <div
          className={clsx('flex grid grid-cols-1 gap-3', {
            'xl:grid-cols-4': activitiesWithLinks.length > 3,
            'lg:grid-cols-3': activitiesWithLinks.length > 2,
            'sm:grid-cols-2': activitiesWithLinks.length > 1,
          })}
        >
          {activitiesWithLinks?.map((activity) => (
            <ActivityCard activity={activity} key={activity.id + activity.title} showActivityAndAgeGroup={showActivityAndAgeGroup} link={activity.link}/>
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
