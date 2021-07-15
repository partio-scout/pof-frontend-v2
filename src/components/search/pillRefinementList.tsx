import React from 'react';
import { useEffect } from 'react';
import { connectRefinementList } from 'react-instantsearch-dom';
import { RefinementListProvided } from 'react-instantsearch-core';
import PillSelect from '../pillSelect';

const RefinementList = connectRefinementList<RefinementListProvided & { title: string }>(
  ({ title, items, currentRefinement, refine, canRefine }) => {
    useEffect(() => {
      console.log('Current refinement', currentRefinement);
      console.log('Items', items);
    }, [items, currentRefinement]);

    const getItemTitle = (item: typeof items[0]) => {
      return {
        title: item.label,
      };
    };
    return canRefine ? (
      <PillSelect
        items={items.sort((a, b) => (a.label > b.label ? 1 : -1))}
        title={title}
        getItemTitle={getItemTitle}
        onChange={(items) => refine(items.map((item) => item.label))}
        disallowEmpty
      />
    ) : null;
  },
);

export default RefinementList;
