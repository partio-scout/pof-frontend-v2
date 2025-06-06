import React, { useEffect, useState } from 'react';
import { encodeJson } from 'use-query-params';
import { useQueryParamString } from 'react-use-query-param-string';
import clsx from 'clsx';
import { InstantSearch, Index, Configure } from 'react-instantsearch-dom';
import { client } from '../../utils/algolia';
import Hits from '../../components/search/hits';
import { useSearchContext } from '../../contexts/searchContext';
import Filters from './filters';
import { currentLocale } from '../../utils/helpers';
import { useTranslation } from 'react-i18next';
import { HitContextProvider } from './hitContext';
import { ContentType } from '../../types/content';
import SetContextHits from './setContextHits';
import ContextHits from './contextHits';

const environment = process.env.GATSBY_ALGOLIA_ENVIRONMENT;

const DEBOUNCE_TIME = 400;

const Search = (): React.ReactElement | null => {
  const { state, dispatch } = useSearchContext();
  const [debouncedSetState, setDebouncedSetState] = useState<any | null>(null);
  const [searchText, setSearchText, initialized] = useQueryParamString('search', '');
  const locale = currentLocale();
  const { t } = useTranslation();
  const searchScrollPosition = 'searchscrollposition';

  const encodeSearchState = (obj: any | null | undefined) => {
    if (!obj) return undefined;
    return encodeJson(obj);
  }

  useEffect(() => {
    const scrollpos = sessionStorage.getItem(searchScrollPosition);
    if (scrollpos) {
      window.scrollTo(0, Number(scrollpos));
      sessionStorage.removeItem(searchScrollPosition);
    }
  });

  const onSearchStateChange = (updatedSearchState: any) => {
    clearTimeout(debouncedSetState);

    setDebouncedSetState(
      setTimeout(() => {
        sessionStorage.setItem(searchScrollPosition, window.scrollY.toString());
        const nextSearchText = encodeSearchState(state.searchState) as string;
        setSearchText(nextSearchText);
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
    const nextSearchText = state.searchActive ? encodeSearchState(state.searchState) as string : '';
    setSearchText(nextSearchText);
  }, [state.searchActive]);

  useEffect(() => {
    if (searchText && initialized) {
      dispatch({ type: 'set-search-state', payload: { query: searchText } });
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
        <Configure filters={`locale:${locale}`} query={state.searchState?.configure?.query} />
        <div className="flex flex-col h-full">
          <Filters />
          <div className="flex flex-col flex-1 backdrop-filter backdrop-blur-xl bg-opacity-80 bg-white">
            <div className="container mx-auto px-4 lg:px-0">
              {state.visibleContentTypes
                .filter((x) => x.type !== ContentType.others)
                .map(({ name, type }) => {
                  const transKey = type === 'activity' ? 'aktiviteetit' : 'toteutusvinkit';
                  return (
                    <div className="my-3" key={name}>
                      <Index indexName={`${environment}_${type}`}>
                        <h2 className="uppercase text-3xl my-5 sm:text-4xl md:text-xxlw">{t(transKey)}</h2>
                        <Hits type={type} />
                      </Index>
                    </div>
                  );
                })}
              {/* Other contents need to be rendered a bit differently because we need to combine multiple indices hits to one list, which isn't possible with Instant Search */}
              {state.visibleContentTypes.find((x) => x.type === ContentType.others) && (
                <HitContextProvider>
                  <Index indexName={`${environment}_${ContentType['content-page']}`}>
                    <SetContextHits type={ContentType['content-page']} />
                  </Index>
                  <Index indexName={`${environment}_${ContentType['age-group']}`}>
                    <SetContextHits type={ContentType['age-group']} />
                  </Index>
                  <Index indexName={`${environment}_${ContentType['activity-group']}`}>
                    <SetContextHits type={ContentType['activity-group']} />
                  </Index>
                  <h2 className="uppercase text-3xl my-5 sm:text-4xl md:text-xxlw">{t('muut')}</h2>
                  <ContextHits />
                </HitContextProvider>
              )}
            </div>
          </div>
        </div>
      </InstantSearch>
    </div>
  );
};

export default Search;
