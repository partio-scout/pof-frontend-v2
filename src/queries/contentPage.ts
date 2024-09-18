export const getContentPage = `
query getContentPage($id: String) {
  strapiContentPage(id: { eq: $id }) {
    id
    locale
    strapi_id
  }
}
`;
