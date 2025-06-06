import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { NavProps, HeaderItem, HeaderItemFirstLevel } from '.';
import Search from '../search/headerSearchBox';
import logo from '../../images/logo.svg';
import upArrow from '../../images/upArrow.svg';
import downArrow from '../../images/downArrow.svg';
import { useSearchContext } from '../../contexts/searchContext';
import './style.css';
import { useTranslation } from 'react-i18next';
import LocaleSelector from './localeSelector';

const DefaultNav = ({ headerItems, toggleDropDown, currentDropDownOpen, showBreadCrumbs, localeLinks }: NavProps) => {
  const { state } = useSearchContext();
  const { t } = useTranslation();

  return (
    <div
      className={clsx('hidden lg:flex overflow-hidden h-20', {
        'border-b border-lightBlue': !showBreadCrumbs || state.searchActive,
      })}
    >
      <Link to="/" className="flex-shrink-0 overflow">
        <img src={logo} className="overflow-hidden mx-4 my-1 w-26" alt={t('logo-title')} title={t('logo-title')} />
      </Link>
      <div className="flex flex-1 space-x-4 cursor-default h-full justify-end z-50">
        {!state.searchActive && (
          <div className="flex space-x-4">
            {' '}
            {/* Without this wrapper div Gatsby's hydration fails for some reason */}
            {headerItems.map((headerItem: HeaderItemFirstLevel, index: number) => (
              <div
                key={headerItem.name + index.toString()}
                className="py-4 cursor-pointer"
                onKeyPress={(e) => e.key === 'Enter' && toggleDropDown(index)}
                onClick={() => toggleDropDown(index)}
                tabIndex={0}
              >
                <span className="text-blue font-tondu tracking-wider">{headerItem.name.toUpperCase()}</span>
                <img
                  className="mx-1 my-0.5 w-8 inline-block"
                  src={currentDropDownOpen === index ? upArrow : downArrow}
                  alt=""
                />
                {headerItem.subMenu && currentDropDownOpen === index && (
                  <div className="flex flex-col max-w-navItem bg-gray-light absolute py-1 font-sourceSansPro cursor-pointer z-20 rounded-lg">
                    {headerItem.subMenu.map((subItem: HeaderItem, index: number) => (
                      <Link
                        className="text-blue no-hover-focus:border-transparent border-l-8 rounded mx-1 hover:bg-gray focus:bg-gray py-0.5 px-1"
                        to={subItem.url!}
                        key={subItem.name + index}
                        style={{ borderColor: subItem.color }}
                      >
                        <span className="block font-bold">{subItem.name}</span>
                        {subItem.ingress && <span className="block">{subItem.ingress}</span>}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        <LocaleSelector
          currentDropDownOpen={currentDropDownOpen}
          toggleDropDown={toggleDropDown}
          menuAmount={headerItems.length}
          localeLinks={localeLinks}
        />
        <Search />
      </div>
    </div>
  );
};

export default DefaultNav;
