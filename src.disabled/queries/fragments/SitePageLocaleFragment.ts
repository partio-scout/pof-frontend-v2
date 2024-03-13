import { graphql } from 'gatsby';

export const SitePageLocaleFragment = graphql`
  fragment SitePageLocaleFragment on SitePage {
    path
    context {
      type
      locale
      localizations
    }
  }
`;
