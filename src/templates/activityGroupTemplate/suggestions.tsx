import React from 'react';
import { SuggestionWithUrl } from '../../components/suggestionCard';
import SuggestionCard from '../../components/suggestionCard';

interface SuggestionsProps {
  suggestions: SuggestionWithUrl[];
}

function Suggestions({ suggestions }: SuggestionsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5 mt-2">
      {suggestions.map((suggestion) => (
        <SuggestionCard suggestion={suggestion} link={suggestion.url} key={suggestion.strapiId} />
      ))}
    </div>
  );
}

export default Suggestions;
