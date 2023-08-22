import slug from 'limax';

export const parseRouteName = (name: string) => slug(name);

export const parseAgeGroupRouteName = (name: string) => {
  const parsedName = name.trim().split(' ')[0];
  return parseRouteName(parsedName);
};
