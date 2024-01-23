export const getActivityGroup = `
query getActivityGroup($id: Int!) {
  strapiActivityGroup(strapi_id: {eq: $id}) {
    localizations {
        data {
          id
          #attributes {
          #  locale
          #  publishedAt
          #}
        }
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
