import { graphql, useStaticQuery } from 'gatsby';
import { Maybe, Navigation, NavigationItems, Program_Navigation } from '../../graphql-types';
import { HeaderItem } from '../components/header';

// Since the Navigation nodes contain only content pages' navigation data,
// we need to get the program data's navigation from the created Gatsby SitePages
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
    allProgramNavigation {
      nodes {
        id
        items {
          path
          title
          subitems {
            path
            subitems {
              title
              path
            }
            title
          }
          maximum_age
          minimum_age
        }
      }
    }
  }
`;

const useNavigation = (currentLocale: string) => {
  const { allNavigation, allProgramNavigation } =
    useStaticQuery<{ allNavigation: { nodes: Navigation[] }; allProgramNavigation: { nodes: Program_Navigation[] } }>(
      navigationQuery,
    );

  const itemFilter = (item: Maybe<NavigationItems>) => item?.title && item.path;

  const contentPageNavigation: HeaderItem[] =
    allNavigation?.nodes
      .find((node) => node.id === 'strapi-navigation-' + currentLocale)
      ?.items?.filter(itemFilter)
      .map((item) => ({
        name: item?.title!,
        url: item?.path!,
        subMenu:
          item?.subitems?.filter(itemFilter).map((subitem) => ({ name: subitem?.title!, url: subitem?.path! })) || [],
      })) || [];

  // Program data navigation items are filtered by their locale here and not in the graphql query because
  // Gatsby's useStaticQuery doesn't allow the use of variables.
  const programItems: HeaderItem[] =
    allProgramNavigation.nodes
      .find((node) => node.id === 'strapi-program-navigation-' + currentLocale)
      ?.items?.sort((a, b) => ((a?.minimum_age || 0) < (b?.minimum_age || 0) ? -1 : 1))
      .map((node) => ({
        name: node?.title!.replace(/\s\(.*\)/, '') as string,
        url: node?.path || undefined,
        ingress: `${node?.minimum_age}-${node?.maximum_age} vuotiaat`,
        subMenu:
          node?.subitems
            ?.filter(itemFilter)
            .map((subitem) => ({
              name: subitem?.title!,
              url: subitem?.path!,
              subMenu: subitem?.subitems
                ?.filter(itemFilter)
                .map((subsubitem) => ({ name: subsubitem?.title!, url: subsubitem?.path! })),
            })) || [],
      })) || [];

  const programNavigation: HeaderItem[] = [
    {
      name: 'Partio-ohjelma',
      url: '/',
      subMenu: programItems,
    },
  ];

  return programNavigation.concat(contentPageNavigation);
};

export default useNavigation;
