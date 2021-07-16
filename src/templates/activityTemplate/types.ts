export interface ActivityPageData {
  title: string;
  activity_group: {
    title: string;
  };
  ingress: string;
  content: string;
  header: string;
  subHeader: string;
  duration: {
    name: string;
  };
  skill_areas: Array<SkillArea>;
  educational_objectives: Array<EducationalObjective>;
  locations: Array<Location>;
  leader_tasks: string;
}

export interface SkillArea {
  name: string;
}

export interface EducationalObjective {
  name: string;
}

export interface Location {
  name: string;
  slug: string;
}
