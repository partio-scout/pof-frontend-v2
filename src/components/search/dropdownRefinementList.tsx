import React from 'react';
import { connectRefinementList } from 'react-instantsearch-dom';
import { RefinementListProvided, Hit } from 'react-instantsearch-core';
import DropdownSelect from '../dropdownSelect';

const RefinementList = connectRefinementList<
  RefinementListProvided & {
    title: string;
    sortFunction?: (a: string, b: string) => -1 | 0 | 1;
  }
>(({ title, items, refine, canRefine, sortFunction }) => {
  type ItemType = typeof items[0];

  const getItemTitle = (item: ItemType) => {
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

  const sortItems = (a: ItemType, b: ItemType) =>
    sortFunction ? sortFunction(a.label, b.label) : a.label > b.label ? 1 : -1;

  return canRefine ? (
    <DropdownSelect
      items={items.sort(sortItems)}
      title={title}
      getItemTitle={getItemTitle}
      preselectedItems={items.filter((x) => x.isRefined)}
      getItemSelected={(item) => items.every((item) => !item.isRefined) || item.isRefined}
      onToggle={(item) => refine(item.value)}
      onToggleAll={() => refine([])}
      disallowEmpty
    />
  ) : null;
});

export default RefinementList;
