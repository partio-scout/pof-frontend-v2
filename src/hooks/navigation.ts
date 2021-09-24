import { graphql, useStaticQuery, Node } from 'gatsby';
import { useTranslation } from 'react-i18next';
import {
  Content_Navigation,
  Content_NavigationItemsSubitems,
  Maybe,
  Program_Navigation,
  Program_NavigationItems,
} from '../../graphql-types';
import { HeaderItem, HeaderItemFirstLevel } from '../components/header';

const navigationQuery = graphql`
  query Navigations {
    allContentNavigation {
      nodes {
        id
        items {
          title
          subitems {
            path
            title
            type
            id
            subitems {
              path
              title
              type
              id
            }
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
          color
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
  const { t } = useTranslation()

  const itemFilter = (requirePath: boolean) => (item: Maybe<Program_NavigationItems>): boolean => {
    if (requirePath && !item?.path) return false;

    return Boolean(item?.title);
  }

  const mapSubItems = (subItems?: Maybe<Maybe<Content_NavigationItemsSubitems>[]>): HeaderItem[] => {
    return (
      subItems?.filter(itemFilter(true)).map((subitem) => ({
        name: subitem?.title!,
        url: subitem?.path!,
        type: subitem?.type!,
        id: subitem?.id!,
        subMenu: mapSubItems(subitem?.subitems),
      })) || []
    );
  };

  const contentPageNavigation: HeaderItemFirstLevel[] =
    allContentNavigation?.nodes
      .find((node) => node.id === 'strapi-navigation-' + currentLocale)
      ?.items?.filter(itemFilter(false))
      .map((item) => ({
        name: item?.title!,
        id: item?.title!,
        subMenu: mapSubItems(item?.subitems),
      })) || [];

  // Program data navigation items are filtered by their locale here and not in the graphql query because
  // Gatsby's useStaticQuery doesn't allow the use of variables.
  const programItems: HeaderItem[] =
    allProgramNavigation.nodes
      .find((node) => node.id === 'strapi-program-navigation-' + currentLocale)
      ?.items?.sort((a, b) => ((a?.minimum_age || 0) < (b?.minimum_age || 0) ? -1 : 1))
      .map((node) => ({
        name: node?.title!.replace(/\s\(.*\)/, '') as string,
        id: node?.id!,
        url: node?.path || '',
        ingress: `${node?.minimum_age}-${node?.maximum_age} vuotiaat`,
        type: node?.type!,
        color: node?.color!,
        subMenu: mapSubItems(node?.subitems),
      })) || [];

  const programNavigation: HeaderItemFirstLevel[] = [
    {
      name: t('scouting-program'),
      subMenu: programItems,
    },
  ];

  return programNavigation.concat(contentPageNavigation);
};

export default useNavigation;
