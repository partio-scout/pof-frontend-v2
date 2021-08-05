import React, { useState } from 'react';
import clsx from 'clsx';
import PillSelect from '../pillSelect';
import { SelectProps } from '../coreSelect';
import PlusIcon from '../../images/plus.inline.svg';
import MinusIcon from '../../images/minus.inline.svg';

function AccordionPillSelect<T>({ title, ...props }: SelectProps<T>) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className={clsx(
          'p-2 rounded-md border border-blue border-opacity-40 hover:border-opacity-100 flex justify-between cursor-pointer w-full font-bold',
          open ? 'bg-blue text-white rounded-b-none' : 'bg-white',
        )}
        onClick={() => setOpen(!open)}
      >
        {title}
        {open ? <MinusIcon className="fill-current text-white" /> : <PlusIcon className="fill-current opacity-40" />}
      </button>
      <div
        className={clsx('bg-gray-light p-1 pt-0 rounded-b-md', {
          hidden: !open,
        })}
      >
        <PillSelect {...props} itemBorders />
      </div>
    </div>
  );
}

export default AccordionPillSelect;
