export const parseDate = (dateString: string) => {
  const d = new Date(dateString);
  return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear();
};
