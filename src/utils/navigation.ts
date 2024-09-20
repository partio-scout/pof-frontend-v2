import { HeaderItem } from '../components/header';

export const checkHeaderItemForTypeAndId = (
  type: string,
  id: number | string,
  headerItem: Partial<HeaderItem>,
): HeaderItem | null => {
  if (headerItem.type === type && headerItem.id === id) return headerItem as HeaderItem;

  // If type is age-group, we don't need to dig deeper
  if (type === 'age-group' && headerItem.type === 'age-group') return null;

  for (const item of headerItem.subMenu || []) {
    const match = checkHeaderItemForTypeAndId(type, id, item);
    if (match !== null) return match;
  }
  return null;
};

export const findHeaderItemByTypeAndId = (
  type: string,
  id: number | string,
  navigation: Partial<HeaderItem>[],
): HeaderItem | null => {
  for (const item of navigation) {
    const match = checkHeaderItemForTypeAndId(type, id, item);
    if (match !== null) {
      return match;
    }
  }
  return null;
};
