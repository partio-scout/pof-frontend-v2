import React, { useState } from 'react';
import Search from '../search';
import logo from '../../images/logo.svg';
import upArrow from '../../images/upArrow.svg';
import downArrow from '../../images/downArrow.svg';

type HeaderItem = {
  name: string;
  subMenu: Array<HeaderItem>;
  url: string;
  ingress?: string;
};

type HeaderProps = {
  headerItems: Array<HeaderItem>;
};

const Header = ({ headerItems }: HeaderProps) => {
  const [currentDropDownOpen, setCurrentDropDownOpen] = useState(null);

  const toggleDropDown = (index: number) =>
    currentDropDownOpen === index ? setCurrentDropDownOpen(null) : setCurrentDropDownOpen(index);

  return (
    <div className="border-b border-lightBlue overflow-hidden">
      <img src={logo} className="mx-4 my-1 w-26 inline-block" />
      <div className="flex flex-row space-x-4 cursor-default float-right">
        {headerItems.map((headerItem: HeaderItem, index: number) => (
          <div className="py-4 ">
            <span
              className="text-blue font-tondu tracking-wider"
              onClick={index === 0 ? () => toggleDropDown(index) : undefined}
            >
              {headerItem.name.toUpperCase()}
            </span>
            {currentDropDownOpen === index && <img className="mx-1 my-0.5 w-4 inline-block" src={upArrow} />}
            {currentDropDownOpen !== index && <img className="mx-1 my-0.5 w-4 inline-block" src={downArrow} />}
            {headerItem.subMenu && currentDropDownOpen === index && (
              <div className="flex flex-col w-40 bg-gray-light absolute py-1 font-sourceSansPro cursor-pointer">
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
        <Search />
      </div>
    </div>
  );
};

export default Header;
