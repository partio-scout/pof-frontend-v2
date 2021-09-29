import React, { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import DefaultNav from './defaultNav';
import MobileNav from './mobileNav';

export interface HeaderItem extends HeaderItemFirstLevel {
  url: string;
  ingress?: string;
  id: number;
  type: string;
  color?: string;
}

export interface HeaderItemFirstLevel {
  name: string;
  url?: string;
  subMenu?: Array<HeaderItem>;
}

interface HeaderProps {
  headerItems: Array<HeaderItemFirstLevel>;
  showBreadCrumbs: boolean;
}

export interface NavProps {
  headerItems: Array<HeaderItemFirstLevel>;
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
    <ClickAwayListener onClickAway={() => setCurrentDropDownOpen(null)}>
      <div>
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
      </div>
    </ClickAwayListener>
  );
};

export default Header;
