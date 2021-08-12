import React from 'react';
import clsx from 'clsx';
import useCoreSelect, { SelectProps } from '../coreSelect';
import CheckIcon from '../../images/check-round.inline.svg';

// TODO: Icons for items. Probably those will come from Strapi (via Algolia).
interface PillSelectProps {
  itemBorders?: boolean;
}

const PillSelect = <T,>({ itemBorders, ...props }: PillSelectProps & SelectProps<T>): React.ReactElement => {
  const { items, title, toggle, toggleAll } = useCoreSelect<T>(props);

  const allSelected = !items.some((item) => !item.checked);

  const itemClasses = (checked: boolean) =>
    clsx('p-2 flex flex-0 mr-1 mt-1 items-center cursor-pointer rounded-xl hover:bg-gray text-blue font-bold', {
      'border-gray border': itemBorders,
      'bg-highlightBlue hover:bg-highlightBlue': checked,
      'bg-gray-light': !checked,
      'text-opacity-40': !checked,
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
            <CheckIcon
              className={clsx('fill-current text-blue mr-1', {
                'text-opacity-40': !allSelected,
              })}
            />
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
                {item.icon && (
                  <div
                    className={clsx('text-blue mr-1', {
                      'text-opacity-40': allSelected ? true : !item.checked,
                    })}
                  >
                    {item.icon}
                  </div>
                )}
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PillSelect;
