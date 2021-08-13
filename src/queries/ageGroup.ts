import { commonFragment, mediaFragment } from './common';

export const getAllAgeGroups = `
query MyQuery {
  allStrapiAgeGroup {
    nodes {
      ${commonFragment}
      content
      ingress
      links {
        description
        id
        url
      }
      logo {
        ${mediaFragment}
      }
      maximum_age
      minimum_age
      subactivitygroup_term {
        locale
        name
        plural
        singular
      }
      main_image {
        ${mediaFragment}
      }
      activity_groups {
        id
      }
    }
  }
}
`;


