import React from 'react';
import clsx from 'clsx';
import CoreSelect, { SelectProps } from '../coreSelect';

const PillSelect = CoreSelect<unknown, { itemBorders: boolean }>(
  ({ title, items, toggle, toggleAll, additionalProps }) => {
    const allSelected = !items.some((item) => !item.checked);

    const itemClasses = (checked: boolean) =>
      clsx('p-1 flex flex-0 mr-1 mt-1 items-start cursor-pointer rounded-lg hover:bg-gray', {
        'border-gray border': additionalProps?.itemBorders,
        'bg-highlightBlue hover:bg-highlightBlue': checked,
        'bg-gray-light': !checked,
      });

    return (
      <div className="">
        {title}
        <ul className="flex flex-wrap">
          <li
            onClick={(e) => {
              e.stopPropagation();
              toggleAll();
            }}
            className={itemClasses(allSelected)}
          >
            <div className="font-bold">Kaikki</div>
          </li>
          {items.map((item, index) => {
            const itemChecked = allSelected ? false : item.checked;
            return (
              <li
                onClick={(e) => {
                  e.stopPropagation();
                  toggle(item.id);
                }}
                className={itemClasses(itemChecked)}
                key={index}
              >
                <div className="font-bold">{item.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  },
);

export default PillSelect;
