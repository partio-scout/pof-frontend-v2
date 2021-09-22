import React from 'react';
import { useLocation } from '@reach/router';
import Helmet from 'react-helmet';
import Header from '../components/header';
import BreadCrumbs from '../components/header/breadCrumbs';
import Search from '../components/search';
import { SearchContextProvider } from '../contexts/searchContext';
import useNavigation from '../hooks/navigation';
import useMetadata from '../hooks/metadata';
import { findBreadcrumbPath } from '../utils/breadcrumbs';
import toast, { Toaster } from 'react-hot-toast';

interface LayoutProps {
  children: React.ReactNode;
  showBreadCrumbs?: boolean;
  omitPadding?: boolean;
}

// TODO get locale dynamically
const currentLocale = 'fi';

const DefaultLayout = ({ children, showBreadCrumbs = false, omitPadding = false }: LayoutProps) => {
  const { pathname } = useLocation();
  const navigation = useNavigation(currentLocale);
  const metadata = useMetadata(currentLocale);

  const path = findBreadcrumbPath(pathname, navigation);

  return (
    <SearchContextProvider>
      <Toaster position="bottom-right" />
      <Helmet titleTemplate={`%s | ${metadata.title}`} defaultTitle={metadata.title}>
        <meta name="description" content={metadata.meta_description} />
        <meta property="og:locale" content="fi_FI" />
        <meta property="og:locale:alternate" content="sv_SE" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.meta_description} />
        <meta property="og:url" content={`https://partio-ohjelma.fi`} />
        <meta property="og:site_name" content={metadata.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={metadata.meta_description} />
        <meta name="twitter:title" content={metadata.title} />
      </Helmet>
      <div className="relative">
        <Header headerItems={navigation} showBreadCrumbs={showBreadCrumbs} />
        <Search />
        <div>
          {showBreadCrumbs && <BreadCrumbs trail={path} />}
          <div className={`container ${!omitPadding && 'md:px-24 2xl:px-0'} mx-auto max-w-7xl`}>{children}</div>
        </div>
      </div>
    </SearchContextProvider>
  );
};

export default DefaultLayout;
