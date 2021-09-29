import clsx from 'clsx';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import { HeaderItem } from '../../../components/header';
import UpArrow from '../../../images/upArrow.inline.svg';

interface ContentPageMobileNavProps {
  subNavigationItems: HeaderItem[];
  path: string;
}

function ContentPageMobileNav({ subNavigationItems, path }: ContentPageMobileNavProps) {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <div className="md:hidden">
      <div
        className="flex px-4 sm:px-10 h-14 bg-gray-light justify-between relative z-20 items-center cursor-pointer"
        style={{
          boxShadow: navOpen ? '0px 4px 8px #00000014' : '',
        }}
        onClick={toggleNav}
      >
        {subNavigationItems[0].name}
        <div className="flex w-8 h-full justify-center items-center ">
          <UpArrow className={clsx('fill-current transform', { 'rotate-180': navOpen })} />
        </div>
      </div>
      <ul
        className={clsx('list-none flex flex-col absolute bg-gray-light w-full z-10', { hidden: !navOpen })}
        style={{
          boxShadow: '0px 4px 8px #00000014',
        }}
      >
        {subNavigationItems?.map((subItem) => (
          <li className="px-4 sm:px-10 w-full border-b border-blue-border relative hover:bg-gray focus-within:bg-gray" key={subItem.name}>
            <Link className="h-full w-full py-3 flex items-center no-underline relative" to={subItem.url}>
              {subItem.name}
              <div
                className={clsx('h-0.5 w-full bg-hardBlue absolute bottom-0 left-1/2 transform -translate-x-1/2', {
                  hidden: subItem.url !== path,
                })}
              ></div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContentPageMobileNav;
