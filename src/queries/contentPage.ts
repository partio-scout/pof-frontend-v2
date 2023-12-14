export const getContentPage = `
  query getContentPage($title: String!) {
    strapiContentPage(title: { eq: $title }) {
      #localizations {
      #  data {
      #    id
      #   attributes {
      #      locale
      #   }
      #  }
      #}
      locale
      strapi_id
    }
  }
`;
