import React, { ChangeEvent } from 'react';
import { Error } from './index';
import AttachmentIcon from '../../../images/attachment.inline.svg';
import LinkIcon from '../../../images/link.inline.svg';
import UploadIcon from '../../../images/upload.inline.svg';
import DeleteIcon from '../../../images/delete.inline.svg';
import { useTranslation } from 'react-i18next';

const inputStyle = 'w-full block rounded-xl text-blue p-2 focus:outline-none';

interface NewSuggestionFormProps {
  onSubmit: () => void;
  selectedFile: File | null;
  onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onFieldChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
  onLinkChange: (event: ChangeEvent<HTMLInputElement>) => void;
  removeSelectedFile: () => void;
  onTermsChange: () => void;
  termsChecked: boolean;
  suggestionPostSent: boolean;
  error: Error | null;
}

const NewSuggestionForm = ({
  onSubmit,
  selectedFile,
  onFileChange,
  onFieldChange,
  onLinkChange,
  removeSelectedFile,
  onTermsChange,
  termsChecked,
  suggestionPostSent,
  error,
}: NewSuggestionFormProps) => {
  const { t } = useTranslation();
  return (
    <div className="my-12">
      <h2 className="text-blue">{t('write-implementation-suggestion').toUpperCase()}</h2>
      <div className="bg-lightBlue-light pb-2 rounded-xl overflow-auto">
        <div className="flex flex-row w-full p-4 font-sourceSansPro space-x-2 mt-3">
          <div className="w-1/4 space-y-2">
            <input name="title" placeholder="Nimimerkki" onChange={onFieldChange} className={`${inputStyle}`} />
            {/*         TODO: Add onChange handler when appropriate form for these fields is known */}
            <input placeholder="Lippukunta" className={`${inputStyle}`}></input>
            <span className="block text-blue">{t('add-attachment')}</span>
            <label
              className="block bg-hardBlue text-white w-full p-1 rounded-xl font-tondu tracking-wider text-center cursor-pointer"
              htmlFor="file"
            >
              <AttachmentIcon className="fill-current inline-block text-white mr-1" />
              <span>{t('choose-file').toUpperCase()}</span>
            </label>
            <input className="opacity-0 absolute -z-10" type="file" name="file" id="file" onChange={onFileChange} />
            {selectedFile && (
              <div>
                <span className="block font-semibold text-sm">{`${t('chosen-file')}:`}</span>
                <UploadIcon fill={'#28AAE1'} className="inline-block mr-0.5" />
                <span className="text-blue text-xs ">{selectedFile.name}</span>
                <button onClick={removeSelectedFile} className="inline-block float-right mt-1">
                  <DeleteIcon className="fill-current w-3" />
                </button>
              </div>
            )}
            <span className="block">{t('add-link')}</span>
            <div className="relative">
              <LinkIcon className="fill-current absolute top-3 left-3" />
              <input placeholder="url" className={`${inputStyle} pl-6`} onChange={onLinkChange} />
            </div>
            <div className="flex">
              <input
                type="checkbox"
                id="lorem"
                name="lorem"
                className="inline-block mt-2 focus:outline-none"
                checked={termsChecked}
                onChange={onTermsChange}
              />
              <span className="inline-block ml-2">
                {/* TODO: Remove */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id erat vitae ante tempor volutpat eu eu
                velit. Nullam libero nisi, efficitur vel finibus in, accumsan a est.
              </span>
            </div>
          </div>
          <div className="w-3/4 relative">
            <textarea
              className="w-full h-full rounded-xl p-2 text-blue focus:outline-none"
              name="content"
              onChange={onFieldChange}
            ></textarea>
            <button
              className="absolute bottom-0 right-0 bg-hardBlue text-white p-2 rounded-br-xl font-tondu tracking-wider z-20"
              onClick={onSubmit}
            >
              {t('send').toUpperCase()}
            </button>
          </div>
        </div>
        <div className="w-full pr-4">
          {suggestionPostSent && !error && (
            <div className="p-2 rounded-xl border-2 border-green-500 font-sourceSansPro w-1/2 bg-green-100 z-20 float-right">
              <span>{'Toteutusvinkin lähetys onnistui'}</span>
            </div>
          )}
          {error && (
            <div className="p-2 rounded-xl border-2 border-red-500 font-sourceSansPro w-1/2 bg-red-100 z-20 float-right">
              <span className="text-red-500 font-">{error.text}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewSuggestionForm;
