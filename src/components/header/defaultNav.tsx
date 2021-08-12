import React from 'react';
import clsx from 'clsx';
import { NavProps, HeaderItem } from '.';
import Search from '../search/headerSearchBox';
import logo from '../../images/logo.svg';
import upArrow from '../../images/upArrow.svg';
import downArrow from '../../images/downArrow.svg';
import { useSearchContext } from '../../contexts/searchContext';

const DefaultNav = ({ headerItems, toggleDropDown, currentDropDownOpen, showBreadCrumbs }: NavProps) => {
  const { state } = useSearchContext();
  return (
    <div
      className={clsx('hidden md:flex overflow-hidden h-20', {
        'border-b border-lightBlue': !showBreadCrumbs || state.searchActive,
      })}
    >
      <img src={logo} className="mx-4 my-1 w-26" />
      <div className="flex flex-1 space-x-4 cursor-default h-full justify-end">
        {!state.searchActive &&
          headerItems.map((headerItem: HeaderItem, index: number) => (
            <div
              key={headerItem.name + index.toString()}
              className="py-4"
              onClick={index === 0 ? () => toggleDropDown(index) : undefined}
            >
              <span className="text-blue font-tondu tracking-wider">{headerItem.name.toUpperCase()}</span>
              <img className="mx-1 my-0.5 w-8 inline-block" src={currentDropDownOpen === index ? downArrow : upArrow} />
              {headerItem.subMenu && currentDropDownOpen === index && (
                <div className="flex flex-col w-40 bg-gray-light absolute py-1 font-sourceSansPro cursor-pointer z-20">
                  {headerItem.subMenu.map((subItem: HeaderItem, index: number) => (
                    <a className="px-2 py-1 text-blue" href={subItem.url} key={subItem.name + index}>
                      <span className="block font-bold">{subItem.name}</span>
                      <span className="block">{subItem.ingress}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        <Search />
      </div>
    </div>
  );
};

export default DefaultNav;
