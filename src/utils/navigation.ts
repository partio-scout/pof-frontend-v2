import { HeaderItem } from "../components/header";

export const checkHeaderItemForTypeAndId = (type: string, id: number, headerItem: HeaderItem): HeaderItem| null => {
  if (headerItem.type === type && headerItem.id === id) return headerItem;

  for (const item of headerItem.subMenu || []) {
    const match = checkHeaderItemForTypeAndId(type, id, item);
    if (match !== null) return match;
  }
  return null;
};

export const findHeaderItemByTypeAndId = (type: string, id: number, navigation: HeaderItem[]): HeaderItem | null => {
  for (const item of navigation) {
    const match = checkHeaderItemForTypeAndId(type, id, item);
    if (match !== null) {
      return match;
    }
  }
  return null;
}