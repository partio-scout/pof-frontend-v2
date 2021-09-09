import React, { useState, useEffect } from 'react';
import NewReplyForm from './newReplyForm';
import { CommonSuggestionFormProps, Error } from './index';
import { parseDate } from '../../../utils/helpers';
import { StrapiActivity } from '../../../../graphql-types';
import AttachmentIcon from '../../../images/attachment.inline.svg';
import LinkIcon from '../../../images/link.inline.svg';
import { graphql, useStaticQuery, Node } from 'gatsby';

interface SuggestionsProps extends CommonSuggestionFormProps {
  data: StrapiActivity;
  error: Error | null;
  suggestionReplySent: boolean;
}

const ConversationLayout = ({ lastItem = false, children }) => (
  <div className="flex flex-row">
    <div className="w-1/5 pl-4 pr-4">
      <div className="bg-white w-full h-1/2 border-gray border-l-2 border-b-2 "></div>
      {!lastItem && <div className="bg-white w-full h-1/2 border-gray border-l-2"></div>}
    </div>
    {children}
  </div>
);

const Comment = ({ comment }) => (
  <div className="rounded-xl border-gray border-2 flex-grow p-2 mt-4">
    <h3>{comment.title}</h3>
    <span className="font-semibold text-blue">
      {comment.name || 'Anonyymi'}, {comment.scoutGroup || 'Ei lippukuntatietoja'}
    </span>
    <p className="text-blue">{comment.text}</p>
  </div>
);

const Suggestions = ({ suggestions, resetFormState, ...rest }: SuggestionsProps) => {
  const [expandedIndex, setExpandedIndex] = useState({});

  console.log(suggestions);

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

  return (
    <>
      {suggestions.map((suggestion, index: number) => (
        <div key={suggestion?.id}>
          <div className="bg-gray-light rounded-t-xl p-4 mt-3">
            <img></img>
            <h4 className="text-blue">{suggestion!.title}</h4>
            <span>{parseDate(suggestion!.published_at)}</span>
            <span className="text-blue font-semibold ml-2 inline-block">
              {suggestion!.author !== '' ? suggestion!.author : 'Anonyymi'}
            </span>
            <p>{suggestion!.content}</p>
          </div>
          <div className="bg-gray p-1 overflow-auto rounded-br-xl">
            <div className="ml-2 inline-block bg-gray-light rounded-xl p-1 font-sourceSansPro">
              <LinkIcon className="fill-current inline-block mr-1" />
              <span className="font-semibold">Linkki</span>
            </div>
            <div className="ml-2 inline-block bg-gray-light rounded-xl p-1 font-sourceSansPro">
              <AttachmentIcon className="fill-current inline-block mr-1" />
              <span className="font-semibold">Liite</span>
            </div>
            <div className="float-right">
              <span className="bg-gray-light rounded-xl p-1 font-sourceSansPro">{suggestion!.like_count} huutoa</span>
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
              {suggestion.comments.map((comment) => (
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
