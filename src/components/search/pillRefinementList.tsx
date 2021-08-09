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
  const getTitle = (item: typeof items[0]) => {
    return {
      title: item.label,
    };
  };

  return canRefine ? (
    <PillSelect
      items={items.filter((x) => x.count).sort((a, b) => (a.label > b.label ? 1 : -1))}
      preselectedItems={items.filter((x) => x.isRefined)}
      title={title}
      getItemTitle={getItemTitle || getTitle}
      getItemIcon={getItemIcon}
      getItemChecked={(item) => items.every((item) => !item.isRefined) || item.isRefined}
      onToggle={(item) => (selectOne ? refine([item.label]) : refine(item.value))}
      onToggleAll={() => refine([])}
    />
  ) : null;
});

export default PillRefinementList;
