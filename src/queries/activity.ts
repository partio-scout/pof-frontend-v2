import { mediaFragment, fileFragment, commonFragment } from './common';

export const getActivity = `
query getActivity($id: Int!) {
  strapiActivity(strapiId: {eq: $id}) {
    ${commonFragment}
    content
    duration {
      locale
      name
      slug
      id
    }
    activity_group {
      title
    }
    educational_objectives {
      id
      locale
      name
      slug
    }
    files {
      ${fileFragment}
    }
    group_sizes {
      slug
      name
      locale
      id
    }
    images {
      ${mediaFragment}
    }
    ingress
    leader_skills {
      id
      locale
      name
      slug
    }
    leader_tasks
    locations {
      id
      locale
      icon {
        url
      }
      name
      slug
    }
    logo {
      width
      url
      size
      name
      mime
      id
      height
    }
    mandatory
    preparation_duration {
      slug
      name
      locale
      id
    }
    skill_areas {
      slug
      name
      locale
      id
    }
    suggestions {
      author
      content
      from_web
      id
      like_count
      locale
      title
      published_at
      links {
        url
        id
        description
      }
      files {
        ${fileFragment}
      }
    }
    age_group {
      color
      title
    }
  }
}
`;
