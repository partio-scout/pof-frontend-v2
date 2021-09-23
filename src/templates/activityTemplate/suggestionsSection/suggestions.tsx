import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import NewReplyForm from './newReplyForm';
import { CommonSuggestionFormProps, Error } from './index';
import { useQueryParam, StringParam, NumberParam } from 'use-query-params';
import { parseDate } from '../../../utils/helpers';
import AttachmentIcon from '../../../images/attachment.inline.svg';
import LinkIcon from '../../../images/link.inline.svg';
import { sendSuggestionLike, sendSuggestionUnlike } from '../../../services/activity';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import clsx from 'clsx';

const votedStyles = 'bg-gray-light border-2 border-hardBlue rounded-xl p-1 font-sourceSansPro';
const unVotedStyles = 'bg-gray-light rounded-xl p-1 font-sourceSansPro';

interface SuggestionsProps extends CommonSuggestionFormProps {
  resetFormState: () => void;
  suggestions: Array<any>;
  children: React.ReactChild;
}

interface ConversationLayoutProps {
  lastItem?: boolean;
  children: React.ReactChild;
}

interface CommentProps {
  comment: CommentType;
}

interface CommentType {
  title?: string;
  author?: string;
  scoutGroup?: string;
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

const Comment = ({ comment }: CommentProps) => (
  <div className="rounded-xl border-gray border-2 flex-grow p-2 mt-4">
    <h3>{comment.title}</h3>
    <span className="font-semibold text-blue">
      {comment.author || 'Anonyymi'}, {comment.scoutGroup || 'Ei lippukuntatietoja'}
    </span>
    <p className="text-blue">{comment.text}</p>
  </div>
);

const Suggestions = ({ suggestions, resetFormState, ...rest }: SuggestionsProps) => {
  // Query param `tip` is used to scroll to a distinct suggestion when coming from search
  const [focusedSuggestion] = useQueryParam('tip', NumberParam);
  const [expandedIndex, setExpandedIndex] = useState({});
  const [votes, setVotes] = useState<{ [key: number]: any }>({});
  const [updatedSuggestions, setUpdatedSuggestions] = useState<Array<any> | null>(null);

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
    const votes = getVotesFromLocalStorage();
    setVotes(votes);
  }, []);

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

  const getVotesFromLocalStorage = () => {
    const voted = JSON.parse(localStorage.getItem('voted')!);
    if (typeof voted === 'object' && voted !== null && voted !== undefined) {
      return voted;
    } else {
      return {};
    }
  };

  const getUserId = () => {
    const idFromLocalStorage = JSON.parse(localStorage.getItem('userId') || '');
    if (idFromLocalStorage && idFromLocalStorage != '') {
      return idFromLocalStorage;
    } else {
      let uuid = uuidv4();
      localStorage.setItem('userId', JSON.stringify(uuid));
      return uuid;
    }
  };

  const updateSingleSuggestion = (
    suggestionId: number,
    updateObject: {
      like_count: number;
    },
  ) =>
    updatedSuggestions!.map((s) => {
      if (s.id === suggestionId) {
        return { ...s, like_count: updateObject.like_count };
      }
      return s;
    });

  const handleVote = (suggestionId: number) => {
    const voted = getVotesFromLocalStorage();
    let updatedVotes;
    if (voted && voted[suggestionId] === true) {
      sendSuggestionUnlike(suggestionId, getUserId())
        .then((res) => {
          updatedVotes = {
            ...voted,
            [suggestionId]: false,
          };
          //Store votes to localstorage
          localStorage.setItem('voted', JSON.stringify(updatedVotes));
          setVotes(updatedVotes);
          const newSuggestions = updateSingleSuggestion(suggestionId, res.data);
          //Store like_count to updatedSuggestions for UI to reflect changes
          setUpdatedSuggestions(newSuggestions);
        })
        .catch(() => {
          toast.error('Tykkäyksen päivitys epäonnistui');
        });
    } else {
      sendSuggestionLike(suggestionId, getUserId())
        .then((res) => {
          updatedVotes = {
            ...voted,
            [suggestionId]: true,
          };
          localStorage.setItem('voted', JSON.stringify(updatedVotes));
          setVotes(updatedVotes);
          const newSuggestions = updateSingleSuggestion(suggestionId, res.data);
          setUpdatedSuggestions(newSuggestions);
        })
        .catch(() => {
          toast.error('Tykkäyksen lähetys epäonnistui');
        });
    }
  };

  const getVotedStyles = (suggestionId: number) => {
    if (votes && votes[suggestionId]) {
      return votedStyles;
    } else {
      return unVotedStyles;
    }
  };

  return (
    <>
      {updatedSuggestions &&
        updatedSuggestions.map((suggestion, index: number) => (
          <div key={suggestion?.id} id={suggestion?.id?.toString()}>
            <div
              className={clsx('bg-gray-light rounded-t-xl p-4 mt-3', {
                'border-hardBlue border-2 border-b-0': focusedSuggestion === suggestion?.id,
              })}
            >
              <img></img>
              <h4 className="text-blue">{suggestion!.title}</h4>
              <span>{parseDate(suggestion!.published_at)}</span>
              <span className="text-blue font-semibold ml-2 inline-block">
                {suggestion!.author !== '' ? suggestion!.author : 'Anonyymi'}
              </span>
              <p>{suggestion!.content}</p>
            </div>
            <div
              className={clsx('bg-gray p-1 overflow-auto rounded-br-xl', {
                'border-hardBlue border-2 border-t-0': focusedSuggestion === suggestion?.id,
              })}
            >
              <div className="ml-2 inline-block bg-gray-light rounded-xl p-1 font-sourceSansPro">
                <LinkIcon className="fill-current inline-block mr-1" />
                <span className="font-semibold">Linkki</span>
              </div>
              <div className="ml-2 inline-block bg-gray-light rounded-xl p-1 font-sourceSansPro">
                <AttachmentIcon className="fill-current inline-block mr-1" />
                <span className="font-semibold">Liite</span>
              </div>
              <div className="float-right">
                <span className={getVotedStyles(suggestion.id)} onClick={() => handleVote(suggestion.id)}>
                  {suggestion!.like_count} huutoa
                </span>
                <button
                  className="bg-hardBlue rounded-xl text-white p-1 font-tondu ml-2 tracking-wide"
                  onClick={() => openCommentAccordion(index)}
                >
                  Vastaa
                </button>
              </div>
            </div>
            {suggestion.comments?.length <= 1 && (
              <>
                {suggestion.comments.map((comment: Comment) => (
                  <ConversationLayout lastItem={index !== expandedIndex}>
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
                  Näytä kaikki
                </button>
              </>
            )}
            {suggestion.comments?.length > 1 && index === expandedIndex && (
              <>
                {suggestion.comments.map((comment) => (
                  <ConversationLayout>
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
