export const getAllAgeGroups = `
query {
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
      }
      localizations {
        id
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
