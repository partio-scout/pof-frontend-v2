export const parseActivityRouteName = (name: string) => name.toLowerCase().split(' ').join('-').trim();

export const parseAgeGroupRouteName = (name: string) => {
  return name.toLowerCase().split(' ')[0].trim();
};
