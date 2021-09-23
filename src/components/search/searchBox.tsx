import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

const SearchBox = connectSearchBox(({ currentRefinement, refine, isSearchStalled }) => (
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
        // TODO translate
        <button name="Tyhjennä" onClick={() => refine('')} className="absolute top-1/2 transform -translate-y-1/2 right-2" type="reset">
          Tyhjennä
        </button>
      )}
    </form>
  </div>
));

export default SearchBox