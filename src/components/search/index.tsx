import React, { useState } from 'react';
import { InstantSearch, Index, Configure } from 'react-instantsearch-dom';
import { client } from '../../utils/algolia';
import DropdownRefinementList from './dropdownRefinementList';
import Hits from '../../components/search/hits';
import DropdownSelect from '../../components/dropdownSelect';
import { ContentType } from '../../types/content';
import { useSearchContext } from '../../contexts/searchContext';
import clsx from 'clsx';
import PlusIcon from '../../images/plus-gray.svg';
import MinusIcon from '../../images/minus-white.svg';
import AdditionalFilters from './additionalFilters';

interface SearchableContentType {
  name: string;
  type: ContentType;
}

const contentTypes: SearchableContentType[] = [
  { name: 'Aktiviteetti', type: ContentType.activity },
  { name: 'Toteutusvinkki', type: ContentType.suggestion },
  // { name: 'Muut', type: ContentType.others },
];

const environment = process.env.NODE_ENV;

const Search = (): React.ReactElement | null => {
  const { state } = useSearchContext();
  const [visibleContentTypes, setVisibleContentTypes] = useState<SearchableContentType[]>(() => contentTypes);
  const [additionalFiltersVisible, setAdditionalFiltersVisible] = useState(false);

  return state.searchActive ? (
    <div className="absolute w-full h-full z-10">
      <InstantSearch searchClient={client} indexName="development_activity">
        <Configure filters="locale:fi" query={state.searchTerm} />
        <div className="flex flex-col h-full">
          <div className="bg-white border-b border-lightBlue">
            <div className="container mx-auto h-20 flex flex-row space-x-4">
              <div className="flex flex-col flex-1 pt-3">
                <DropdownSelect
                  items={contentTypes}
                  title="Sisältötyyppi"
                  onChange={(selectedItems) => setVisibleContentTypes(selectedItems)}
                  getItemTitle={(item) => item.name}
                />
              </div>
              <div className="flex flex-col flex-1 pt-3">
                <DropdownRefinementList title="Ikäryhmä" attribute="age_group.title" />
              </div>
              <div className="flex flex-col flex-1 pt-3">
                <div
                  className={clsx(
                    'flex items-center justify-center border border-gray rounded uppercase font-bold h-12 cursor-pointer',
                    additionalFiltersVisible ? 'h-16 bg-blue text-white rounded-b-none border-blue' : '',
                  )}
                  onClick={() => setAdditionalFiltersVisible(!additionalFiltersVisible)}
                >
                  <img src={additionalFiltersVisible ? MinusIcon : PlusIcon} className="mr-1" />
                  Tarkenna hakua
                </div>
              </div>
              <div className="flex flex-col flex-1 pt-3">
                <DropdownSelect
                  items={contentTypes}
                  title="Sisältötyyppi"
                  onChange={(selectedItems) => setVisibleContentTypes(selectedItems)}
                  getItemTitle={(item) => item.name}
                />
              </div>
            </div>
            <AdditionalFilters visible={additionalFiltersVisible} />
          </div>
          <div className="flex flex-col flex-1 backdrop-filter backdrop-blur-xl bg-opacity-50 bg-white">
            <div className="container mx-auto">
              {visibleContentTypes.map(({ name, type }) => (
                <div className="my-3" key={name}>
                  <Index indexName={`${environment}_${type}`}>
                    <h2 className="uppercase">{name}</h2>
                    <Hits type={type} />
                  </Index>
                </div>
              ))}
            </div>
          </div>
        </div>
      </InstantSearch>
    </div>
  ) : null;
};

export default Search;
