import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import Header, { HeaderItem } from '../components/header';
import BreadCrumbs from '../components/header/breadCrumbs';
import Search from '../components/search';
import { SearchContextProvider } from '../contexts/searchContext';
import { Maybe, Navigation, NavigationItems, StrapiAgeGroup, SitePage } from '../../graphql-types';

interface LayoutProps {
  children: React.ReactNode;
  showBreadCrumbs?: boolean;
}

const navigationQuery = graphql`
  query Navigations {
    allNavigation {
    nodes {
      id
      items {
        path
        title
        subitems {
          path
          title
        }
      }
    }
  }
  allSitePage(filter: { context: {type: {eq: "ageGroup"}, }}) {
    nodes {
      path
      context {
        type
        data {
          title
          locale
          minimum_age
          maximum_age
        }
      }
    }
  }
  }
`;


const mockBCTrail = [
  { name: 'Partio-ohjelma', url: '/' },
  { name: 'Sudenpennut', url: '/sudenpennut' },
  { name: 'Suhde itseen', url: '/' },
  { name: 'Iltaohjelma', url: '/' },
];

const currentLocale = 'fi';

const DefaultLayout = ({ children, showBreadCrumbs = false }: LayoutProps) => {
  const { allNavigation, allSitePage } =
    useStaticQuery<{ allNavigation: { nodes: Navigation[] }; allSitePage: { nodes: SitePage[] } }>(navigationQuery);

  const { pathname } = useLocation();


  const itemFilter = (item: Maybe<NavigationItems>) => item?.title && item.path;

  const navigationItems: HeaderItem[] =
    allNavigation?.nodes
      .find((node) => node.id === 'strapi-navigation-' + currentLocale)
      ?.items?.filter(itemFilter)
      .map((item) => ({
        name: item?.title!,
        url: item?.path!,
        subMenu:
          item?.subitems?.filter(itemFilter).map((subitem) => ({ name: subitem?.title!, url: subitem?.path! })) || [],
      })) || [];

  const programItems: HeaderItem[] = allSitePage.nodes
    .filter((node) => node.context?.data?.locale === currentLocale && node.context.data.title)
    .sort((a, b) => (a.context?.data?.minimum_age || 0) < (b.context?.data?.maximum_age || 0) ? -1 : 1)
    .map((node) => ({
      name: node.context?.data?.title!.replace(/\s\(.*\)/, '') as string,
      url: node.path,
      ingress: `${node.context?.data?.minimum_age}-${node.context?.data?.maximum_age} vuotiaat`,
    }));

  const programNavigation: HeaderItem[] = [{
    name: 'Partio-ohjelma',
    url: '/',
    subMenu: programItems,
  }]

  const combinedHeaderItems = programNavigation.concat(navigationItems);

  return (
    <SearchContextProvider>
      <div className="relative">
        <Header headerItems={combinedHeaderItems} showBreadCrumbs={showBreadCrumbs} />
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
