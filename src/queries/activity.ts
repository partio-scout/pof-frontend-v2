export const getAllActivities = `
{
  allStrapiActivity {
    nodes {
      id
      educational_objectives {
        name
        slug
      }
      leader_skills {
        name
        slug
      }
      title
      content
      mandatory
      activity_group {
        age_group
        title
      }
      ingress
      duration {
        name
        slug
      }
      skill_areas {
        name
        slug
      }
      locations {
        name
        slug
      }
      leader_tasks
      suggestions {
        author
        id
        like_count
        title
        activity
        content
      }
    }
  }
}
`;
