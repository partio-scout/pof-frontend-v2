import React, { useEffect } from 'react';
import clsx from 'clsx';
import { InstantSearch, Index, Configure } from 'react-instantsearch-dom';
import { client } from '../../utils/algolia';
import Hits from '../../components/search/hits';
import { useSearchContext } from '../../contexts/searchContext';
import Filters from './filters';

const environment = process.env.NODE_ENV;

const Search = (): React.ReactElement | null => {
  const { state, dispatch } = useSearchContext();

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
      <InstantSearch searchClient={client} indexName="development_activity">
        <Configure filters="locale:fi" query={state.searchTerm} />
        <div className="flex flex-col h-full">
          <Filters />
          <div className="flex flex-col flex-1 backdrop-filter backdrop-blur-xl bg-opacity-50 bg-white">
            <div className="container mx-auto">
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
