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
type RenderFunction<TValue, TProps> = (params: RenderParams<TValue, TProps>) => React.ReactElement | null;

interface RenderParams<TValue, TProps> {
  /** The title */
  title: string | React.ReactElement | undefined;
  /** The items for the selector */
  items: RenderItem<TValue>[];
  /** Toggle a single item */
  toggle: (id: string) => void;
  /** Toggle all items */
  toggleAll: () => void;
  additionalProps?: TProps;
}

export interface SelectProps<TValue, TProps = undefined> {
  /** The title for the selector  */
  title?: string | React.ReactElement;
  /** The items for the selector */
  items: TValue[];
  /** Function for getting a title (and subtitle) from an item */
  getItemTitle: (item: TValue) => string | { title: string; subtitle?: string };
  /** Function for getting an icon for an item */
  getItemIcon?: (item: TValue) => string | React.ReactElement;
  /** Called when an item is toggled, with the item */
  onToggle?: (item: TValue) => void;
  /** Called when some item is toggled, with the selected items after that toggle */
  onChange?: (selectedItems: TValue[]) => void;
  /** Whether to allow selecting no items. If true, when the last selected item is unselected, all are selected */
  disallowEmpty?: boolean;
  selectOne?: boolean;
  additionalProps?: TProps;
}

/**
 * High order component for creating selectors.
 */
const CoreSelect = <TValue extends unknown, TProps = undefined>(render: RenderFunction<TValue, TProps>) =>
  function <K extends TValue>({
    title,
    items,
    getItemTitle,
    getItemIcon,
    onToggle,
    onChange,
    disallowEmpty,
    selectOne,
    additionalProps,
  }: SelectProps<K, TProps>) {
    const [selectedItems, setSelectedItems] = useState<number[]>(() => (selectOne ? [0] : items.map((_, i) => i)));
    const [prevSelectedItems, setPrevSelectedItems] = useState<number[]>([]);

    useEffect(() => {
      onChange && onChange(selectedItems.map((i) => items[i]));
    }, [selectedItems]);

    const getItemTitleString = (item: K): string => {
      const title = getItemTitle(item);

      if (typeof title === 'string') return title;
      return title.title;
    };

    const toggleItem = (index: number) => {
      const foundIndex = selectedItems.findIndex((x) => x === index);
      let newItems = [...selectedItems];

      if (selectOne || selectedItems.length === items.length) {
        newItems = [index];
      } else if (foundIndex > -1) {
        newItems.splice(foundIndex, 1);
      } else {
        newItems = [...newItems, index].sort((a, b) => (a > b ? 1 : -1));
      }
      if (disallowEmpty) {
        if (newItems.length) {
          setSelectedItems(newItems);
        } else {
          setSelectedItems(items.map((_, i) => i));
        }
      } else {
        setSelectedItems(newItems);
      }
      onToggle && onToggle(items[index]);
    };

    const toggleAll = () => {
      if (selectedItems.length !== items.length) {
        setPrevSelectedItems(selectedItems);
        setSelectedItems(items.map((_, i) => i));
      } else {
        setSelectedItems(prevSelectedItems);
      }
    };

    return render({
      title,
      items: items.map((item, i) => {
        const _title = getItemTitle(item);
        const { title, subtitle } = typeof _title === 'string' ? { title: _title, subtitle: undefined } : _title;
        const checked = selectedItems.includes(i);
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
        const index = items.findIndex((item) => getItemTitleString(item) === id);
        toggleItem(index);
      },
      toggleAll: () => toggleAll(),
      additionalProps,
    });
  };

export default CoreSelect;
