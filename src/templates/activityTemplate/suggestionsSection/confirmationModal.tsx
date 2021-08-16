import React from 'react';

interface ConfirmationModalProps {
  modalOpen: boolean;
  postNewSuggestion: () => void;
  setModalOpen: (value: boolean) => void;
}

const ConfirmationModal = ({ modalOpen, postNewSuggestion, setModalOpen }: ConfirmationModalProps) =>
  modalOpen ? (
    <div className="z-50 fixed left-0 top-0 w-full h-full bg-white bg-opacity-40">
      <div className="bg-gray-light rounded-xl p-4 mx-auto my-auto w-80 h-80">
        <span className="text-blue tracking wide font-sourceSansPro">
          Haluatko varmasti lähettää uuden toteutusvinkin arvioitavaksi?
        </span>
        <button
          className="block bg-hardBlue p-2 rounded-xl font-tondu tracking-wider text-white mt-2"
          onClick={postNewSuggestion}
        >
          Lähetä toteutusvinkki
        </button>
        <button
          className="block bg-gray p-2 rounded-xl font-tondu tracking-wider text-white mt-2"
          onClick={() => setModalOpen(false)}
        >
          Palaa
        </button>
      </div>
    </div>
  ) : null;

export default ConfirmationModal;
