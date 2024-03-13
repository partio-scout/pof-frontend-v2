export const getContentPage = `
  query getContentPage($id: Int!) {
    strapiContentPage(strapiId: { eq: $id }) {
      localizations {
        locale
        id
      }
      locale
      strapiId
    }
  }
`;
