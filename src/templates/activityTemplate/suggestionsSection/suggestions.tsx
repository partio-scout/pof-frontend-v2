import React, { useState, useEffect, useLayoutEffect } from 'react';
import NewReplyForm from './newReplyForm';
import { CommonSuggestionFormProps } from './index';
import { useQueryParam, NumberParam } from 'use-query-params';
import { parseDate, parseLinkUrl, prependApiUrl, removeHtml } from '../../../utils/helpers';
import AttachmentIcon from '../../../images/attachment.inline.svg';
import LinkIcon from '../../../images/link.inline.svg';
import LikeIcon from '../../../images/like.inline.svg';
import PinnedIcon from '../../../images/pinned.inline.svg';
import TimeIcon from '../../../images/time.inline.svg';
import { sendSuggestionLike, sendSuggestionUnlike } from '../../../services/activity';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import clsx from 'clsx';
import { hexToRgba } from '../../../utils/color';
import Pill from '../../../components/pill';
import { useTranslation } from 'react-i18next';
import debounce from 'lodash.debounce';

const votedStyles = 'bg-gray-light border-2 border-hardBlue rounded-xl p-1 font-sourceSansPro cursor-pointer';
const unVotedStyles = 'bg-gray-light rounded-xl p-1 font-sourceSansPro cursor-pointer';

export interface SuggestionFromRest {
  id: number;
  title: string;
  content: string;
  activity: Activity;
  wp_guid: string;
  author: string;
  locale: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  from_web: boolean;
  like_count: number;
  likes: string[];
  pinned?: any;
  duration: Duration;
  links: any[];
  files: any[];
  comments: any[];
  locations: Location[];
  localizations: any[];
}

interface Location {
  id: number;
  name: string;
  slug: string;
  locale: string;
  createdAt: string;
  updatedAt: string;
  icon: Icon;
}

interface Icon {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats?: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: string;
  updatedAt: string;
}

interface Duration {
  id: number;
  name: string;
  slug: string;
  locale: string;
  createdAt: string;
  updatedAt: string;
}

interface Activity {
  id: number;
  title: string;
  content: string;
  mandatory: boolean;
  ingress: string;
  level?: any;
  wp_guid: string;
  leader_tasks: string;
  activity_term: number;
  duration: number;
  locale: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  activity_group: number;
  age_group: number;
  preparation_duration: number;
  mandatory_activities_title?: any;
  mandatory_activities_description?: any;
  optional_activities_title?: any;
  optional_activities_description?: any;
  links: any[];
  main_image?: any;
  logo?: any;
  files: any[];
  images: any[];
}

interface SuggestionsProps extends CommonSuggestionFormProps {
  resetFormState: () => void;
  suggestions: Array<SuggestionFromRest>;
  ageGroupColor?: string | null;
  children?: React.ReactChild;
}

interface ConversationLayoutProps {
  lastItem?: boolean;
  children: React.ReactChild;
  key?: string | number;
}

interface CommentProps {
  comment: CommentType;
}

interface CommentType {
  title?: string;
  author?: string;
  scout_group?: string;
  text?: string;
}

const ConversationLayout = ({ lastItem = false, children }: ConversationLayoutProps) => (
  <div className="flex flex-row">
    <div className="w-1/5 pl-4 pr-4">
      <div className="bg-white w-full h-1/2 border-gray border-l-2 border-b-2 "></div>
      {!lastItem && <div className="bg-white w-full h-1/2 border-gray border-l-2"></div>}
    </div>
    {children}
  </div>
);

const Comment = ({ comment }: CommentProps) => {
  const { t } = useTranslation();
  return (
    <div className="rounded-xl border-gray border-2 grow p-2 mt-4">
      <h3 className="sm:text-xlt md:text-xlw">{comment.title}</h3>
      <span className="font-semibold text-blue">
        {comment.author || t('anonymous')}, {comment.scout_group || 'Ei lippukuntatietoja'}
      </span>
      <p className="text-blue md:text-base">{comment.text}</p>
    </div>
  );
};

const Suggestions = ({ suggestions, resetFormState, ageGroupColor, ...rest }: SuggestionsProps) => {
  // Query param `tip` is used to scroll to a distinct suggestion when coming from search
  const [focusedSuggestion] = useQueryParam('tip', NumberParam);
  const [expandedIndex, setExpandedIndex] = useState({});
  const [updatedSuggestions, setUpdatedSuggestions] = useState<Array<SuggestionFromRest> | null>(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    if (focusedSuggestion) {
      const element = document.getElementById(focusedSuggestion.toString());
      if (element)
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
    }
  }, []);

  useEffect(() => {
    setUpdatedSuggestions(suggestions);
  }, [suggestions]);

  useEffect(() => {
    if (expandedIndex !== null) {
      const ele = document.getElementById(String(expandedIndex));
      if (ele) {
        ele.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }, [expandedIndex]);

  const openCommentAccordion = (index: number) => {
    if (expandedIndex !== index) {
      resetFormState();
      setExpandedIndex(index);
    }
  };

  const getUserId = () => {
    const idFromLocalStorage = JSON.parse(localStorage.getItem('userId') || '""');
    if (idFromLocalStorage && idFromLocalStorage != '') {
      return idFromLocalStorage;
    } else {
      const uuid = uuidv4();
      localStorage.setItem('userId', JSON.stringify(uuid));
      return uuid;
    }
  };

  const isLikedByUser = (suggestion: SuggestionFromRest) => {
    const likes = suggestion?.likes;
    return likes && likes.includes(getUserId())
  }

  const updateSuggestions = (suggestion: SuggestionFromRest) => {
    if (!updatedSuggestions) return;
    const updatedSuggestionsCopy = updatedSuggestions.map((s) => {
      if (s.id === suggestion.id) {
        return suggestion;
      }
      return s;
    });
    setUpdatedSuggestions(updatedSuggestionsCopy);
  };

  const handleVote = (suggestion: SuggestionFromRest) => {
    const isLiked = isLikedByUser(suggestion);

    if (isLiked) {
      sendSuggestionUnlike(suggestion.id, getUserId())
          .then((res) => {
            updateSuggestions(res.data as SuggestionFromRest);
          })
          .catch(() => {
            toast.error('Tykkäyksen päivitys epäonnistui');
          });
    } else {
      sendSuggestionLike(suggestion.id, getUserId())
          .then((res) => {
            updateSuggestions(res.data as SuggestionFromRest);
          })
          .catch(() => {
            toast.error('Tykkäyksen lähetys epäonnistui');
          });
    }
  };
  
  const getVotedStyles = (suggestion: SuggestionFromRest) => 
    isLikedByUser(suggestion) ? votedStyles : unVotedStyles;

  const debounceVote = debounce((suggestion: SuggestionFromRest) => handleVote(suggestion), 500);

  const suggestionSortFunction = (a: SuggestionFromRest, b: SuggestionFromRest): -1 | 0 | 1 => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    if (a.publishedAt === b.publishedAt) return 0;
    return a.publishedAt > b.publishedAt ? -1 : 1;
  };

  const showPills = (suggestion: SuggestionFromRest): boolean => {
    return suggestion.duration !== null || (suggestion.locations?.length || 0) >= 0;
  };

  return (
    <>
      {updatedSuggestions &&
        updatedSuggestions.sort(suggestionSortFunction).map((suggestion, index: number) => (
          <div key={suggestion?.id} id={suggestion?.id?.toString()}>
            <div
              className={clsx('bg-gray-light rounded-t-xl p-3 mt-3', {
                'border-hardBlue border-2 border-b-0': focusedSuggestion === suggestion?.id,
              })}
            >
              <div className="flex items-center">
                {suggestion.pinned && (
                  <PinnedIcon
                    className="fill-current p-2 w-16 h-16 rounded-xl mr-2"
                    style={{ backgroundColor: hexToRgba(ageGroupColor || '#eee', 0.2) }}
                  />
                )}
                <div>
                  <h4 className="text-blue text-lt md:text-lw m">{suggestion!.title}</h4>
                  <span>{parseDate(suggestion!.publishedAt)}</span>
                  <span className="text-blue font-semibold ml-2 inline-block">
                    {suggestion!.author !== '' ? suggestion!.author : 'Anonyymi'}
                  </span>
                </div>
              </div>
              {showPills(suggestion) && (
                <div className="flex mt-1">
                  {suggestion.duration && (
                    <Pill className="!mr-1">
                      <TimeIcon className="fill-current text-blue h-3 w-3 mr-1" />
                      {suggestion.duration.slug}
                    </Pill>
                  )}
                  {(suggestion.locations?.length || 0) > 0 &&
                    suggestion.locations.map((location) => (
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
              <p className="mt-3 md:text-base">{removeHtml(suggestion!.content)}</p>
            </div>
            <div
              className={clsx('bg-gray p-1 overflow-auto rounded-br-xl flex', {
                'border-hardBlue border-2 border-t-0': focusedSuggestion === suggestion?.id,
              })}
            >
              <div className="grow">
                {suggestion.links &&
                  suggestion.links.length > 0 &&
                  suggestion.links.map((l) => (
                    <div className="ml-2 inline-block bg-gray-light rounded-xl p-1 font-sourceSansPro">
                      <a href={parseLinkUrl(l.url)} target="_blank" rel="noreferrer">
                        <LinkIcon className="fill-current inline-block mr-1" />
                        <span className="font-semibold">
                          {l.description?.replace(/(.{20})..+/, '$1…') || l.url?.replace(/(.{20})..+/, '$1…')}
                        </span>
                      </a>
                    </div>
                  ))}
                {suggestion.files &&
                  suggestion.files.length > 0 &&
                  suggestion.files.map((f) => (
                    <a href={f.url} download>
                      <div className="ml-2 inline-block bg-gray-light rounded-xl p-1 font-sourceSansPro">
                        <AttachmentIcon className="fill-current inline-block mr-1" />
                        <span className="font-semibold">{f.name}</span>
                      </div>
                    </a>
                  ))}
              </div>

              <div className="float-right">
                <span className={getVotedStyles(suggestion)} onClick={() => debounceVote(suggestion)}>
                  <LikeIcon className="fill-current inline-block mr-1" />
                  {t('huuto_other', { count: suggestion!.like_count })}
                </span>
                <button
                  className="bg-hardBlue rounded-xl text-white p-1 font-tondu ml-2 tracking-wide"
                  onClick={() => openCommentAccordion(index)}
                >
                  {t('vastaa')}
                </button>
              </div>
            </div>
            {suggestion.comments?.length <= 1 && (
              <>
                {suggestion.comments.map((comment: Comment) => (
                  <ConversationLayout key={comment.id} lastItem={index !== expandedIndex}>
                    <Comment comment={comment} />
                  </ConversationLayout>
                ))}
                {index === expandedIndex && (
                  <div id={String(index)}>
                    <ConversationLayout lastItem>
                      <NewReplyForm suggestionId={suggestion!.id!} {...rest} />
                    </ConversationLayout>
                  </div>
                )}
              </>
            )}
            {suggestion.comments?.length > 1 && index !== expandedIndex && (
              <>
                <ConversationLayout>
                  <Comment comment={suggestion.comments[0]} />
                </ConversationLayout>
                <button
                  className="mx-auto bg-hardBlue mt-4 text-white font-tondu rounded-xl p-2"
                  onClick={() => openCommentAccordion(index)}
                >
                  {t('show-all')}
                </button>
              </>
            )}
            {suggestion.comments?.length > 1 && index === expandedIndex && (
              <>
                {suggestion.comments.map((comment) => (
                  <ConversationLayout key={comment.id}>
                    <Comment comment={comment} />
                  </ConversationLayout>
                ))}
                <div id={String(index)}>
                  <ConversationLayout lastItem>
                    <NewReplyForm suggestionId={suggestion!.id!} {...rest} />
                  </ConversationLayout>
                </div>
              </>
            )}
          </div>
        ))}
    </>
  );
};

export default Suggestions;
