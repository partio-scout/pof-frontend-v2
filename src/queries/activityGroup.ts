import { commonFragment } from "./common";

export const getActivityGroup = `
query getActivityGroup($id: Int!) {
  strapiActivityGroup(strapiId: {eq: $id}) {
    ${commonFragment}
    ingress
    content
    mandatory
    logo {
      name
      url
      size
      mime
      id
      localFile {
        publicURL
        url
      }
    }
    main_image {
      name
      url
      size
      mime
      id
      localFile {
        publicURL
        url
      }
    }
    activities {
      id
      title
    }
    activity_group_category {
      name
    }
    activitygroup_term {
      name
      plural
      singular
    }
    subactivity_term {
      name
      plural
      singular
    }
    subactivitygroup_term {
      name
      plural
      singular
    }
    age_group {
      id
      title
    }
    links {
      description
      url
    }
  }
}
`;
