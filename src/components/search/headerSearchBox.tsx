import React, { useContext } from 'react';
import searchLogo from '../../images/search.svg';
import { useSearchContext } from '../../contexts/searchContext';

const Search = () => {
  const { state, dispatch } = useSearchContext();

  return (
    <div className=" flex border-l border-lightBlue self-stretch flex-row justify-start">
      {state.searchActive && (
        <input
          type="text"
          className="flex-1"
          onChange={(e) => dispatch({ type: 'set-search-term', payload: e.target.value })}
        />
      )}
      <img
        src={searchLogo}
        className="w-4 mx-auto"
        onClick={() => dispatch({ type: 'set-search-active', payload: !state.searchActive })}
      />
    </div>
  );
};

export default Search;
