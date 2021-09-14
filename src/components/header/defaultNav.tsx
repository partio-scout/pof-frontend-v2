import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { NavProps, HeaderItem, HeaderItemFirstLevel } from '.';
import Search from '../search/headerSearchBox';
import logo from '../../images/logo.svg';
import upArrow from '../../images/upArrow.svg';
import downArrow from '../../images/downArrow.svg';
import { useSearchContext } from '../../contexts/searchContext';
import './style.css';

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
          headerItems.map((headerItem: HeaderItemFirstLevel, index: number) => (
            <div
              key={headerItem.name + index.toString()}
              className="py-4"
              onKeyPress={(e) => e.key === 'Enter' && toggleDropDown(index)}
              onClick={() => toggleDropDown(index)}
              tabIndex={0}
            >
              <span className="text-blue font-tondu tracking-wider">{headerItem.name.toUpperCase()}</span>
              <img className="mx-1 my-0.5 w-8 inline-block" src={currentDropDownOpen === index ? downArrow : upArrow} />
              {headerItem.subMenu && currentDropDownOpen === index && (
                <div className="flex flex-col w-40 bg-gray-light absolute py-1 font-sourceSansPro cursor-pointer z-20 rounded-lg">
                  {headerItem.subMenu.map((subItem: HeaderItem, index: number) => (
                    <Link
                      className="text-blue no-hover-focus:border-transparent border-l-8 rounded mx-1 hover:bg-gray focus:bg-gray py-0.5 px-1"
                      to={subItem.url!}
                      key={subItem.name + index}
                      style={{ borderColor: subItem.color }}
                    >
                      <span className="block font-bold">{subItem.name}</span>
                      {subItem.ingress && <span className="block">{subItem.ingress}</span>}
                    </Link>
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
