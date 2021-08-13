export const getAllFrontPages = `
{
  allStrapiFrontPage {
    nodes {
      locale
      localizations {
        locale
        id
      }
      title
      strapiId
      navigation {
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
`;
