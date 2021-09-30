export const getAllFrontPages = `
{
  allStrapiFrontPage {
    nodes {
      locale
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
