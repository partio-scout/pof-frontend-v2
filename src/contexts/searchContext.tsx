import React, { createContext, useContext, useState } from 'react';
import { useReducer } from 'react';

interface SearchContextState {
  searchTerm: string;
  searchActive: boolean;
}
type Action =
  | { type: 'set-search-term'; payload: SearchContextState['searchTerm'] }
  | { type: 'set-search-active'; payload: SearchContextState['searchActive'] };

type Dispatch = (action: Action) => void;

const SearchContext = createContext<{ state: SearchContextState; dispatch: Dispatch } | undefined>(undefined);

const searchReducer = (state: SearchContextState, action: Action): SearchContextState => {
  switch (action.type) {
    case 'set-search-active':
      return { ...state, searchActive: action.payload };
    case 'set-search-term':
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (context === undefined) throw new Error('useSearchContext must be used within a SearchContextProvider');

  return context;
};

export const SearchContextProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const [state, dispatch] = useReducer(searchReducer, { searchTerm: '', searchActive: false });

  const value = { state, dispatch };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};
