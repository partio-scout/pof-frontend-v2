import React, { useEffect, useState } from 'react';
import { useLocation, WindowLocation } from '@reach/router';
import clsx from 'clsx';
import qs from 'qs';
import { InstantSearch, Index, Configure } from 'react-instantsearch-dom';
import { SearchState } from 'react-instantsearch-core';
import { client } from '../../utils/algolia';
import Hits from '../../components/search/hits';
import { useSearchContext } from '../../contexts/searchContext';
import Filters from './filters';

const environment = process.env.NODE_ENV;

const createURL = (state: any) => `?${qs.stringify(state)}`;

const searchStateToUrl = ({ pathname }: WindowLocation, searchState: SearchState) =>
  searchState ? `${pathname}${createURL(searchState)}` : '';

const urlToSearchState = ({ search }: { search: string }) => qs.parse(search.slice(1));

const DEBOUNCE_TIME = 400;

const Search = (): React.ReactElement | null => {
  const { state, dispatch } = useSearchContext();
  const location = useLocation();
  const [searchState, setSearchState] = useState(urlToSearchState(location));
  const [debouncedSetState, setDebouncedSetState] = useState<any | null>(null);

  const onSearchStateChange = (updatedSearchState: any) => {
    clearTimeout(debouncedSetState);

    setDebouncedSetState(
      setTimeout(() => {
        history.pushState(updatedSearchState, '', searchStateToUrl(location, updatedSearchState));
      }, DEBOUNCE_TIME),
    );

    setSearchState(updatedSearchState);
  };

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      dispatch({ type: 'set-search-active', payload: false });
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div
      className={clsx('absolute w-full h-full z-10', {
        hidden: !state.searchActive,
      })}
    >
      <InstantSearch
        searchClient={client}
        indexName="development_activity"
        // searchState={searchState}
        onSearchStateChange={onSearchStateChange}
      >
        <Configure filters="locale:fi" query={state.searchTerm} />
        <div className="flex flex-col h-full">
          <Filters />
          <div className="flex flex-col flex-1 backdrop-filter backdrop-blur-xl bg-opacity-50 bg-white">
            <div className="container mx-auto px-4 md:px-0">
              {state.visibleContentTypes.map(({ name, type }) => (
                <div className="my-3" key={name}>
                  <Index indexName={`${environment}_${type}`}>
                    <h2 className="uppercase text-3xl my-5">{name}</h2>
                    <Hits type={type} />
                  </Index>
                </div>
              ))}
            </div>
          </div>
        </div>
      </InstantSearch>
    </div>
  );
};

export default Search;
