import React from 'react';
import { useLocation } from '@reach/router';
import Header from '../components/header';
import BreadCrumbs from '../components/header/breadCrumbs';
import Search from '../components/search';
import { SearchContextProvider } from '../contexts/searchContext';
import useNavigation from '../hooks/navigation';
import { findBreadcrumbPath } from '../utils/breadcrumbs';

interface LayoutProps {
  children: React.ReactNode;
  showBreadCrumbs?: boolean;
}

// TODO get locale dynamically
const currentLocale = 'fi';

const DefaultLayout = ({ children, showBreadCrumbs = false }: LayoutProps) => {
  const { pathname } = useLocation();
  const navigation = useNavigation(currentLocale);

  const path = findBreadcrumbPath(pathname, navigation);

  return (
    <SearchContextProvider>
      <div className="relative">
        <Header headerItems={navigation} showBreadCrumbs={showBreadCrumbs} />
        <Search />
        <div>
          {showBreadCrumbs && <BreadCrumbs trail={path} />}
          <div className="container md:px-24 2xl:px-0 mx-auto max-w-7xl">{children}</div>
        </div>
      </div>
    </SearchContextProvider>
  );
};

export default DefaultLayout;
