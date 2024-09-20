export const getAllAgeGroups = `
query allAgeGroups {
  allStrapiAgeGroup {
    nodes {
      id
      title
      strapi_id
      locale
      activity_groups {
        id
        title
        strapi_id
        locale
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
