import { fetchComments } from './activity';

let suggestions: any[] = [];

export const setSuggestions = (data: any) => {
    if (data && data.id) {
        suggestions[data.id] = data;
    }
};

export const getSuggestions = async (suggestionIds: any) => {
  const result: any[] = [];
  const newSuggestionIds: Number[] = [];

  if (suggestionIds && Array.isArray(suggestionIds)) {
    suggestionIds.forEach((id: any) => {
      const suggestion = suggestions[id];
      if (suggestion) {
        result.push(suggestion);
      } else {
        newSuggestionIds.push(id);
      }
    });
  }


  if (newSuggestionIds.length > 0) {
    return await fetchComments(suggestionIds)
      .then((res) => {
        const fetchedSuggestions = res.data?.data || [];

        // map fetched suggestions to a map for quick access
        
        fetchedSuggestions.map((s: any) =>
            setSuggestions(s)
        );

        return [
          ...result,
          ...fetchedSuggestions
        ];
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return result;
};
