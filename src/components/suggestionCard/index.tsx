import React from 'react';
import { StrapiSuggestion } from '../../../graphql-types';
import CommentIcon from '../../images/comment.inline.svg';
import TimeIcon from '../../images/time.inline.svg';
import { prependApiUrl } from '../../utils/helpers';
import Pill from './pill';
import Card from '../card';
import ClampLines from 'react-clamp-lines';

export type SuggestionWithUrl = StrapiSuggestion & { url?: string, logo?: string };

interface SuggestionCardProps {
  suggestion: SuggestionWithUrl;
  showActivityAndAgeGroup?: boolean;
}

const SuggestionCard = ({ suggestion, showActivityAndAgeGroup }: SuggestionCardProps) => {
  const { author, activity, id, content, like_count, comments, title, published_at, duration, locations, url, logo } =
    suggestion;

  const likesExist = (like_count || 0) > 0;
  const commentsExist = (comments?.length || 0) > 0;

  return (
    <Card link={url}>
      <div className="mb-1">
        {author && <div className="text-xs font-semibold">{author}</div>}
        <div className="text-xxs">{new Date(published_at).toLocaleDateString()}</div>
      </div>
      {(duration || locations?.length) && (
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
      )}
      <div className="mb-1 break-words uppercase">
        <h4>{title}</h4>
      </div>
      <div className="flex-grow mb-4">
        <ClampLines text={content!} id={`suggestion-card-${id}-text`} lines={7} buttons={false} />
      </div>
      {(likesExist || commentsExist) && (
        <div className="flex mb-1">
          {likesExist && (
            <Pill>
              <CommentIcon className="fill-current text-blue h-3 w-3 mr-1" />
              {/* TODO translate */}
              {like_count} {like_count === 1 ? 'huuto' : 'huutoa'}
            </Pill>
          )}
          {commentsExist && (
            <Pill>
              <CommentIcon className="fill-current text-blue h-3 w-3 mr-1" />
              {/* TODO translate */}
              {comments?.length} {comments?.length === 1 ? 'vastaus' : 'vastausta'}
            </Pill>
          )}
        </div>
      )}
      {activity && (
        <div className="flex mb-2">
          <img src={prependApiUrl(logo)} className="h-8 w-8 mr-1"></img>
          <div>
            <div className="text-xs font-semibold">{activity?.title}</div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default SuggestionCard;
