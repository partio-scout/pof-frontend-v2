import React from 'react';
import './style.css';
import { Link } from 'gatsby';
import upArrow from '../../images/upArrow.svg';
import downArrow from '../../images/downArrow.svg';
import fiFlag from '../../images/flag_fi.svg';
import svFlag from '../../images/flag_sv.svg';
import gbFlag from '../../images/flag_gb.svg';
import smnFlag from '../../images/flag_smn_sme.svg';
import { useSearchContext } from '../../contexts/searchContext';
import { currentLocale } from '../../utils/helpers';
import { Locale, LocaleLink } from '../../types/locale';

export interface LocaleSelectorProps {
  currentDropDownOpen: number | null;
  toggleDropDown: (index: number) => void;
  menuAmount: number;
  localeLinks?: LocaleLink[];
}

const mergeDefaultWithLocaleLinks = (
  defaultLinks: LocaleLink[],
  localeLinks: LocaleLink[] = [],
  currentLanguage: Locale,
) => {
  const siteLocales = [...localeLinks.map((link) => link?.locale), currentLanguage];
  const filteredDefaults = defaultLinks.filter((link) => !siteLocales.includes(link.locale));
  return [...localeLinks, ...filteredDefaults].sort((a, b) => a.locale.localeCompare(b.locale));
};

const LocaleSelector = ({ currentDropDownOpen, toggleDropDown, menuAmount, localeLinks }: LocaleSelectorProps) => {
  const { state } = useSearchContext();
  const locale = currentLocale();
  const defaultLinks: LocaleLink[] = [
    { locale: 'fi', path: '/' },
    { locale: 'sv', path: '/sv' },
    { locale: 'en', path: '/en' },
    { locale: 'smn', path: '/smn' },
    { locale: 'sme', path: '/sme' },
  ];
  const localeToImage = {
    fi: fiFlag,
    sv: svFlag,
    en: gbFlag,
    smn: smnFlag,
    sme: smnFlag,
  };
  const combinedLocaleLinks = mergeDefaultWithLocaleLinks(defaultLinks, localeLinks, locale);
  return !state.searchActive ? (
    <div
      className="py-4 border-lightBlue border-l w-20 sm:w-32 cursor-pointer"
      onKeyPress={(e) => e.key === 'Enter' && toggleDropDown(menuAmount)}
      onClick={() => toggleDropDown(menuAmount)}
      tabIndex={0}
    >
      <div className="flex flex-row items-center justify-around">
        <img className="mx-1 my-0.5 w-4 inline-block" src={localeToImage[locale]} />
        <span className="text-blue ml-0.5 font-tondu tracking-wider hidden sm:inline">{locale.toUpperCase()}</span>
        <img
          className="mx-1 my-0.5 w-8 h-8 hidden sm:inline-block"
          src={currentDropDownOpen === menuAmount ? upArrow : downArrow}
        />
      </div>

      {currentDropDownOpen === menuAmount && (
        <div className="flex flex-col w-40 bg-gray-light absolute py-1 font-sourceSansPro cursor-pointer z-20 rounded-lg">
          {combinedLocaleLinks.map((obj: LocaleLink, index: number) => (
            <Link
              className="flex flex-row justify-start items-center text-blue no-hover-focus:border-transparent h-10 border-l-2 rounded mx-0.5 hover:bg-gray focus:bg-gray py-0.5 px-0.5 gap-1.5"
              to={obj.path!}
              key={obj.locale + index}
            >
              <img className="mx-1 my-0.5 w-4 inline-block" src={localeToImage[obj.locale]} />
              <span className="block font-bold">{obj.locale.toUpperCase()}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  ) : null;
};

export default LocaleSelector;
