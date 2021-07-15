import React, { useEffect, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import CheckboxIcon from '../../images/checkbox-blue.svg';
import CheckboxEmptyIcon from '../../images/checkbox-empty-blue.svg';
import DownArrowIcon from '../../images/downArrow.svg';
import UpArrowIcon from '../../images/upArrow.svg';
import clsx from 'clsx';
import CoreSelect from '../coreSelect';

const Checkbox = ({ checked }: { checked: boolean }) => {
  return <img src={checked ? CheckboxIcon : CheckboxEmptyIcon} />;
};

const ListItem = ({ title, subTitle }: { title: string; subTitle?: string }) => {
  return (
    <div>
      <div className="font-bold">{title}</div>
      {subTitle && <div className="text-xs text-opacity-80">{subTitle}</div>}
    </div>
  );
};

const DropdownSelect = CoreSelect(({ title, items, toggle, toggleAll }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const allSelected = !items.some((item) => !item.checked);
  const selectedItems = items.filter((item) => item.checked);

  const getTitleText = () => {
    return (
      <span>
        <strong className="mr-1">{title || 'Valitse'}:</strong>
        {allSelected
          ? 'kaikki'
          : selectedItems.length === 0
          ? '-'
          : selectedItems.length === 1
          ? selectedItems[0].title
          : `${selectedItems.length} valittu`}
      </span>
    );
  };

  const itemClasses = (checked: boolean) =>
    clsx('p-2 flex w-full items-start cursor-pointer rounded-lg hover:bg-gray', {
      'bg-highlightBlue': checked,
    });

  return (
    <ClickAwayListener onClickAway={() => setDropdownOpen(false)}>
      <button
        className={clsx(
          'relative rounded-2xl h-12 flex px-3 items-center justify-between cursor-pointer w-full',
          dropdownOpen ? 'bg-gray' : 'bg-gray-light',
        )}
        onClick={() => {
          setDropdownOpen(!dropdownOpen);
        }}
        tabIndex={0}
      >
        {getTitleText()}
        <img src={dropdownOpen ? DownArrowIcon : UpArrowIcon} />
        {dropdownOpen && (
          <ul className="absolute top-full+1 left-0 w-full bg-gray-light z-10 rounded-xl p-2 space-y-0.5">
            <li>
              <button
                onKeyPress={(e) => e.key}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleAll();
                }}
                className={itemClasses(allSelected)}
              >
                <div className="inline-block mr-3 mt-0.5">
                  <Checkbox checked={allSelected} />
                </div>{' '}
                <ListItem title={'Kaikki'} />
              </button>
            </li>
            {items.map((item, index) => {
              const itemChecked = allSelected ? false : item.checked;
              return (
                <li key={index}>
                  <button
                    className={itemClasses(itemChecked)}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggle(item.id);
                    }}
                  >
                    <div className="inline-block mr-3 mt-0.5">
                      <Checkbox checked={itemChecked} />
                    </div>{' '}
                    <ListItem title={item.title} subTitle={item.subtitle} />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </button>
    </ClickAwayListener>
  );
});

export default DropdownSelect;
