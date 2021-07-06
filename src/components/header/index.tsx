import React, { useState } from 'react';
import DefaultNav from './defaultNav';
import MobileNav from './mobileNav';

export interface HeaderItem {
  name: string;
  subMenu?: Array<HeaderItem>;
  url?: string;
  ingress?: string;
}

interface HeaderProps {
  headerItems: Array<HeaderItem>;
  showBreadCrumbs: boolean;
}

export interface NavProps {
  headerItems: Array<HeaderItem>;
  currentDropDownOpen: number | null;
  toggleDropDown: (index: number) => void;
  showBreadCrumbs: boolean;
}

const Header = ({ headerItems, showBreadCrumbs }: HeaderProps) => {
  const [currentDropDownOpen, setCurrentDropDownOpen] = useState<null | number>(null);
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState<boolean>(false);

  const toggleDropDown = (index: number) =>
    currentDropDownOpen === index ? setCurrentDropDownOpen(null) : setCurrentDropDownOpen(index);

  const toggleHamburger = () => setHamburgerMenuOpen(!hamburgerMenuOpen);

  return (
    <>
      <DefaultNav
        headerItems={headerItems}
        currentDropDownOpen={currentDropDownOpen}
        toggleDropDown={toggleDropDown}
        showBreadCrumbs={showBreadCrumbs}
      />
      <MobileNav
        headerItems={headerItems}
        currentDropDownOpen={currentDropDownOpen}
        toggleHamburger={toggleHamburger}
        toggleDropDown={toggleDropDown}
        hamburgerMenuOpen={hamburgerMenuOpen}
        //TODO: Change away from hardcoded when mobilenav finished
        showBreadCrumbs={false}
      />
    </>
  );
};

export default Header;
