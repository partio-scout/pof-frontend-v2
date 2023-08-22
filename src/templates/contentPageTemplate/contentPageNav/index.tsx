import React from 'react';
import { HeaderItem } from '../../../components/header';
import useNavigation from '../../../hooks/navigation';
import { findBreadcrumbPath } from '../../../utils/breadcrumbs';
import { findHeaderItemByTypeAndId } from '../../../utils/navigation';
import ContentPageDesktopNav from './desktop';
import ContentPageMobileNav from './mobile';

const createSubNavigation = (id: number, path: string, navigation: HeaderItem[]): HeaderItem[] => {
  const breadcrumbs = findBreadcrumbPath(path, navigation as HeaderItem[]) as HeaderItem[];

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

const ContentPageNav = ({ pageId, path, currentLocale }: ContentPageNavProps): JSX.Element | null => {
  const navigation = useNavigation(currentLocale);

  const subNavigationItems = createSubNavigation(pageId, path, navigation as HeaderItem[]);

  // If there are only one or zero navitems, there are no subpages for the current page
  if (subNavigationItems.length < 2) return null;

  return (
    <div>
      <ContentPageDesktopNav subNavigationItems={subNavigationItems} path={path} />
      <ContentPageMobileNav subNavigationItems={subNavigationItems} path={path} />
    </div>
  );
};

export default ContentPageNav;
