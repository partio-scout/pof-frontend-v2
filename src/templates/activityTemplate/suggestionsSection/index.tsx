import React, { useState, ChangeEvent, useEffect } from 'react';
import Suggestions from './suggestions';
import NewSuggestionForm from './newSuggestionForm';
import ConfirmationModal from './confirmationModal';
import { StrapiActivity } from '../../../../graphql-types';
import { sendNewSuggestion, sendNewReply } from '../../../services/activity';
import suggestions from './suggestions';

interface SuggestionsSectionProps {
  activityId: number;
  data: StrapiActivity;
}

export interface CommonSuggestionFormProps {
  onSubmit: (suggestionId: number | null) => void;
  onFieldChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
  onTermsChange: () => void;
  termsChecked: boolean;
}

export interface Error {
  text: string;
  err?: any;
}

interface InitialSuggestion {
  title: string;
  content: string;
  links: Array<{ url: string; description: string }>;
}

interface InitialReply {
  title: string;
  text: string;
  author: string;
}

const initialSuggestion: InitialSuggestion = {
  title: '',
  content: '',
  links: [],
};

const initialReply: InitialReply = {
  title: '',
  author: '',
  text: '',
};

const mockComments = [
  {
    title: 'Toteutusvinkin vastaus',
    text: 'Nullam libero nisi, efficitur vel finibus in, accumsan a est. Morbi ut magna hendrerit, interdum orci porta, placerat sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id erat vitae ante tempor volutpat eu eu velit. Nullam libero nisi, efficitur vel finibus in, accumsan a est. Morbi ut magna hendrerit, interdum orci porta, placerat sapien.',
    name: 'Tyyppi',
    scoutGroup: 'Lippukunta',
  },
  {
    title: 'Toteutusvinkin vastaus 2',
    text: 'Nullam libero nisi, efficitur vel finibus in, accumsan a est. Morbi ut magna hendrerit, interdum orci porta, placerat sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id erat vitae ante tempor volutpat eu eu velit. Nullam libero nisi, efficitur vel finibus in, accumsan a est. Morbi ut magna hendrerit, interdum orci porta, placerat sapien.',
  },
  {
    title: 'Toteutusvinkin vastaus 3',
    text: 'Nullam libero nisi, efficitur vel finibus in, accumsan a est. Morbi ut magna hendrerit, interdum orci porta, placerat sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id erat vitae ante tempor volutpat eu eu velit. Nullam libero nisi, efficitur vel finibus in, accumsan a est. Morbi ut magna hendrerit, interdum orci porta, placerat sapien.',
  },
];

const SuggestionsSection = ({ data, activityId }: SuggestionsSectionProps) => {
  const [selectedFile, setSelectedFile] = useState<null | File>(null);
  const [newSuggestion, setNewSuggestion] = useState(initialSuggestion);
  const [suggestionPostSent, setSuggestionPostSent] = useState(false);
  const [suggestionTermsChecked, setSuggestionTermsChecked] = useState(false);
  const [newSuggestionError, setNewSuggestionError] = useState<Error | null>(null);
  const [newReplyError, setNewReplyError] = useState<Error | null>(null);
  const [newReply, setNewReply] = useState(initialReply);
  const [suggestions, setSuggestions] = useState(null);
  const [replyTermsChecked, setReplyTermsChecked] = useState(false);
  const [suggestionReplySent, setSuggestionReplySent] = useState(false);
  const [modalData, setModalData] = useState({
    modalText: '',
    sendButtonText: '',
    backButtonText: '',
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [callBack, setCallback] = useState<() => void | null>(null);

  useEffect(() => {
    console.log(data);
    const suggestionsWithComments = data.suggestions.map((s, i) =>
      i < 1
        ? (s = {
            ...s,
            comments: mockComments,
          })
        : (s = {
            ...s,
            comments: [mockComments[0]],
          }),
    );
    setSuggestions(suggestionsWithComments);
  }, data);

  const suggestionValid = (obj: InitialSuggestion) =>
    obj.title && obj.content && obj.title !== '' && obj.content !== '';

  const replyValid = (obj: InitialReply) => obj.title && obj.text && obj.title !== '' && obj.text !== '';

  const validateSuggestion = () => {
    setCallback(() => postNewSuggestion);
    setModalData({
      modalText: 'Haluatko lähettää uuden toteutusvinkin?',
      sendButtonText: 'Lähetä toteutusvinkki',
      backButtonText: 'Takaisin',
    });
    setSuggestionPostSent(false);
    setNewSuggestionError(null);
    if (!suggestionTermsChecked) {
      setNewSuggestionError({
        text: 'Hyväksy ehdot ennen lähettämistä',
      });
    } else if (!suggestionValid(newSuggestion)) {
      setNewSuggestionError({
        text: 'Tarkista että kentät eivät ole tyhjiä',
      });
    } else {
      setModalOpen(true);
    }
  };

  const postNewSuggestion = () => {
    sendNewSuggestion(newSuggestion, activityId)
      .then((res) => {
        setModalOpen(false);
        setSuggestionPostSent(true);
        setNewSuggestionError(null);
      })
      .catch((err) => {
        setModalOpen(false);
        setSuggestionPostSent(false);
        setNewSuggestionError({
          text: 'Vastauksen lähettäminen epäonnistui.',
          err,
        });
      });
  };

  const validateReply = (suggestionId) => {
    setCallback(
      () =>
        (id = suggestionId) =>
          postNewReply(suggestionId),
    );
    setModalData({
      modalText: 'Haluatko lähettää uuden kommentin?',
      sendButtonText: 'Lähetä kommentti',
      backButtonText: 'Takaisin',
    });
    setSuggestionReplySent(false);
    setNewReplyError(null);
    if (!replyTermsChecked) {
      setNewReplyError({
        text: 'Hyväksy ehdot ennen lähettämistä',
      });
    } else if (!replyValid(newReply)) {
      setNewReplyError({
        text: 'Tarkista että kentät eivät ole tyhjiä',
      });
    } else {
      setModalOpen(true);
    }
  };

  const postNewReply = (suggestionId: number) => {
    console.log('nr', newReply, suggestionId);
    sendNewReply(newReply, suggestionId)
      .then((res) => {
        setModalOpen(false);
        setSuggestionReplySent(true);
        setNewReplyError(null);
      })
      .catch((err) => {
        setModalOpen(false);
        setSuggestionReplySent(false);
        setNewReplyError({
          text: 'Kommentin lähettäminen epäonnistui.',
          err,
        });
      });
  };

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.files && setSelectedFile(event.target.files[0]);
  };

  const onReplyFieldChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setNewReply({
      ...newReply,
      [event.target.name]: event.target.value,
    });
  };
  const onSuggestionFieldChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setNewSuggestion({
      ...newSuggestion,
      [event.target.name]: event.target.value,
    });
  };

  const onSuggestionTermsChange = () => setSuggestionTermsChecked(!suggestionTermsChecked);

  const onReplyTermsChange = () => setReplyTermsChecked(!replyTermsChecked);

  const onLinkChange = (event: ChangeEvent<HTMLInputElement>) =>
    setNewSuggestion({
      ...newSuggestion,
      links: [
        {
          description: '',
          url: event.target.value,
        },
      ],
    });

  const resetFormState = () => {
    setSuggestionReplySent(false);
    setNewReplyError(null);
    setReplyTermsChecked(false);
    setNewReply(initialReply);
  };

  return (
    <div className="mt-8">
      <h2 className="text-blue tracking-wider">TOTEUTUSVINKIT</h2>
      {suggestions && (
        <Suggestions
          suggestions={suggestions}
          onSubmit={validateReply}
          resetFormState={resetFormState}
          onFieldChange={onReplyFieldChange}
          onTermsChange={onReplyTermsChange}
          termsChecked={replyTermsChecked}
          error={newReplyError}
          suggestionReplySent={suggestionReplySent}
        />
      )}
      <NewSuggestionForm
        onSubmit={validateSuggestion}
        selectedFile={selectedFile}
        onFileChange={onFileChange}
        onFieldChange={onSuggestionFieldChange}
        onTermsChange={onSuggestionTermsChange}
        removeSelectedFile={() => setSelectedFile(null)}
        onLinkChange={onLinkChange}
        termsChecked={suggestionTermsChecked}
        error={newSuggestionError}
        suggestionPostSent={suggestionPostSent}
      />
      <ConfirmationModal modalOpen={modalOpen} setModalOpen={setModalOpen} callBack={callBack} modalData={modalData} />
    </div>
  );
};

export default SuggestionsSection;
