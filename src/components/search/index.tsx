import React, { useEffect, useRef, useState } from 'react';
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

const createURL = (state: SearchState) => {
  const url = `?${qs.stringify(state, { arrayFormat: 'brackets' })}`;
  return url;
};

const searchStateToUrl = ({ pathname }: WindowLocation, searchState: SearchState) =>
  searchState ? `${pathname}${createURL(searchState)}` : '';

const urlToSearchState = ({ search }: { search: string }) => {
  const state = qs.parse(decodeURI(search.slice(1))) as SearchState;

  // if (state.query === undefined) {
  //   state.query = '';
  // }
  return state;
};

const DEBOUNCE_TIME = 400;

const Search = (): React.ReactElement | null => {
  const { state, dispatch } = useSearchContext();
  const location = useLocation();
  const [debouncedSetState, setDebouncedSetState] = useState<any | null>(null);

  const onSearchStateChange = (updatedSearchState: any) => {
    clearTimeout(debouncedSetState);

    setDebouncedSetState(
      setTimeout(() => {
        history.pushState(updatedSearchState, '', searchStateToUrl(location, updatedSearchState));
      }, DEBOUNCE_TIME),
    );

    dispatch({ type: 'set-search-state', payload: updatedSearchState });
  };

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      dispatch({ type: 'set-search-active', payload: false });
    }
  };

  useEffect(() => {
    if (location.search.includes('configure')) {
      dispatch({ type: 'set-search-state', payload: urlToSearchState(location) });
      dispatch({ type: 'set-search-active', payload: true });
    } else {
      dispatch({ type: 'set-search-active', payload: false });
    }
  }, [location]);

  useEffect(() => {
    // If search deactivates
    if (!state.searchActive) {
      // and url has query parameters
      if (window.location.search) {
        // remove the query parameters from the url
        history.pushState(null, '', location.pathname);
      }
      // If search activates
    } else if (!window.location.search) {
      // add the current search state to the url
      history.pushState(state.searchState, '', searchStateToUrl(location, state.searchState));
    }
  }, [state.searchActive]);

  useEffect(() => {
    if (location.search) {
      dispatch({ type: 'set-search-state', payload: urlToSearchState(location) });
      dispatch({ type: 'set-search-active', payload: true });
    } 
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
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
        searchState={state.searchState}
        onSearchStateChange={onSearchStateChange}
        createURL={createURL}
      >
        {/* TODO: Switch locale */}
        <Configure filters="locale:fi" query={state.searchState?.configure?.query} />
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
