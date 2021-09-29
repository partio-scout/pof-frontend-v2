export const getAllAgeGroups = `
query MyQuery {
  allStrapiAgeGroup {
    nodes {
      id
      title
      strapiId
      activity_groups {
        id
        title
        age_group
      }
    }
  }
}
`;


