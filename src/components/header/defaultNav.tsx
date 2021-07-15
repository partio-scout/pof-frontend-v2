import React from 'react';
import { HeaderItem } from '.';
import Search from '../search/headerSearchBox';
import nav from '../../images/nav.svg';
import navClose from '../../images/nav-close.svg';
import logo from '../../images/logo.svg';
import upArrow from '../../images/upArrow.svg';
import downArrow from '../../images/downArrow.svg';

type NavProps = {
  headerItems: Array<HeaderItem>;
  toggleDropDown: (index: number) => void;
  currentDropDownOpen: number | null;
};

const DefaultNav = ({ headerItems, toggleDropDown, currentDropDownOpen }: NavProps) => (
  <div className="border-b border-lightBlue overflow-hidden hidden sm:block">
    <img src={logo} className="mx-4 my-1 w-26  inline-block" />
    <div className="flex flex-row space-x-4 cursor-default float-right">
      {headerItems.map((headerItem: HeaderItem, index: number) => (
        <div
          key={headerItem.name + index.toString()}
          className="py-4"
          onClick={index === 0 ? () => toggleDropDown(index) : undefined}
        >
          <span className="text-blue font-tondu tracking-wider">{headerItem.name.toUpperCase()}</span>
          <img className="mx-1 my-0.5 w-8 inline-block" src={currentDropDownOpen === index ? downArrow : upArrow} />
          {headerItem.subMenu && currentDropDownOpen === index && (
            <div className="flex flex-col w-40 bg-gray-light absolute py-1 font-sourceSansPro cursor-pointer">
              {headerItem.subMenu.map((subItem: HeaderItem) => (
                <a className="px-2 py-1 text-blue" href={subItem.url}>
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

export default DefaultNav;
