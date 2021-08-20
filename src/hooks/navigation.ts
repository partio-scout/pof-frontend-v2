import { graphql, useStaticQuery } from 'gatsby';
import { Content_Navigation, Maybe, Program_Navigation, Program_NavigationItems } from '../../graphql-types';
import { HeaderItem } from '../components/header';

// Since the Navigation nodes contain only content pages' navigation data,
// we need to get the program data's navigation from the created Gatsby SitePages
const navigationQuery = graphql`
  query Navigations {
    allContentNavigation {
      nodes {
        id
        items {
          id
          path
          title
          type
          subitems {
            id
            path
            title
            type
          }
        }
      }
    }
    allProgramNavigation {
      nodes {
        id
        items {
          id
          maximum_age
          minimum_age
          path
          title
          type
          subitems {
            id
            path
            title
            type
            subitems {
              id
              path
              title
              type
            }
          }
        }
      }
    }
  }
`;

const useNavigation = (currentLocale: string) => {
  const { allContentNavigation, allProgramNavigation } = useStaticQuery<{
    allContentNavigation: { nodes: Content_Navigation[] };
    allProgramNavigation: { nodes: Program_Navigation[] };
  }>(navigationQuery);

  const itemFilter = (item: Maybe<Program_NavigationItems>) => item?.title && item.path;

  const contentPageNavigation: HeaderItem[] =
    allContentNavigation?.nodes
      .find((node) => node.id === 'strapi-navigation-' + currentLocale)
      ?.items?.filter(itemFilter)
      .map((item) => ({
        name: item?.title!,
        url: item?.path!,
        type: item?.type!,
        id: item?.id!,
        subMenu:
          item?.subitems?.filter(itemFilter).map((subitem) => ({
            name: subitem?.title!,
            url: subitem?.path!,
            type: subitem?.type!,
            id: subitem?.id!,
          })) || [],
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
        type: node?.type!,
        id: node?.id!,
        subMenu:
          node?.subitems?.filter(itemFilter).map((subitem) => ({
            name: subitem?.title!,
            url: subitem?.path!,
            type: subitem?.type!,
            id: subitem?.id!,
            subMenu: subitem?.subitems
              ?.filter(itemFilter)
              .map((subsubitem) => ({
                name: subsubitem?.title!,
                url: subsubitem?.path!,
                type: subsubitem?.type!,
                id: subsubitem?.id!,
              })),
          })) || [],
      })) || [];

  const programNavigation: HeaderItem[] = [
    {
      name: 'Partio-ohjelma',
      url: '/',
      subMenu: programItems,
      type: 'Root',
      id: 0,
    },
  ];

  return programNavigation.concat(contentPageNavigation);
};

export default useNavigation;
