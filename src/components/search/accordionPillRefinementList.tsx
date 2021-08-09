import React, { useState } from 'react';
import { connectRefinementList } from 'react-instantsearch-dom';
import { RefinementListProvided } from 'react-instantsearch-core';
import AccordionPillSelect from '../accordionPillSelect';
import { compareRefinementItems } from './utils';

const AccoriondPillRefinementList = connectRefinementList<
  { title: string; selectOne?: boolean } & RefinementListProvided
>(({ title, selectOne, items, refine, canRefine }) => {
  const getItemTitle = (item: typeof items[0]) => {
    return {
      title: item.label,
    };
  };

  return canRefine ? (
    <AccordionPillSelect
      items={items.sort((a, b) => (a.label > b.label ? 1 : -1))}
      preselectedItems={items.filter((x) => x.isRefined)}
      title={title}
      getItemTitle={getItemTitle}
      getItemChecked={(item) => items.every((item) => !item.isRefined) || item.isRefined}
      onToggle={(item) => (selectOne ? refine([item.label]) : refine(item.value))}
      onToggleAll={() => refine([])}
      disallowEmpty
    />
  ) : null;
});

export default AccoriondPillRefinementList;
