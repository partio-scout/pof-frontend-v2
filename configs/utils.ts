export const parseActivityRouteName = (name: string) =>
  encodeURI(
    replaceDashesAndLowerCase(name)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, ''),
  );

export const parseAgeGroupRouteName = (name: string) => {
  const parsedName = name.split(' ')[0];
  return parseActivityRouteName(parsedName);
};

const replaceDashesAndLowerCase = (str: string) =>
  str
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/^-+|-+$/, '')
    .replace(/-{2,}/, '-');
