export const parseActivityRouteName = (name: string) => name.toLowerCase().split(' ').join('-');

export const parseAgeGroupRouteName = (name: string) => {
  return name.toLowerCase().split(' ')[0];
};
