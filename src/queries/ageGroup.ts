export const getAllAgeGroups = `
query allAgeGroups {
  allStrapiAgeGroup {
    nodes {
      id
      title
      strapi_id
      locale
      wp_guid
      activity_groups {
        id
        title
        strapi_id
        locale
        wp_guid
      }
      main_image {
        url
      }
      logo {
        url
      }
      links {
        id
      }
    }
  }
}
`;
