import { graphql } from 'gatsby';

export const SitePageLocaleFragment = graphql`
  fragment SitePageLocaleFragment on SitePage {
    path
    context {
      strapi_id
      type
      locale
      wp_guid
    }
  }
`;
