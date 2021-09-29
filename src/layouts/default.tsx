import React from 'react';
import { useLocation } from '@reach/router';
import Helmet from 'react-helmet';
import Header, { HeaderItem } from '../components/header';
import BreadCrumbs from '../components/header/breadCrumbs';
import Search from '../components/search';
import { SearchContextProvider } from '../contexts/searchContext';
import { LogoContextProvider } from '../contexts/logoContext';
import useNavigation from '../hooks/navigation';
import useMetadata from '../hooks/metadata';
import { findBreadcrumbPath } from '../utils/breadcrumbs';
import { Toaster } from 'react-hot-toast';
import Container from '../components/container';
import Footer from '../components/footer';

interface LayoutProps {
  children: React.ReactNode;
  showBreadCrumbs?: boolean;
  omitPadding?: boolean;
  pageHeader?: React.ReactElement;
}

// TODO get locale dynamically
const currentLocale = 'fi';

const DefaultLayout = ({ children, showBreadCrumbs = false, omitPadding = false, pageHeader }: LayoutProps) => {
  const { pathname } = useLocation();
  const navigation = useNavigation(currentLocale);
  const metadata = useMetadata(currentLocale);

  const path = findBreadcrumbPath(pathname, navigation as HeaderItem[]);

  return (
    <SearchContextProvider>
      <LogoContextProvider>
        <Toaster position="bottom-right" />
        <Helmet titleTemplate={`%s | ${metadata.title}`} defaultTitle={metadata.title}>
          <script
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid={process.env.GATSBY_COOKIEBOT_ID}
            data-blockingmode="auto"
            type="text/javascript"
          ></script>
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
          <script
            id="CookieDeclaration"
            src={`https://consent.cookiebot.com/${process.env.GATSBY_COOKIEBOT_ID}/cd.js`}
            type="text/javascript"
            async
          ></script>
          <Header headerItems={navigation} showBreadCrumbs={showBreadCrumbs} />
          <Search />
          <div>
            {showBreadCrumbs && <BreadCrumbs trail={path} />}
            {pageHeader && pageHeader}
            <Container omitPadding={omitPadding}>{children}</Container>
          </div>
          <Footer />
        </div>
      </LogoContextProvider>
    </SearchContextProvider>
  );
};

export default DefaultLayout;
