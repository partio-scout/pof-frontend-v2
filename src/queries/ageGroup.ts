export const getAllAgeGroups = `
query MyQuery {
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
        data {
          id
          attributes {
            locale
          }
        }
      }
    }
  }
}
`;
