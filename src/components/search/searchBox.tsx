import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { useTranslation } from 'react-i18next';

const SearchBox = connectSearchBox(({ currentRefinement, refine, isSearchStalled }) => {
  const { t } = useTranslation();
  return (
    <div className="w-1/2 md:w-2/3">
      <form noValidate role="search" className="relative h-10" onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          value={currentRefinement}
          placeholder="Hae tästä"
          onChange={(event) => refine(event.currentTarget.value)}
          className="w-full h-full p-1 border-4 border-blue-700 rounded-2xl"
        />
        {currentRefinement && (
          <button
            onClick={() => refine('')}
            className="absolute top-1/2 transform -translate-y-1/2 right-2"
            type="reset"
          >
            {t('empty')}
          </button>
        )}
      </form>
    </div>
  );
});

export default SearchBox;
