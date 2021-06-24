import React from 'react';
import searchLogo from '../../images/search.svg';

type SearchProps = {
  searchTerm?: string;
};

const Search = ({ searchTerm }: SearchProps) => {
  return (
    <div className="w-20 flex border-l border-lightBlue self-stretch flex-row justify-start">
      <img src={searchLogo} className="w-4 mx-auto" />
    </div>
  );
};

export default Search;
