export const getContentPage = `
query getContentPage($id: Int) {
    strapiContentPage(strapi_id: { eq: $id }) {
      localizations {
        id
        locale
      }
      locale
      strapi_id
    }
  }
`;
