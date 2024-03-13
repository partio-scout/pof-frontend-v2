import React, { useState } from 'react';
import { contentTypes } from '../../types/content';
import DropdownSelect from '../dropdownSelect';
import AdditionalFilters from './additionalFilters';
import DropdownRefinementList from './dropdownRefinementList';
import PlusIcon from '../../images/plus-gray.svg';
import MinusIcon from '../../images/minus-white.svg';
import clsx from 'clsx';
import { useSearchContext } from '../../contexts/searchContext';
import { useTranslation } from 'react-i18next';

const Filters = () => {
  const { t } = useTranslation();
  const { state, dispatch } = useSearchContext();
  const [additionalFiltersVisible, setAdditionalFiltersVisible] = useState(false);

  const sortAgeGroups = (a: string, b: string): -1 | 0 | 1 => {
    const matchA = parseInt(/^.*\((\d+)-.+\)$/.exec(a)?.[1] || '-1');
    const matchB = parseInt(/^.*\((\d+)-.+\)$/.exec(b)?.[1] || '-1');

    return matchA > matchB ? 1 : -1;
  };

  return (
    <div className="bg-white border-b border-lightBlue">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 px-4 lg:px-0">
        <div className="my-3">
          <DropdownSelect
            items={contentTypes}
            title={t('sisaltotyyppi')}
            onChange={(selectedItems) => dispatch({ type: 'set-visible-content-types', payload: selectedItems })}
            getItemTitle={(item) => item.name}
            selectOne
          />
        </div>
        <div className="my-3">
          <DropdownRefinementList
            title={t('ikaryhma')}
            attribute="age_group.title"
            limit={50}
            defaultRefinement={state.searchState.refinementList?.['age_group.title']}
            sortFunction={sortAgeGroups}
          />
        </div>
        <button
          className={clsx(
            'flex items-center justify-center border border-gray rounded uppercase font-bold h-12 cursor-pointer w-full my-3',
            additionalFiltersVisible ? 'h-16 mb-0 bg-blue text-white rounded-b-none border-blue' : '',
          )}
          onClick={() => setAdditionalFiltersVisible(!additionalFiltersVisible)}
        >
          <img src={additionalFiltersVisible ? MinusIcon : PlusIcon} className="mr-1" />
          {t('tarkenna-hakua')}
        </button>
        <div className="my-3">
          {/* TODO: Have to decide if the order selector is necessary */}
          {/* <DropdownSelect
            items={['Aakkosjärjestys', 'Uusin ensin', 'Vanhin ensin']}
            title="Järjestä"
            onChange={(selectedItems) => null}
            getItemTitle={(item) => item}
            additionalProps={{ hideAllToggle: true }}
            selectOne
          /> */}
        </div>
      </div>
      <AdditionalFilters visible={additionalFiltersVisible} />
    </div>
  );
};

export default Filters;
