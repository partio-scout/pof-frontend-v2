export const getAllAgeGroups = `
query MyQuery {
  allStrapiAgeGroup {
    nodes {
      id
      title
      strapiId
      locale
      activity_groups {
        id
        title
        age_group
      }
      localizations {
        locale
        id
      }
    }
  }
}
`;
