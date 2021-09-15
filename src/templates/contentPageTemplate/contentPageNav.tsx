import React, { useState } from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import { HeaderItem } from '../../components/header';
import useNavigation from '../../hooks/navigation';
import { findBreadcrumbPath } from '../../utils/breadcrumbs';
import { findHeaderItemByTypeAndId } from '../../utils/navigation';
import UpArrow from '../../images/upArrow.inline.svg';

const createSubNavigation = (id: number, path: string, navigation: HeaderItem[]): HeaderItem[] => {
  const breadcrumbs = findBreadcrumbPath(path, navigation as HeaderItem[]);

  let firstNavigationItem;

  // If the parent is a ContentPage, use it as the first item
  if (breadcrumbs[breadcrumbs.length - 2]?.type === 'ContentPage') {
    firstNavigationItem = findHeaderItemByTypeAndId('ContentPage', breadcrumbs[breadcrumbs.length - 2].id, navigation);
  } else {
    firstNavigationItem = findHeaderItemByTypeAndId('ContentPage', id, navigation);
  }

  if (!firstNavigationItem) return [];

  const subNavigationItems: HeaderItem[] = [firstNavigationItem, ...(firstNavigationItem?.subMenu || [])];

  return subNavigationItems;
};

interface ContentPageNavProps {
  pageId: number;
  path: string;
  currentLocale: string;
}

const ContentPageNav = ({ pageId, path, currentLocale }: ContentPageNavProps): React.ReactElement | null => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  const navigation = useNavigation(currentLocale);

  const subNavigationItems = createSubNavigation(pageId, path, navigation as HeaderItem[]);

  // If there are only one or zero navitems, there are no subpages for the current page
  if (subNavigationItems.length < 2) return null;

  return (
    <div>
      <ul className="list-none justify-start h-14 bg-lightBlue hidden md:flex">
        {subNavigationItems?.map((subItem) => (
          <li
            className={clsx('h-full px-1 border-t-4 border-b-4 border-transparent', {
              'border-b-hardBlue': subItem.url === path,
            })}
          >
            <Link className="h-full w-full flex justify-center items-center no-underline" to={subItem.url}>
              {subItem.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        <div className="flex ml-20 h-14">
          <Link className="h-full w-full flex justify-center items-center no-underline" to={subNavigationItems[0].url}>
            {subNavigationItems[0].name}
          </Link>
          <div className="flex w-20 h-full justify-center items-center" onClick={toggleNav}>
            <UpArrow className={clsx('fill-current transform', { 'rotate-180': navOpen })}/>
          </div>
        </div>
        <ul className={clsx('list-none flex flex-col', { hidden: !navOpen })}>
          {subNavigationItems?.slice(1).map((subItem) => (
            <li
              className={clsx('px-1 border-t-4 border-b-4 border-transparent h-12', {
                'border-b-hardBlue': subItem.url === path,
              })}
            >
              <Link className="h-full w-full flex justify-center items-center no-underline" to={subItem.url}>
                {subItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContentPageNav;
