import React, { useEffect, useState } from 'react';

interface RenderItem<T> {
  /** Item's id. Used in toggling items */
  id: string;
  /** Item's title */
  title: string;
  /** Item's optional subtitle */
  subtitle?: string;
  /** Is the item checked */
  checked: boolean;
  /** Icon for the item */
  icon?: string | React.ReactElement;
  itemData: T;
}

/**
 * Function to render the selector
 */
export type RenderFunction<TValue> = (params: RenderParams<TValue>) => React.ReactElement | null;

export interface RenderParams<TValue> {
  /** The title */
  title: string | React.ReactElement | undefined;
  /** The items for the selector */
  items: RenderItem<TValue>[];
  /** Toggle a single item */
  toggle: (id: string) => void;
  /** Toggle all items */
  toggleAll: () => void;
}

export interface SelectProps<TValue> {
  /** The title for the selector  */
  title?: string | React.ReactElement;
  /** The items for the selector */
  items: TValue[];
  /** Function for getting a title (and subtitle) from an item */
  getItemTitle: (item: TValue) => string | { title: string; subtitle?: string };
  /** Function for getting an icon for an item */
  getItemIcon?: (item: TValue) => string | React.ReactElement;
  getItemId?: (item: TValue) => string;
  /** Called when an item is toggled, with the item */
  onToggle?: (item: TValue) => void;
  /** Called when some item is toggled, with the selected items after that toggle */
  onChange?: (selectedItems: TValue[]) => void;
  /** Whether to allow selecting no items. If true, when the last selected item is unselected, all are selected */
  disallowEmpty?: boolean;
  selectOne?: boolean;
}

/**
 * Hook that provides selector logic to components.
 */
const useCoreSelect = <TValue,>({
  title,
  items,
  getItemTitle,
  getItemIcon,
  getItemId,
  onToggle,
  onChange,
  disallowEmpty,
  selectOne,
}: SelectProps<TValue>): RenderParams<TValue> => {
  const _getItemTitle = (item: TValue): { title: string; subtitle?: string } => {
    const _title = getItemTitle(item);
    return typeof _title === 'string' ? { title: _title, subtitle: undefined } : _title;
  };
  const _getItemId = (item: TValue): string => {
    if (getItemId !== undefined) return getItemId(item);
    return _getItemTitle(item).title;
  };

  const [selectedItems, setSelectedItems] = useState<string[]>(() =>
    selectOne ? [_getItemId(items[0])] : items.map((x) => _getItemId(x)),
  );
  const [prevSelectedItems, setPrevSelectedItems] = useState<string[]>([]);
  const [allSelected, setAllSelected] = useState(false);

  useEffect(() => {
    onChange && onChange(items.filter((item) => selectedItems.includes(_getItemId(item))));
  }, [selectedItems]);

  useEffect(() => {
    if (allSelected) {
      setSelectedItems(items.map(_getItemId));
    }
  }, [items]);

  const toggleItem = (item: TValue) => {
    const itemId = _getItemId(item);

    const foundIndex = selectedItems.findIndex((x) => x === itemId);
    let newItems = [...selectedItems];

    if (selectOne || selectedItems.length === items.length) {
      newItems = [itemId];
    } else if (foundIndex > -1) {
      newItems.splice(foundIndex, 1);
    } else {
      newItems = [...newItems, itemId].sort((a, b) => (a > b ? 1 : -1));
    }

    if (disallowEmpty && !newItems.length) {
      newItems = items.map(_getItemId);
    }

    setAllSelected(newItems.length === items.length);
    setSelectedItems(newItems);
    onToggle && onToggle(item);
  };

  const toggleAll = () => {
    if (selectedItems.length !== items.length) {
      setAllSelected(true);
      setPrevSelectedItems(selectedItems);
      setSelectedItems(items.map(_getItemId));
    } else {
      setAllSelected(false);
      setSelectedItems(prevSelectedItems);
    }
  };

  return {
    title,
    items: items.map((item) => {
      const _title = getItemTitle(item);
      const { title, subtitle } = typeof _title === 'string' ? { title: _title, subtitle: undefined } : _title;
      const checked = selectedItems.includes(_getItemId(item));
      const icon = getItemIcon ? getItemIcon(item) : undefined;

      return {
        id: title,
        title,
        subtitle,
        checked,
        icon,
        itemData: item,
      };
    }),
    toggle: (id) => {
      const item = items.find((item) => _getItemId(item) === id);
      if (item) toggleItem(item);
    },
    toggleAll: () => toggleAll(),
  };
};

export default useCoreSelect;
