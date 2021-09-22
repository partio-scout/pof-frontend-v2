import React from 'react';
import { StrapiSuggestion } from '../../../graphql-types';

interface SuggestionsProps {
  suggestions: StrapiSuggestion[];
}

function Suggestions({ suggestions }: SuggestionsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5 mt-2">
      {suggestions.map((suggestion) => (
        <div className="bg-gray-light rounded-2xl p-8" key={suggestion.id}>
          <p>{suggestion.title}</p>
          <p>{suggestion.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
