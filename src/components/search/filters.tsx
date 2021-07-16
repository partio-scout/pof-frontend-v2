import React, { useState } from 'react';
import { contentTypes } from '../../types/content';
import DropdownSelect from '../dropdownSelect';
import AdditionalFilters from './additionalFilters';
import DropdownRefinementList from './dropdownRefinementList';
import PlusIcon from '../../images/plus-gray.svg';
import MinusIcon from '../../images/minus-white.svg';
import clsx from 'clsx';
import { useSearchContext } from '../../contexts/searchContext';

const Filters = () => {
  const { dispatch } = useSearchContext();
  const [additionalFiltersVisible, setAdditionalFiltersVisible] = useState(false);

  return (
    <div className="bg-white border-b border-lightBlue">
      <div className={clsx('container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-3', {
        'mb-0': additionalFiltersVisible
      })}>
        <DropdownSelect
          items={contentTypes}
          title="Sisältötyyppi"
          onChange={(selectedItems) => dispatch({ type: 'set-visible-content-types', payload: selectedItems })}
          getItemTitle={(item) => item.name}
        />
        <DropdownRefinementList title="Ikäryhmä" attribute="age_group.title" />
        <button
          className={clsx(
            'flex items-center justify-center border border-gray rounded uppercase font-bold h-12 cursor-pointer w-full',
            additionalFiltersVisible ? 'h-16 bg-blue text-white rounded-b-none border-blue' : '',
          )}
          onClick={() => setAdditionalFiltersVisible(!additionalFiltersVisible)}
        >
          <img src={additionalFiltersVisible ? MinusIcon : PlusIcon} className="mr-1" />
          Tarkenna hakua
        </button>
        {/* TODO: The sort selector still needs some love */}
        <DropdownSelect
          items={['Aakkosjärjestys', 'Uusin ensin', 'Vanhin ensin']}
          title="Järjestä"
          onChange={(selectedItems) => null}
          getItemTitle={(item) => item}
          additionalProps={{ hideAllToggle: true }}
          selectOne
        />
      </div>
      <AdditionalFilters visible={additionalFiltersVisible} />
    </div>
  );
};

export default Filters;
