export const getAllFrontPages = `
{
  allStrapiFrontPage {
    nodes {
      locale
      strapiId
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
