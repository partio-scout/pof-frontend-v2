import React from 'react';
import SearchLogo from '../../images/search.inline.svg';
import { useSearchContext } from '../../contexts/searchContext';
import DeleteIcon from '../../images/delete.inline.svg';
import clsx from 'clsx';

const Search = () => {
  const { state, dispatch } = useSearchContext();

  return (
    <div className={clsx("flex h-full border-lightBlue self-stretch flex-row justify-start items-center", {
      'border-l': !state.searchActive
    })}>
      {state.searchActive ? (
        <>
          <div className="relative flex flex-1 items-center px-3">
            <input
              type="text"
              className="p-3 pr-8 bg-gray rounded-2xl h-12 w-80 text-xl"
              placeholder="Hakusana"
              value={state.searchState.configure?.query || ""}
              autoFocus
              onChange={(e) => dispatch({ type: 'set-search-term', payload: e.target.value })}
            />
            <SearchLogo className="fill-current text-blue absolute right-5" />
          </div>
          <button
            className="bg-blue flex h-full w-20 justify-center items-center cursor-pointer focus:gray"
            onClick={() => dispatch({ type: 'set-search-active', payload: false })}
          >
            <DeleteIcon className="fill-current text-white" />
          </button>
        </>
      ) : (
        <button
          className="flex justify-center items-center w-20 h-full cursor-pointer focus:bg-gray"
          onClick={() => dispatch({ type: 'set-search-active', payload: !state.searchActive })}
        >
          <SearchLogo className="fill-current text-blue" />
        </button>
      )}
    </div>
  );
};

export default Search;
