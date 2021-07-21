import { graphql, useStaticQuery } from 'gatsby';

export const getAllAgeGroups = `
{
  allStrapiAgeGroup {
    edges {
      node {
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
}
`;
