import React from 'react';
import { connectRefinementList } from 'react-instantsearch-dom';
import { RefinementListProvided } from 'react-instantsearch-core';
import AccordionPillSelect from '../accordionPillSelect';

const AccoriondPillRefinementList = connectRefinementList<{ title: string } & RefinementListProvided>(
  ({ title, items,refine, canRefine }) => {
    const getItemTitle = (item: typeof items[0]) => {
      return {
        title: item.label,
      };
    };
    return canRefine ? (
      <AccordionPillSelect
        items={items.sort((a, b) => (a.label > b.label ? 1 : -1))}
        title={title}
        getItemTitle={getItemTitle}
        onChange={(items) => refine(items.map((item) => item.label))}
        disallowEmpty
      />
    ) : null;
  },
);

export default AccoriondPillRefinementList;
