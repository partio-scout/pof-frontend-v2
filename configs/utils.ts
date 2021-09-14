export const parseActivityRouteName = (name: string) =>
  encodeURI(
    replaceDashesAndLowerCase(name)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, ''),
  );

export const parseAgeGroupRouteName = (name: string) => {
  const parsedName = name.trim().split(' ')[0];
  return parseActivityRouteName(parsedName);
};

const replaceDashesAndLowerCase = (str: string) =>
  str
    .toLowerCase()
    .replace(':', '')
    .replace(/\s/g, '-')
    .replace(/[–—:]/g, '-') // En Dash & Em Dash
    .replace(/^-+|-+$/, '')
    .replace(/-{2,}/, '-')
    .replace(/[\.\?]/g, '');
