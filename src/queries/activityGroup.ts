export const getActivityGroup = `
query getActivityGroup($id: Int) {
  strapiActivityGroup(strapi_id: {eq: $id}) {
    localizations {
      id
      locale
    }
    locale
    activities {
      id
      title
      locale
      strapi_id
    }
  }
}
`;
