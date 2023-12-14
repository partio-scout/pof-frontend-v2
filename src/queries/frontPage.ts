export const getAllFrontPages = `
{
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
