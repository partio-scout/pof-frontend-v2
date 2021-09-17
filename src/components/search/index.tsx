import React, { useEffect, useState } from 'react';
import { useQueryParam, encodeJson, decodeJson } from 'use-query-params';
import clsx from 'clsx';
import qs from 'qs';
import { InstantSearch, Index, Configure } from 'react-instantsearch-dom';
import { client } from '../../utils/algolia';
import Hits from '../../components/search/hits';
import { useSearchContext } from '../../contexts/searchContext';
import Filters from './filters';

const environment = process.env.GATSBY_ALGOLIA_ENVIRONMENT;

const DEBOUNCE_TIME = 400;

const NullJsonParam = {
  encode: (obj: any | null | undefined) => {
    if (!obj) return undefined;
    return encodeJson(obj);
  },
  decode: (str: string | (string | null)[] | null | undefined) => {
    if (!str) return undefined;
    return decodeJson(str);
  },
};

const Search = (): React.ReactElement | null => {
  const { state, dispatch } = useSearchContext();
  const [debouncedSetState, setDebouncedSetState] = useState<any | null>(null);

  const [searchStateQS, setSearchStateQS] = useQueryParam('search', NullJsonParam);

  const onSearchStateChange = (updatedSearchState: any) => {
    clearTimeout(debouncedSetState);

    setDebouncedSetState(
      setTimeout(() => {
        setSearchStateQS(updatedSearchState, 'replaceIn');
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
    setSearchStateQS(state.searchActive ? state.searchState : null, 'replaceIn');
  }, [state.searchActive]);

  useEffect(() => {
    if (searchStateQS) {
      dispatch({ type: 'set-search-state', payload: searchStateQS });
      dispatch({ type: 'set-search-active', payload: true });
    }
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div
      className={clsx('absolute w-full h-full z-50', {
        hidden: !state.searchActive,
      })}
    >
      <InstantSearch
        searchClient={client}
        indexName={`${environment}_activity`}
        searchState={state.searchState}
        onSearchStateChange={onSearchStateChange}
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
