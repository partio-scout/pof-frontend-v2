import React from 'react';
import { NavProps, HeaderItem, HeaderItemFirstLevel } from '.';
import Search from '../search/headerSearchBox';
import nav from '../../images/nav.svg';
import navClose from '../../images/nav-close.svg';
import logo from '../../images/logo.svg';
import upArrow from '../../images/upArrow.svg';
import downArrow from '../../images/downArrow.svg';
import { useSearchContext } from '../../contexts/searchContext';

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
}: MobileNavProps) => {
  const { state } = useSearchContext();

  return (
    <>
      <div className="flex flex-nowrap align-stretch border-b border-lightBlue md:hidden max-w-full">
        {/* TODO translate */}
        <img
          src={hamburgerMenuOpen ? navClose : nav}
          className="w-6 inline-block border-lightBlue border-r p-2"
          onClick={toggleHamburger}
          alt="Avaa navigaatio"
        />
        {/* TODO translate */}
        {!state.searchActive && <img src={logo} className="mx-4 w-24" alt="Partio-ohjelma"/>}
        <div className="flex flex-row space-x-4 cursor-default ml-auto">
          <Search />
        </div>
      </div>
      {hamburgerMenuOpen && (
        <div className="absolute w-full h-full bg-white z-30">
          {headerItems.map((headerItem: HeaderItemFirstLevel, index: number) => (
            <div
              key={headerItem.name + index.toString()}
              className="mt-4"
              onClick={() => toggleDropDown(index)}
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
};

export default MobileNav;
