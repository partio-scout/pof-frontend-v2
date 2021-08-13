export const getAllAgeGroups = `
{
  allStrapiAgeGroup {
    nodes {
      content
      activity_groups {
        activitygroup_term
        content
        title
      }
      title
    }
  }
}
`;
