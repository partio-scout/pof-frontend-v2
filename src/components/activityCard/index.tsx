import React from 'react';
import { StrapiActivity } from '../../../graphql-types';

import { useTranslation } from 'react-i18next';
import {createSlug } from '../../utils/helpers';
import {prependApiUrl, currentLocale, sitePageDataToLocaleLinks } from '../../utils/helpers';
import { ContentType } from '../../types/content';

import { hexToRgba } from '../../utils/color';
import ExclamationIcon from '../../images/exclamation-round-filled.inline.svg';
import PlusIcon from '../../images/plus-round.inline.svg';
import Anchor from '../../images/anchor.inline.svg';
import CommentIcon from '../../images/comment.inline.svg';
import TimeIcon from '../../images/time.inline.svg';
import Pill from '../pill';
import Card from '../card';
import { findHitUrl } from '../../utils/search';

interface ActivityCardProps {
  activity: StrapiActivity;
  link?: string;
  showActivityAndAgeGroup?: boolean;
}

const ActivityCard = ({ activity, showActivityAndAgeGroup }: ActivityCardProps) => {
  const { age_group, activity_group, mandatory, suggestions, duration, locations, is_marine_activity, title, link } =
    activity;
  const { t } = useTranslation();

  const iconUrl = prependApiUrl(activity_group?.logo?.formats?.thumbnail?.url!);


  return (
    <Card link={link} borderColor={hexToRgba(age_group?.color!, 0.3)}>
      {showActivityAndAgeGroup && (
        <div className="flex mb-2">
          {iconUrl && (
            <img src={iconUrl} className="h-8 w-8 mr-1 object-contain" alt={activity_group?.title || ''}></img>
          )}
          <div>
            <div className="text-xs font-semibold">{activity_group?.title}</div>
            <div className="text-xxs">{age_group?.title}</div>
          </div>
        </div>
      )}
      <div className="flex flex-col font-bold mb-2">
        {mandatory ? (
          <div className=" flex flex-row my-1">
            <ExclamationIcon className="fill-current text-blue w-4 h-4 mr-1" /> {t('pakollinen-aktiviteetti')}
          </div>
        ) : (
          <div className="flex flex-row my-1">
            <PlusIcon className="fill-current text-blue w-4 h-4 mr-1" /> {t('valinnainen-aktiviteetti')}
          </div>
        )}
        {is_marine_activity && (
          <div className="flex flex-row my-1">
            <Anchor className="fill-current text-blue w-4 h-4 mr-1" /> {t('meripartio-aktiviteetti')}
          </div>
        )}
      </div>
      <div className="flex mb-2 flex-wrap">
        {duration && (
          <Pill className="!mr-1">
            <TimeIcon className="fill-current text-blue h-3 w-3 mr-1" />
            {duration.slug}
          </Pill>
        )}
        {(locations?.length || 0) > 0 &&
          locations?.map((location) => (
            <Pill key={location?.name}>
              {location?.icon?.url ? (
                <img
                  src={prependApiUrl(location?.icon?.url || '')}
                  alt={location?.slug!}
                  title={location?.slug!}
                  className="h-3"
                ></img>
              ) : (
                location?.name
              )}
            </Pill>
          ))}
      </div>
      <div className="grow mb-4 break-words uppercase">
        <h4 className="sm:text-lt md:text-lw">{activity.title}</h4>
      </div>
      {(suggestions?.length || 0) > 0 && (
        <div className="flex mb-2">
          <Pill>
            <CommentIcon className="fill-current text-blue h-3 w-3 mr-1" />
            {t('toteutusvinkki', { count: suggestions?.length })}
          </Pill>
        </div>
      )}
    </Card>
  );
};

export default ActivityCard;
