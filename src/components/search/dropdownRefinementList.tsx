import React from 'react';
import { connectRefinementList } from 'react-instantsearch-dom';
import { RefinementListProvided } from 'react-instantsearch-core';
import DropdownSelect from '../dropdownSelect';

const RefinementList = connectRefinementList<RefinementListProvided & { title: string }>(
  ({ title, items, refine, canRefine }) => {
    const getItemTitle = (item: typeof items[0]) => {
      const match = /^(.+?)\s?(\((.*)\))?$/.exec(item.label);

      if (match !== null) {
        return {
          title: match[1],
          subtitle: match[3],
        };
      }

      return {
        title: item.label,
      };
    };
    return canRefine ? (
      <DropdownSelect
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
