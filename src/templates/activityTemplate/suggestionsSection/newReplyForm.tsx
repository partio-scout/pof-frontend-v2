import React from 'react';
import { CommonSuggestionFormProps, Error } from './index';
import { useTranslation } from 'react-i18next';

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
  suggestionId
}: NewReplyFormProps) => {
  const { t } = useTranslation();

  return (
    <div className="my-12">
      <div className="bg-lightBlue-light pb-2 rounded-xl overflow-auto">
        <div className="flex flex-col sm:flex-row w-full p-4 font-sourceSansPro sm:space-x-2 mt-3">
          <div className="sm:w-1/4 space-y-2">
            <input name="author" placeholder={t('nimimerkki')} onChange={onFieldChange} className={`${inputStyle}`} />
            <input
              name="scout_group"
              onChange={onFieldChange}
              placeholder={t('lippukunta')}
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
              <span className="inline-block ml-2 mb-2">
                {t('hyvaksy-ehdot-teksti')}
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:w-3/4 relative">
            <input
              name="title"
              placeholder={t('kommentin-otsikko')}
              onChange={onFieldChange}
              className={`${inputStyle} mb-2`}
            />
            <textarea
              className="w-full rounded-xl p-2 text-blue focus:outline-none h-80 flex-grow"
              placeholder={t('kommentti')}
              name="text"
              onChange={onFieldChange}
            ></textarea>
            <button
              className="absolute bottom-0 right-0 bg-hardBlue text-white p-2 rounded-br-xl font-tondu tracking-wider z-20"
              onClick={() => onSubmit(suggestionId)}
            >
              {t('laheta')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewReplyForm;
