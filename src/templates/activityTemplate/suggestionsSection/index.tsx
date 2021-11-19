import React, { useState, ChangeEvent, useEffect } from 'react';
import Suggestions from './suggestions';
import NewSuggestionForm from './newSuggestionForm';
import ConfirmationModal from './confirmationModal';
import { StrapiActivity, StrapiDuration, StrapiLocation, StrapiSuggestion } from '../../../../graphql-types';
import { fetchSuggestions, fetchComments, sendNewSuggestion, sendNewReply } from '../../../services/activity';
import toast from 'react-hot-toast';
import { graphql, useStaticQuery } from 'gatsby';
import { currentLocale } from '../../../utils/helpers';
import { useTranslation } from 'react-i18next';

interface SuggestionsSectionProps {
  activityId: number;
  data: StrapiActivity;
  locale: string; 
}

export interface CommonSuggestionFormProps {
  onSubmit: (suggestionId: number) => void;
  onFieldChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
  onTermsChange: () => void;
  termsChecked: boolean;
}

export interface Error {
  text: string;
  err?: any;
}

export interface InitialSuggestion {
  title: string;
  content: string;
  links: Array<{ url: string; description: string }>;
  locations?: Array<number>;
  duration?: number;
}

export interface InitialReply {
  title: string;
  text: string;
  author: string;
}

const initialSuggestion: InitialSuggestion = {
  title: '',
  content: '',
  links: [],
  locations: undefined,
  duration: undefined,
};

const initialReply: InitialReply = {
  title: '',
  author: '',
  text: '',
};

const query = graphql`
  {
    allStrapiDuration {
      nodes {
        name
        id
        strapiId
        locale
      }
    }
    allStrapiLocation {
      nodes {
        name
        id
        strapiId
        locale
      }
    }
  }
`;

const SuggestionsSection = ({ data, activityId, locale }: SuggestionsSectionProps) => {
  const [selectedFile, setSelectedFile] = useState<null | File>(null);
  const [newSuggestion, setNewSuggestion] = useState(initialSuggestion);
  const [suggestionTermsChecked, setSuggestionTermsChecked] = useState(false);
  const [newReply, setNewReply] = useState(initialReply);
  const [suggestions, setSuggestions] = useState<Array<any> | null>(null);
  const [replyTermsChecked, setReplyTermsChecked] = useState(false);
  const [modalData, setModalData] = useState({
    modalText: '',
    sendButtonText: '',
    backButtonText: '',
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [callBack, setCallback] = useState<() => void | null>(() => {});
  const { t } = useTranslation();
  const queryResult =
    useStaticQuery<{ allStrapiDuration: { nodes: StrapiDuration[] }; allStrapiLocation: { nodes: StrapiLocation[] } }>(
      query,
    );

  useEffect(() => {
    fetchSuggestions(activityId)
      .then((res) => {
        setSuggestions(res.data);
      })
      .catch((err) => {
        console.error(err);
        toast.error(t('toteutusvinkki-haku-epaonnistui'));
      });
  }, [data]);

  const suggestionValid = (obj: InitialSuggestion) =>
    obj.title && obj.content && obj.title !== '' && obj.content !== '';

  const replyValid = (obj: InitialReply) => obj.title && obj.text && obj.title !== '' && obj.text !== '';

  const validateSuggestion = () => {
    setCallback(() => postNewSuggestion);
    setModalData({
      modalText: t('haluatko-lahettaa-toteutusvinkin'),
      sendButtonText: t('laheta-toteutusvinkki'),
      backButtonText: t('takaisin'),
    });
    if (!suggestionTermsChecked) {
      toast.error(t('hyvaksy-ehdot-ennen-lahetysta'));
    } else if (!suggestionValid(newSuggestion)) {
      toast.success(t('tarkista-etta-kentat'));
    } else {
      setModalOpen(true);
    }
  };

  const postNewSuggestion = () => {
    let toastId = toast.loading(t('lahetetaan') + '...');
    sendNewSuggestion(newSuggestion, activityId, selectedFile, locale)
      .then((res) => {
        setModalOpen(false);
        toast.dismiss(toastId);
        toast.success(t('toteutusvinkki-lahetetty-onnistui'));
      })
      .catch((err) => {
        toast.dismiss(toastId);
        setModalOpen(false);
        toast.error(t('toteutusvinkki-lahetetty-epaonnistui'));
      });
  };

  const validateReply = (suggestionId: number) => {
    setCallback(() => () => postNewReply(suggestionId, locale));
    setModalData({
      modalText: t('haluatko-lahettaa-kommentin'),
      sendButtonText: t('laheta-kommentti'),
      backButtonText: t('takaisin'),
    });
    if (!replyTermsChecked) {
      toast.error(t('hyvaksy-ehdot-ennen-lahetysta'));
    } else if (!replyValid(newReply)) {
      toast.error(t('tarkista-etta-kentat'));
    } else {
      setModalOpen(true);
    }
  };

  const postNewReply = (suggestionId: number, locale: string) => {
    let toastId = toast.loading(t('lahetetaan') + '...');
    sendNewReply(newReply, suggestionId, locale)
      .then((res) => {
        toast.dismiss(toastId);
        setModalOpen(false);
        toast.success(t('kommentti-onnistui'));
      })
      .catch((err) => {
        toast.dismiss(toastId);
        setModalOpen(false);
        toast.error(t('kommentti-epaonnistui'));
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
    setReplyTermsChecked(false);
    setNewReply(initialReply);
  };

  const onDurationChange = (duration: StrapiDuration) => {
    setNewSuggestion({
      ...newSuggestion,
      duration: duration.strapiId!,
    });
  };

  const onLocationChange = (locations: StrapiLocation[]) => {
    setNewSuggestion({
      ...newSuggestion,
      locations: locations.map((l) => l.strapiId!),
    });
  };

  return (
    <div className="mt-8">
      <h2 className="text-blue tracking-wider sm:text-4xl md:text-xxlw">{t('toteutusvinkit').toUpperCase()}</h2>
      {suggestions && (
        <Suggestions
          suggestions={suggestions}
          onSubmit={validateReply}
          resetFormState={resetFormState}
          onFieldChange={onReplyFieldChange}
          onTermsChange={onReplyTermsChange}
          termsChecked={replyTermsChecked}
          ageGroupColor={data.age_group?.color}
        />
      )}
      <NewSuggestionForm
        onSubmit={validateSuggestion}
        durations={queryResult.allStrapiDuration.nodes.filter((d) => d.locale === currentLocale())}
        locations={queryResult.allStrapiLocation.nodes.filter((l) => l.locale === currentLocale())}
        selectedFile={selectedFile}
        onFileChange={onFileChange}
        onFieldChange={onSuggestionFieldChange}
        onTermsChange={onSuggestionTermsChange}
        removeSelectedFile={() => setSelectedFile(null)}
        onLinkChange={onLinkChange}
        termsChecked={suggestionTermsChecked}
        onDurationChange={onDurationChange}
        onLocationChange={onLocationChange}
      />
      <ConfirmationModal modalOpen={modalOpen} setModalOpen={setModalOpen} callBack={callBack} modalData={modalData} />
    </div>
  );
};

export default SuggestionsSection;
