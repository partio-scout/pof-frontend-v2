import React, { useState } from 'react';
import DefaultNav from './defaultNav';
import MobileNav from './mobileNav';

export type HeaderItem = {
  name: string;
  subMenu?: Array<HeaderItem>;
  url?: string;
  ingress?: string;
};

type HeaderProps = {
  headerItems: Array<HeaderItem>;
};

const Header = ({ headerItems }: HeaderProps) => {
  const [currentDropDownOpen, setCurrentDropDownOpen] = useState<null | number>(null);
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState<boolean>(false);

  const toggleDropDown = (index: number) =>
    currentDropDownOpen === index ? setCurrentDropDownOpen(null) : setCurrentDropDownOpen(index);

  const toggleHamburger = () => setHamburgerMenuOpen(!hamburgerMenuOpen);

  return (
    <>
      <DefaultNav headerItems={headerItems} currentDropDownOpen={currentDropDownOpen} toggleDropDown={toggleDropDown} />
      <MobileNav
        headerItems={headerItems}
        currentDropDownOpen={currentDropDownOpen}
        toggleHamburger={toggleHamburger}
        toggleDropDown={toggleDropDown}
        hamburgerMenuOpen={hamburgerMenuOpen}
      />
    </>
  );
};

export default Header;
