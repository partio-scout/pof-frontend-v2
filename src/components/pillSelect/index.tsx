import React from 'react';
import clsx from 'clsx';
import CoreSelect from '../coreSelect';
import CheckIcon from '../../images/check-round.inline.svg';

// TODO: Icons for items. Probably those will come from Strapi (via Algolia).

const PillSelect = CoreSelect<unknown, { itemBorders: boolean }>(
  ({ title, items, toggle, toggleAll, additionalProps }) => {
    const allSelected = !items.some((item) => !item.checked);

    const itemClasses = (checked: boolean) =>
      clsx('p-2 flex flex-0 mr-1 mt-1 items-center cursor-pointer rounded-xl hover:bg-gray text-blue font-bold', {
        'border-gray border': additionalProps?.itemBorders,
        'bg-highlightBlue hover:bg-highlightBlue': checked,
        'bg-gray-light': !checked,
        'text-opacity-40': !checked
      });

    return (
      <div className="font-bold">
        {title}
        <ul className="flex flex-wrap">
          <li>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleAll();
              }}
              className={itemClasses(allSelected)}
            >
              <CheckIcon className={clsx('fill-current text-blue mr-1', {
                'text-opacity-40': !allSelected
              })} />
              Kaikki
            </button>
          </li>
          {items.map((item, index) => {
            const itemChecked = allSelected ? false : item.checked;
            return (
              <li key={index}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggle(item.id);
                  }}
                  className={itemClasses(itemChecked)}
                >
                  {item.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  },
);

export default PillSelect;
