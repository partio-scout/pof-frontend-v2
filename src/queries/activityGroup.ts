export const getActivityGroup = `
query getActivityGroup($id: String) {
  strapiActivityGroup(id: {eq: $id}) {
    locale
    activities {
      id
      title
      locale
      strapi_id
    }
    age_group {
      id
      strapi_id
      title
    }
  }
}
`;
