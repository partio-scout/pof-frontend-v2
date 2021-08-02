import React from 'react';
import { connectRefinementList } from 'react-instantsearch-dom';
import { RefinementListProvided } from 'react-instantsearch-core';
import PillSelect from '../pillSelect';

const PillRefinementList = connectRefinementList<
  RefinementListProvided & {
    title: string;
    getItemTitle?: (item: RefinementListProvided['items'][0]) => string | { title: string; subtitle?: string };
    getItemIcon?: (item: RefinementListProvided['items'][0]) => string | React.ReactElement;
  }
>(({ title, items, refine, canRefine, getItemTitle, getItemIcon }) => {
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
      onChange={(items) => refine(items.map((item) => item.label))}
      disallowEmpty
    />
  ) : null;
});

export default PillRefinementList;
