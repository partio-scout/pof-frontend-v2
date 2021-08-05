import React, { useState } from 'react';
import { connectRefinementList } from 'react-instantsearch-dom';
import { RefinementListProvided } from 'react-instantsearch-core';
import PillSelect from '../pillSelect';
import { compareRefinementItems } from './utils';

const PillRefinementList = connectRefinementList<
  RefinementListProvided & {
    title: string;
    getItemTitle?: (item: RefinementListProvided['items'][0]) => string | { title: string; subtitle?: string };
    getItemIcon?: (item: RefinementListProvided['items'][0]) => string | React.ReactElement;
    selectOne?: boolean;
  }
>(({ title, items, refine, canRefine, getItemTitle, getItemIcon, selectOne }) => {
  const [oldRefinement, setOldRefinement] = useState<RefinementListProvided['items']>([]);

  const getTitle = (item: typeof items[0]) => {
    return {
      title: item.label,
    };
  };

  
  return canRefine ? (
    <PillSelect
      items={items.sort((a, b) => (a.label > b.label ? 1 : -1))}
      title={title}
      getItemTitle={getItemTitle || getTitle}
      getItemIcon={getItemIcon}
      onChange={(items) => {
        // We have to limit the refinement to only when the items have really changed, otherwise this creates a rendering loop
        if (compareRefinementItems(items, oldRefinement)) {
          setOldRefinement(items);
          refine(items.map((item) => item.label))
        }
      }}
      disallowEmpty
      selectOne={selectOne}
    />
  ) : null;
});

export default PillRefinementList;
