import React from 'react';
import { useTranslation } from 'react-i18next';

interface ConfirmationModalProps {
  modalOpen: boolean;
  postNewSuggestion: () => void;
  setModalOpen: (value: boolean) => void;
}

const ConfirmationModal = ({ modalOpen, postNewSuggestion, setModalOpen }: ConfirmationModalProps) => {
  const { t } = useTranslation();
  return modalOpen ? (
    <div className="z-50 fixed left-0 top-0 w-full h-full bg-white bg-opacity-40">
      <div className="bg-gray-light rounded-xl p-4 mx-auto my-auto w-80 h-80">
        <span className="text-blue tracking wide font-sourceSansPro">
          {t('confirm-implementation-suggestion-send')}
        </span>
        <button
          className="block bg-hardBlue p-2 rounded-xl font-tondu tracking-wider text-white mt-2"
          onClick={postNewSuggestion}
        >
          {t('send-implementation-suggestion')}
        </button>
        <button
          className="block bg-gray p-2 rounded-xl font-tondu tracking-wider text-white mt-2"
          onClick={() => setModalOpen(false)}
        >
          {t('return')}
        </button>
      </div>
    </div>
  ) : null;
};

export default ConfirmationModal;
