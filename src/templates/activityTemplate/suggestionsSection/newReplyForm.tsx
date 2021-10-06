import React, { ChangeEvent } from 'react';
import { CommonSuggestionFormProps, Error } from './index';
import AttachmentIcon from '../../../images/attachment.inline.svg';
import LinkIcon from '../../../images/link.inline.svg';
import UploadIcon from '../../../images/upload.inline.svg';
import DeleteIcon from '../../../images/delete.inline.svg';

const inputStyle = 'w-full block rounded-xl text-blue p-2 focus:outline-none';

interface NewReplyFormProps extends CommonSuggestionFormProps {
  suggestionReplySent: boolean;
  suggestionId: number;
  error: Error | null;
}

const NewReplyForm = ({
  onSubmit,
  onFieldChange,
  onTermsChange,
  termsChecked,
  suggestionReplySent,
  suggestionId,
  error,
}: NewReplyFormProps) => (
  <div className="my-12">
    <div className="bg-lightBlue-light pb-2 rounded-xl overflow-auto">
      <div className="flex flex-row w-full p-4 font-sourceSansPro space-x-2 mt-3">
        <div className="w-1/4 space-y-2">
          <input name="author" placeholder="Nimimerkki" onChange={onFieldChange} className={`${inputStyle}`} />
          <input
            name="scout_group"
            onChange={onFieldChange}
            placeholder="Lippukunta"
            className={`${inputStyle}`}
          ></input>
          <div className="flex">
            <input
              type="checkbox"
              id="lorem"
              name="lorem"
              className="inline-block mt-2 focus:outline-none"
              checked={termsChecked}
              onChange={onTermsChange}
            />
            <span className="inline-block ml-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id erat vitae ante tempor volutpat eu eu
              velit. Nullam libero nisi, efficitur vel finibus in, accumsan a est.
            </span>
          </div>
        </div>
        <div className="flex flex-col w-3/4 relative">
          <input
            name="title"
            placeholder="Kommentin otsikko"
            onChange={onFieldChange}
            className={`${inputStyle} mb-2`}
          />
          <textarea
            className="w-full rounded-xl p-2 text-blue focus:outline-none flex-grow"
            placeholder="Kommentti"
            name="text"
            onChange={onFieldChange}
          ></textarea>
          <button
            className="absolute bottom-0 right-0 bg-hardBlue text-white p-2 rounded-br-xl font-tondu tracking-wider z-20"
            onClick={() => onSubmit(suggestionId)}
          >
            LÄHETÄ
          </button>
        </div>
      </div>
      <div className="w-full pr-4">
        {suggestionReplySent === true && !error && (
          <div className="p-2 rounded-xl border-2 border-green-500 font-sourceSansPro w-1/2 bg-green-100 z-20 float-right">
            <span>{'Kommentin lähetys onnistui'}</span>
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

export default NewReplyForm;
