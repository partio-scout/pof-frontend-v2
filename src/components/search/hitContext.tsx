import React, { createContext, useContext, useReducer, Dispatch } from 'react';
import { Hit } from 'react-instantsearch-core';
import { ContentType } from '../../types/content';

interface HitsWithType {
  type: ContentType;
  hits: Hit[];
}

type HitContextState = HitsWithType[];

type Action = { type: 'set-hit-type'; payload: HitsWithType };

const HitContext = createContext<{ state: HitContextState; dispatch: Dispatch<Action> } | undefined>(undefined);

const HitContextReducer = (state: HitContextState, action: Action): HitContextState => {
  switch (action.type) {
    case 'set-hit-type':
      const existingIndex = state.findIndex((t) => t.type === action.payload.type);
      if (existingIndex >= 0) {
        state[existingIndex] = action.payload;
      } else {
        state.push(action.payload);
      }
      return state;
    default:
      return state;
  }
};

export const useHitContext = () => {
  const context = useContext(HitContext);

  if (context === undefined) throw new Error('useHitContext must be used within a HitContextProvider');

  return context;
};

export const HitContextProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const [state, dispatch] = useReducer(HitContextReducer, []);

  const outputState = {
    state,
    dispatch,
  };

  return <HitContext.Provider value={outputState}>{children}</HitContext.Provider>;
};
