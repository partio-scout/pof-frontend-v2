import React from 'react';

interface ConfirmationModalProps {
  modalOpen: boolean;
  callBack: () => void;
  setModalOpen: (value: boolean) => void;
  modalData: {
    text?: string;
    sendButtonText: string;
    backButtonText: string;
  };
}

const ConfirmationModal = ({ modalOpen, callBack, setModalOpen, modalData }: ConfirmationModalProps) =>
  modalOpen ? (
    <div className="z-50 fixed left-0 top-0 w-full h-full bg-white bg-opacity-40">
      <div className="bg-gray-light rounded-xl p-4 mx-auto my-auto w-80 h-80">
        <span className="text-blue tracking wide font-sourceSansPro">{modalData.text}</span>
        <button
          className="block bg-hardBlue p-2 rounded-xl font-tondu tracking-wider text-white mt-2"
          onClick={() => callBack()}
        >
          {modalData.sendButtonText}
        </button>
        <button
          className="block bg-gray p-2 rounded-xl font-tondu tracking-wider text-white mt-2"
          onClick={() => setModalOpen(false)}
        >
          {modalData.backButtonText}
        </button>
      </div>
    </div>
  ) : null;

export default ConfirmationModal;
