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
  itemData: T;
}

/**
 * Function to render the selector
 * @param {string | React.ReactElement} title The title
 * @param {RenderItem[]} items The items for the selector
 * @param {(string) => void} toggle Toggle a single item
 * @param {() => void} toggleAll Toggle all items
 */
type RenderFunction<T, P> = (
  title: string | React.ReactElement | undefined,
  items: RenderItem<T>[],
  toggle: (id: string) => void,
  toggleAll: () => void,
  props?: P
) => React.ReactElement | null;

export interface SelectProps<T, P = undefined> {
  /** The title for the selector  */
  title?: string | React.ReactElement;
  /** The items for the selector */
  items: T[];
  /** Function for getting a title (and subtitle) from an item */
  getItemTitle: (item: T) => string | { title: string; subtitle?: string };
  /** Called when an item is toggled, with the item */
  onToggle?: (item: T) => void;
  /** Called when some item is toggled, with the selected items after that toggle */
  onChange?: (selectedItems: T[]) => void;
  /** Whether to allow selecting no items. If true, when the last selected item is unselected, all are selected */
  disallowEmpty?: boolean;
  additionalProps?: P;
}

/**
 * High order function for creating selectors.
 * @returns 
 */
const CoreSelect = <T extends unknown, P = undefined>(render: RenderFunction<T, P>) =>
  function <K extends T>({ title, items, getItemTitle, onToggle, onChange, disallowEmpty, additionalProps }: SelectProps<K, P>) {
    const [selectedItems, setSelectedItems] = useState<number[]>(() => items.map((_, i) => i));
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

      if (selectedItems.length === items.length) {
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

    return render(
      title,
      items.map((item, i) => {
        const _title = getItemTitle(item);
        const title = typeof _title === 'string' ? _title : _title.title;
        const subtitle = typeof _title === 'string' ? undefined : _title.subtitle;
        const checked = selectedItems.includes(i);

        return {
          id: title,
          title,
          subtitle,
          checked,
          itemData: item,
        };
      }),
      (id) => {
        const index = items.findIndex((item) => getItemTitleString(item) === id);
        toggleItem(index);
      },
      () => toggleAll(),
      additionalProps,
    );
  };

export default CoreSelect;
