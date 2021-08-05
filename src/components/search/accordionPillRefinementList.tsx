import React, { useState } from 'react';
import { connectRefinementList } from 'react-instantsearch-dom';
import { RefinementListProvided } from 'react-instantsearch-core';
import AccordionPillSelect from '../accordionPillSelect';
import { compareRefinementItems } from './utils';

const AccoriondPillRefinementList = connectRefinementList<{ title: string } & RefinementListProvided>(
  ({ title, items, refine, canRefine }) => {
    const [oldRefinement, setOldRefinement] = useState<RefinementListProvided['items']>([]);

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
        onChange={(items) => {
          // We have to limit the refinement to only when the items have really changed, otherwise this creates a rendering loop
          if (compareRefinementItems(items, oldRefinement)) {
            setOldRefinement(items);
            refine(items.map((item) => item.label));
          }
        }}
        disallowEmpty
      />
    ) : null;
  },
);

export default AccoriondPillRefinementList;
