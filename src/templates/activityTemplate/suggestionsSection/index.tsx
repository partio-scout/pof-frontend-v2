import React, { useState, ChangeEvent } from 'react';
import Suggestions from './suggestions';
import NewSuggestionForm from './newSuggestionForm';
import ConfirmationModal from './confirmationModal';
import { StrapiActivity } from '../../../../graphql-types';

interface SuggestionsSectionProps {
  activityId: string;
  data: StrapiActivity;
}

export interface Error {
  text: string;
  err?: any;
}

const parseActivityId = (id: string) => id.split('_')[1];

interface InitialSuggestion {
  author: string;
  text: string;
  links: Array<{ url: string; description: string }>;
}

const initialSuggestion: InitialSuggestion = {
  author: '',
  text: '',
  links: [],
};

const SuggestionsSection = ({ data, activityId }: SuggestionsSectionProps) => {
  //TODO: Change all strings to localized versions instead of harcoded ones
  const [selectedFile, setSelectedFile] = useState<null | File>(null);
  const [newSuggestion, setNewSuggestion] = useState(initialSuggestion);
  const [suggestionPostSent, setSuggestionPostSent] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const suggestionValid = () =>
    newSuggestion.author && newSuggestion.text && newSuggestion.author !== '' && newSuggestion.text !== '';

  const openConfirmationModal = () => {
    setSuggestionPostSent(false);
    setError(null);
    if (!termsChecked) {
      setError({
        text: 'Hyväksy ehdot ennen lähettämistä',
      });
    } else if (!suggestionValid()) {
      setError({
        text: 'Tarkista että kentät eivät ole tyhjiä',
      });
    } else {
      setModalOpen(true);
    }
  };

  const postNewSuggestion = () => {
    const formData = new FormData();
    formData.append('data', JSON.stringify({ ...newSuggestion }));
    selectedFile && formData.append('files.files', selectedFile!, selectedFile.name);
    fetch(`${process.env.API_URL}suggestions/${parseActivityId(activityId)}/comment`, {
      method: 'post',
      body: formData,
    })
      .then((res) => {
        setModalOpen(false);
        setSuggestionPostSent(true);
        setError(null);
      })
      .catch((err) => {
        setModalOpen(false);
        setSuggestionPostSent(false);
        setError({
          text: 'Toteutusvinkin lähettäminen epäonnistui.',
          err,
        });
      });
  };

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.files && setSelectedFile(event.target.files[0]);
  };

  const onFieldChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setNewSuggestion({
      ...newSuggestion,
      [event.target.name]: event.target.value,
    });
  };

  const onTermsChange = () => setTermsChecked(!termsChecked);

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

  return (
    <div className="mt-8">
      <h2 className="text-blue tracking-wider">TOTEUTUSVINKIT</h2>
      <Suggestions data={data} />
      <NewSuggestionForm
        onSubmit={openConfirmationModal}
        selectedFile={selectedFile}
        onFileChange={onFileChange}
        onFieldChange={onFieldChange}
        onTermsChange={onTermsChange}
        removeSelectedFile={() => setSelectedFile(null)}
        onLinkChange={onLinkChange}
        termsChecked={termsChecked}
        error={error}
        suggestionPostSent={suggestionPostSent}
      />
      <ConfirmationModal modalOpen={modalOpen} setModalOpen={setModalOpen} postNewSuggestion={postNewSuggestion} />
    </div>
  );
};

export default SuggestionsSection;
