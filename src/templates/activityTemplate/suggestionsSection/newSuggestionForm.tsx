import React, { ChangeEvent, useState } from 'react';
import AttachmentIcon from '../../../images/attachment.inline.svg';
import LinkIcon from '../../../images/link.inline.svg';
import UploadIcon from '../../../images/upload.inline.svg';
import DeleteIcon from '../../../images/delete.inline.svg';
import { useTranslation } from 'react-i18next';
import { CommonSuggestionFormProps } from './index';
import DropdownSelect from '../../../components/dropdownSelect';
import { StrapiDuration, StrapiLocation } from '../../../../graphql-types';

const inputStyle = 'w-full block rounded-2xl text-blue p-2 focus:outline-none';

interface NewSuggestionFormProps extends CommonSuggestionFormProps {
  selectedFile: File | null;
  onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onLinkChange: (event: ChangeEvent<HTMLInputElement>) => void;
  removeSelectedFile: () => void;
  onDurationChange: (duration: NewSuggestionFormProps['durations'][0]) => void;
  onLocationChange: (locations: NewSuggestionFormProps['locations']) => void;
  durations: StrapiDuration[];
  locations: StrapiLocation[];
}

const NewSuggestionForm = ({
  onSubmit,
  selectedFile,
  onFileChange,
  onFieldChange,
  onLinkChange,
  removeSelectedFile,
  onTermsChange,
  onDurationChange,
  onLocationChange,
  termsChecked,
  durations,
  locations,
}: NewSuggestionFormProps) => {
  const [selectedDuration, setSelectedDuration] = useState<NewSuggestionFormProps['durations'][0]>();
  const [selectedLocations, setSelectedLocations] = useState<NewSuggestionFormProps['locations']>([]);
  const { t } = useTranslation();

  return (
    <div className="my-12">
      <h2 className="text-blue sm:text-4xl md:text-xxlw">{t('kirjoita-toteutusvinkki').toUpperCase()}</h2>
      <div className="bg-lightBlue-light pb-2 rounded-xl overflow-auto">
        <div className="flex flex-col sm:flex-row w-full p-4 font-sourceSansPro sm:space-x-2">
          <div className="w-full space-y-2 sm:w-1/4">
            <input name="author" placeholder="Nimimerkki" onChange={onFieldChange} className={`${inputStyle}`} />
            {/*         TODO: Add onChange handler when appropriate form for these fields is known */}
            <input placeholder="Lippukunta" className={`${inputStyle}`}></input>
            <DropdownSelect
              title={t('arvioitu-kesto')}
              items={durations}
              getItemTitle={(duration) => duration.name!}
              getItemId={(duration) => duration.id}
              hideAllToggle
              getItemSelected={(duration) => selectedDuration?.strapiId === duration.strapiId}
              preselectedItems={[]}
              onToggle={(duration) => {
                if (selectedDuration === duration) {
                  setSelectedDuration(undefined);
                } else {
                  setSelectedDuration(duration);
                }
                onDurationChange(duration);
              }}
              whiteBackground
            />
            <DropdownSelect
              title={t('aktiviteettipaikka')}
              items={locations}
              getItemTitle={(location) => location.name!}
              getItemId={(location) => location.id}
              hideAllToggle
              getItemSelected={(location) => selectedLocations.includes(location)}
              preselectedItems={[]}
              onToggle={(location) => {
                let newSelectedItems: NewSuggestionFormProps['locations'];
                const index = selectedLocations.findIndex((l) => l.id === location.id);
                if (index >= 0) {
                  newSelectedItems = [...selectedLocations];
                  newSelectedItems.splice(index, 1);
                } else {
                  newSelectedItems = [...selectedLocations, location];
                }
                setSelectedLocations(newSelectedItems);
                onLocationChange(newSelectedItems);
              }}
              whiteBackground
            />
            <span className="block text-blue">{t('lisaa-liitetiedosto')}</span>
            <label
              className="block bg-hardBlue text-white w-full p-1 rounded-xl font-tondu tracking-wider text-center cursor-pointer"
              htmlFor="file"
            >
              <AttachmentIcon className="fill-current inline-block text-white mr-1" />
              <span>{t('valitse-tiedosto').toUpperCase()}</span>
            </label>
            <input className="opacity-0 absolute -z-10" type="file" name="file" id="file" onChange={onFileChange} />
            {selectedFile && (
              <div>
                <span className="block font-semibold text-sm">{`${t('valittu-tiedosto')}:`}</span>
                <UploadIcon fill={'#28AAE1'} className="inline-block mr-0.5" />
                <span className="text-blue text-xs ">{selectedFile.name}</span>
                <button onClick={removeSelectedFile} className="inline-block float-right mt-1">
                  <DeleteIcon className="fill-current w-3" />
                </button>
              </div>
            )}
            <span className="block">{t('lisaa-linkki')}</span>
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
              <span className="inline-block ml-2 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id erat vitae ante tempor volutpat eu eu
                velit. Nullam libero nisi, efficitur vel finibus in, accumsan a est.
              </span>
            </div>
          </div>
          <div className="flex flex-col w-full sm:w-3/4 relative">
            <input
              name="title"
              placeholder="Toteutusvinkin otsikko"
              onChange={onFieldChange}
              className={`${inputStyle} mb-2`}
            />
            <textarea
              className="w-full rounded-xl p-2 text-blue focus:outline-none h-80 flex-grow"
              name="content"
              placeholder="Kirjoita toteutusvinkkisi tähän"
              onChange={onFieldChange}
            ></textarea>
            <button
              className="absolute bottom-0 right-0 bg-hardBlue text-white p-2 rounded-br-xl font-tondu tracking-wider z-20"
              onClick={(event) => onSubmit(0)}
            >
              {t('laheta').toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSuggestionForm;
