export const getActivityGroup = `
query getActivityGroup($id: String) {
  strapiActivityGroup(id: {eq: $id}) {
    locale
    wp_guid
    activities {
      id
      title
      locale
      strapi_id
      wp_guid
    }
    age_group {
      id
      strapi_id
      title
      wp_guid
    }
  }
}

`;
