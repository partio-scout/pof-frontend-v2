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

const DropdownSelect = CoreSelect((title, items, toggle, toggleAll) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const allSelected = !items.some((item) => !item.checked);
  const selectedItems = items.filter((item) => item.checked);

  const getTitleText = () => {
    return (
      <span>
        <strong className="mr-1">{title || 'Valitse'}:</strong>
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

  return (
    <ClickAwayListener onClickAway={() => setDropdownOpen(false)}>
      <div
        className={clsx(
          'relative rounded-2xl h-12 flex px-3 items-center justify-between cursor-pointer',
          dropdownOpen ? 'bg-gray' : 'bg-gray-light',
        )}
        onClick={() => {
          setDropdownOpen(!dropdownOpen);
        }}
      >
        {getTitleText()}
        <img src={dropdownOpen ? DownArrowIcon : UpArrowIcon} />
        {dropdownOpen && (
          <ul className="absolute top-full+1 left-0 w-full bg-gray-light z-10 rounded-xl p-2 space-y-0.5">
            <li
              onClick={(e) => {
                e.stopPropagation();
                toggleAll();
              }}
              className={clsx('p-2 flex items-start cursor-pointer rounded-lg hover:bg-gray', {
                'bg-highlightBlue': allSelected,
              })}
            >
              <div className="inline-block mr-3 mt-0.5">
                <Checkbox checked={allSelected} />
              </div>{' '}
              <ListItem title={'Kaikki'} />
            </li>
            {items.map((item, index) => {
              const itemChecked = allSelected ? false : item.checked;
              return (
                <li
                  onClick={(e) => {
                    e.stopPropagation();
                    toggle(item.id);
                  }}
                  className={clsx('p-2 flex items-start cursor-pointer rounded-lg hover:bg-gray', {
                    'bg-highlightBlue': itemChecked,
                  })}
                  key={index}
                >
                  <div className="inline-block mr-3 mt-0.5">
                    <Checkbox checked={itemChecked} />
                  </div>{' '}
                  <ListItem title={item.title} subTitle={item.subtitle} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </ClickAwayListener>
  );
});

export default DropdownSelect;
