import React from 'react';
import { NavProps, HeaderItem } from '.';
import Search from '../search';
import nav from '../../images/nav.svg';
import navClose from '../../images/nav-close.svg';
import logo from '../../images/logo.svg';
import upArrow from '../../images/upArrow.svg';
import downArrow from '../../images/downArrow.svg';

interface MobileNavProps extends NavProps {
  hamburgerMenuOpen: boolean;
  toggleHamburger: () => void;
}

const MobileNav = ({
  headerItems,
  currentDropDownOpen,
  hamburgerMenuOpen,
  toggleHamburger,
  toggleDropDown,
}: MobileNavProps) => (
  <>
    <div className="flex flex-nowrap align-stretch border-b border-lightBlue sm:hidden max-w-full">
      <img
        src={hamburgerMenuOpen ? navClose : nav}
        className="w-6 inline-block border-lightBlue border-r p-2"
        onClick={toggleHamburger}
      />
      <img src={logo} className="mx-4 w-24" />
      <div className="flex flex-row space-x-4 cursor-default ml-auto">
        <Search />
      </div>
    </div>
    {hamburgerMenuOpen && (
      <div className="absolute w-full h-full bg-white z-20">
        {headerItems.map((headerItem: HeaderItem, index: number) => (
          <div
            key={headerItem.name + index.toString()}
            className="mt-4"
            onClick={index === 0 ? () => toggleDropDown(index) : undefined}
          >
            <span className="text-blue font-tondu tracking-wider text-xl ml-4">{headerItem.name.toUpperCase()}</span>
            <img className="mx-1 my-0.5 w-8 inline-block" src={currentDropDownOpen === index ? downArrow : upArrow} />
            {headerItem.subMenu && currentDropDownOpen === index && (
              <div className="flex flex-col w-10/12 bg-gray-light rounded-lg py-1 mx-auto font-sourceSansPro cursor-pointer">
                {headerItem.subMenu.map((subItem: HeaderItem) => (
                  <a className="px-2 py-1 text-blue hover:bg-gray" href={subItem.url}>
                    <span className="block font-bold">{subItem.name}</span>
                    <span className="block">{subItem.ingress}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    )}
  </>
);

export default MobileNav;
