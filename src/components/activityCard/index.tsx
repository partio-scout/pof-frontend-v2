import React from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import { StrapiActivity } from '../../../graphql-types';
import { hexToRgba } from '../../utils/color';
import ExclamationIcon from '../../images/exclamation-round-filled.inline.svg';
import PlusIcon from '../../images/plus-round.inline.svg';
import CommentIcon from '../../images/comment.inline.svg';
import TimeIcon from '../../images/time.inline.svg';
import { prependApiUrl } from '../../utils/helpers';
import Pill from '../pill';
import Card from '../card';

interface ActivityCardProps {
  activity: StrapiActivity;
  link?: string;
  showActivityAndAgeGroup?: boolean;
}

const ActivityCard = ({ activity, showActivityAndAgeGroup, link }: ActivityCardProps) => {
  const { age_group, activity_group, mandatory, suggestions, duration, locations, fields } = activity;

  return (
    <Card link={link || fields?.path} borderColor={hexToRgba(age_group?.color!, 0.3)}>
      {showActivityAndAgeGroup && (
        <div className="flex mb-2">
          <img src={prependApiUrl(activity_group?.logo?.formats?.thumbnail?.url!)} className="h-8 w-8"></img>
          <div>
            <div className="text-xs font-semibold">{activity_group?.title}</div>
            <div className="text-xxs">{age_group?.title}</div>
          </div>
        </div>
      )}
      <div className="flex font-bold mb-2">
        {mandatory ? (
          <>
            <ExclamationIcon className="fill-current text-blue w-4 h-4 mr-1" /> Pakollinen Aktiviteetti
          </>
        ) : (
          <>
            <PlusIcon className="fill-current text-blue w-4 h-4 mr-1" /> Valinnainen Aktiviteetti
          </>
        )}
      </div>
      <div className="flex mb-2 flex-wrap">
        {duration && (
          <Pill className="!mr-1">
            <TimeIcon className="fill-current text-blue h-3 w-3 mr-1" />
            {duration.slug}
          </Pill>
        )}
        {locations?.length &&
          locations.map((location) => (
            <Pill key={location?.name}>
              <img
                src={prependApiUrl(location?.icon?.url || '')}
                alt={location?.slug!}
                title={location?.slug!}
                className="h-3"
              ></img>
            </Pill>
          ))}
      </div>
      <div className="flex-grow mb-4 break-words uppercase">
        <h4>{activity.title}</h4>
      </div>
      {suggestions?.length && (
        <div className="flex mb-2">
          <Pill>
            <CommentIcon className="fill-current text-blue h-3 w-3 mr-1" />
            {/* TODO translate */}
            {suggestions?.length} {suggestions.length === 1 ? 'toteutusvinkki' : 'toteutusvinkkiä'}
          </Pill>
        </div>
      )}
    </Card>
  );
};

export default ActivityCard;
