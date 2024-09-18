export const getAllFrontPages = `
query allFrontPages {
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
