import { HeaderItem } from "../components/header";
import { BreadCrumb } from "../components/header/breadCrumbs";

export const checkHeaderItemForPath = (path: string, headerItem: HeaderItem): HeaderItem[] | null => {
  if (headerItem.url === path) return [headerItem];

  for (const item of headerItem.subMenu || []) {
    const match = checkHeaderItemForPath(path, item);
    if (match !== null) return [headerItem, ...match];
  }
  return null;
};

export const findBreadcrumbPath = (path: string, navigation: HeaderItem[]): HeaderItem[] => {
  let foundPath: HeaderItem[] = [];
  const realPath = decodeURIComponent(path).replace(/\/$/, '');

  for (const item of navigation) {
    const match = checkHeaderItemForPath(realPath, item);
    if (match !== null) {
      foundPath = match;
      break;
    }
  }

  return foundPath;
};