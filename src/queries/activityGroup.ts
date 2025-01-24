export const getActivityGroup = `
query getActivityGroup($id: String, $locale: String) {
  strapiActivityGroup(id: {eq: $id}, locale: {eq: $locale}) {
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
