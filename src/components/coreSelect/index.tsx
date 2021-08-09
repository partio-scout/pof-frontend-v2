import React, { useEffect, useReducer } from 'react';

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
  preselectedItems?: TValue[];
  getItemChecked?: (item: TValue) => boolean;
  /** Function for getting a title (and subtitle) from an item */
  getItemTitle: (item: TValue) => string | { title: string; subtitle?: string };
  /** Function for getting an icon for an item */
  getItemIcon?: (item: TValue) => string | React.ReactElement;
  getItemId?: (item: TValue) => string;
  /** Called when an item is toggled, with the item */
  onToggle?: (item: TValue) => void;
  onToggleAll?: () => void;
  /** Called when some item is toggled, with the selected items after that toggle */
  onChange?: (selectedItems: TValue[]) => void;
  /** Whether to allow selecting no items. If true, when the last selected item is unselected, all are selected */
  disallowEmpty?: boolean;
  selectOne?: boolean;
}

interface State<TValue> {
  items: TValue[];
  selectedItems: string[];
  prevSelectedItems: string[];
  allSelected: boolean;
}

type Action<TValue> =
  | { type: 'toggleItem'; payload: TValue }
  | { type: 'toggleAll' }
  | { type: 'selectAll' }
  | { type: 'setItems'; payload: TValue[] };

const reducer =
  <TValue,>(getItemId: (item: TValue) => string, selectOne: boolean, disallowEmpty: boolean) =>
  (state: State<TValue>, action: Action<TValue>): State<TValue> => {
    switch (action.type) {
      case 'toggleItem': {
        const itemId = getItemId(action.payload);

        const foundIndex = state.selectedItems.findIndex((x) => x === itemId);
        let newItems = [...state.selectedItems];

        if (selectOne || state.selectedItems.length === state.items.length) {
          newItems = [itemId];
        } else if (foundIndex > -1) {
          newItems.splice(foundIndex, 1);
        } else {
          newItems = [...newItems, itemId].sort((a, b) => (a > b ? 1 : -1));
        }

        if (disallowEmpty && !newItems.length) {
          newItems = state.items.map(getItemId);
        }
        return { ...state, selectedItems: newItems, allSelected: newItems.length === state.items.length };
      }
      case 'toggleAll': {
        if (!state.allSelected) {
          return {
            ...state,
            selectedItems: state.items.map(getItemId),
            prevSelectedItems: state.selectedItems,
            allSelected: true,
          };
        }
        return {
          ...state,
          selectedItems: state.prevSelectedItems,
          allSelected: false,
        };
      }
      case 'selectAll': {
        return {
          ...state,
          selectedItems: state.items.map(getItemId),
          allSelected: true,
        };
      }
      case 'setItems': {
        return {
          ...state,
          items: action.payload,
        };
      }
      default:
        return state;
    }
  };

/**
 * Hook that provides selector logic to components.
 */
const useCoreSelect = <TValue,>({
  title,
  items,
  preselectedItems,
  getItemTitle,
  getItemIcon,
  getItemId,
  getItemChecked,
  onToggle,
  onToggleAll,
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

  const [state, dispatch] = useReducer(reducer<TValue>(_getItemId, selectOne || false, disallowEmpty || false), {
    items,
    selectedItems: preselectedItems?.length ? preselectedItems.map(_getItemId) : items.map(_getItemId),
    prevSelectedItems: [],
    allSelected: true,
  });

  useEffect(() => {
    onChange && onChange(items.filter((item) => state.selectedItems.includes(_getItemId(item))));
  }, [state.selectedItems]);

  useEffect(() => {
    dispatch({ type: 'setItems', payload: items });
    if (state.allSelected) {
      dispatch({ type: 'selectAll' });
    }
  }, [items]);

  const toggleItem = (item: TValue) => {
    if (!getItemChecked) {
      dispatch({ type: 'toggleItem', payload: item });
    }
    onToggle && onToggle(item);
  };

  const toggleAll = () => {
    onToggleAll && onToggleAll();
    if (!getItemChecked) dispatch({ type: 'toggleAll' });
  };

  return {
    title,
    items: items.map((item) => {
      const _title = getItemTitle(item);
      const { title, subtitle } = typeof _title === 'string' ? { title: _title, subtitle: undefined } : _title;
      const checked = getItemChecked ? getItemChecked(item) : state.selectedItems.includes(_getItemId(item));
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
    toggleAll,
  };
};

export default useCoreSelect;
