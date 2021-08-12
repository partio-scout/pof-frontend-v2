export const getFrontPage = `
{
  strapiFrontPage {
    title
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
`;
