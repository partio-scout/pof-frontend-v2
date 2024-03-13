import clsx from 'clsx';
import { Link } from 'gatsby';
import React from 'react';
import { HeaderItem } from '../../../components/header';

interface ContentPageDesktopNavProps {
  subNavigationItems: HeaderItem[];
  path: string;
}

function ContentPageDesktopNav({ subNavigationItems, path }: ContentPageDesktopNavProps) {
  return (
    <div className="bg-gray-light hidden md:block h-auto">
      <ul className="container flex flex-row flex-wrap mx-auto max-w-full list-none justify-center px-2 sm:px-10 md:px-24 2xl:px-0">
        {subNavigationItems?.map((subItem, index) => (
          <li key={subItem.name}>
            <Link className="h-full w-full flex-col no-underline hover:bg-gray focus:bg-gray" to={subItem.url}>
              <div
                className={clsx('h-0.5 w-full border-r border-l-blue-border border-r-blue-border', {
                  'border-l': index === 0,
                })}
              ></div>
              <div
                className={clsx(
                  'justify-center items-center border-r border-l-blue-border border-r-blue-border px-5 py-3',
                  {
                    'border-l': index === 0,
                  },
                )}
              >
                <strong>{subItem.name}</strong>
              </div>
              <div
                className={clsx('h-0.5 w-full border-r border-l-blue-border border-r-blue-border', {
                  'bg-hardBlue': subItem.url === path,
                  'border-l': index === 0,
                })}
              ></div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContentPageDesktopNav;
