import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import Header, { HeaderItem } from '../components/header';
import BreadCrumbs, { BreadCrumb } from '../components/header/breadCrumbs';
import Search from '../components/search';
import { SearchContextProvider } from '../contexts/searchContext';
import { Maybe, Navigation, NavigationItems, Program_Navigation } from '../../graphql-types';
import useNavigation from '../hooks/navigation';

interface LayoutProps {
  children: React.ReactNode;
  showBreadCrumbs?: boolean;
}



const mockBCTrail = [
  { name: 'Partio-ohjelma', url: '/' },
  { name: 'Sudenpennut', url: '/sudenpennut' },
  { name: 'Suhde itseen', url: '/' },
  { name: 'Iltaohjelma', url: '/' },
];

const currentLocale = 'fi';

const checkHeaderItemForPath = (path: string, headerItem: HeaderItem): HeaderItem[] | null => {
  if (headerItem.url === path) return [headerItem];

  for (const item of headerItem.subMenu || []) {
    const match = checkHeaderItemForPath(path, item);
    if (match !== null) return [headerItem, ...match];
  }
  return null;
};

const findPath = (path: string, navigation: HeaderItem[]): BreadCrumb[] => {
  let foundPath: HeaderItem[] = [];
  for (const item of navigation) {
    const match = checkHeaderItemForPath(path, item);
    if (match !== null) {
      foundPath = match;
      break;
    }
  }

  return foundPath.map((item) => ({
    name: item.name!,
    url: item.url!,
  }));
};

const DefaultLayout = ({ children, showBreadCrumbs = false }: LayoutProps) => {
  const { pathname } = useLocation();
  const navigation = useNavigation(currentLocale);

  const path = findPath(pathname, navigation);
  console.log(path);

  return (
    <SearchContextProvider>
      <div className="relative">
        <Header headerItems={navigation} showBreadCrumbs={showBreadCrumbs} />
        <Search />
        <div>
          {showBreadCrumbs && <BreadCrumbs trail={mockBCTrail} />}
          <div className="container md:px-24 2xl:px-0 mx-auto max-w-7xl">{children}</div>
        </div>
      </div>
    </SearchContextProvider>
  );
};

export default DefaultLayout;
