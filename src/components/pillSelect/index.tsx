import React from 'react';
import clsx from 'clsx';
import CoreSelect, { SelectProps } from '../coreSelect';

const PillSelect = CoreSelect<unknown, { itemBorders: boolean }>(
  ({ title, items, toggle, toggleAll, additionalProps }) => {
    const allSelected = !items.some((item) => !item.checked);

    const itemClasses = (checked: boolean) =>
      clsx('p-1 flex flex-0 mr-1 mt-1 items-start cursor-pointer rounded-lg hover:bg-gray text-blue font-bold', {
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
