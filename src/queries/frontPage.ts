export const getAllFrontPages = `
query {
  allStrapiFrontPage {
    nodes {
      locale
      strapi_id
      navigation {
        id
        title
        subnavigation {
          id
          title
          page {
            id
            title
          }
          subnavigation {
            id
            title
            page {
              id
              title
            }
          }
        }
      }
    }
  }
}
`;
