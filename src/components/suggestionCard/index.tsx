import React from 'react';
import { StrapiSuggestion } from '../../../graphql-types';
import CommentIcon from '../../images/comment.inline.svg';
import TimeIcon from '../../images/time.inline.svg';
import { prependApiUrl, removeHtml } from '../../utils/helpers';
import Pill from '../pill';
import Card from '../card';
import ClampLines from 'react-clamp-lines';
import { useTranslation } from 'react-i18next';

export type SuggestionWithUrl = StrapiSuggestion & { url?: string; logo?: string };

interface SuggestionCardProps {
  suggestion: SuggestionWithUrl;
  link?: string;
}

const SuggestionCard = ({ suggestion, link }: SuggestionCardProps) => {
  const { author, activity, id, content, like_count, comments, title, publishedAt, duration, locations, logo } =
    suggestion;

  const { t } = useTranslation();
  const likesExist = (like_count || 0) > 0;
  const commentsExist = (comments?.length || 0) > 0;

  return (
    <Card link={link} padded={false}>
      <div className="p-3 grow">
        <div className="mb-1">
          {author && <div className="text-xs font-semibold">{author}</div>}
          <div className="text-xxs">{new Date(publishedAt).toLocaleDateString('fi')}</div>
        </div>
        {(duration || (locations?.length || 0) > 0) && (
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
          <h4 className="sm:text-lt md:text-lw">{title}</h4>
        </div>
        <div className="grow mb-4">
          <ClampLines text={removeHtml(content!)} id={`suggestion-card-${id}-text`} lines={7} buttons={false} />
        </div>
        {(likesExist || commentsExist) && (
          <div className="flex mb-1">
            {likesExist && (
              <Pill>
                <CommentIcon className="fill-current text-blue h-3 w-3 mr-1" />
                {t('huuto', { count: like_count as number })}
              </Pill>
            )}
            {commentsExist && (
              <Pill>
                <CommentIcon className="fill-current text-blue h-3 w-3 mr-1" />
                {t('vastausWithCount', { count: comments?.length })}
              </Pill>
            )}
          </div>
        )}
      </div>
      {activity && (
        <div className="flex p-3 bg-gray">
          {logo && <img src={prependApiUrl(activity?.logo?.url)} className="h-8 w-8 mr-1" alt=""></img>}
          <div>
            <div className="text-xs font-semibold">{activity?.title}</div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default SuggestionCard;
