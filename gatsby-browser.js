import React, { Suspense } from 'react';
import './src/styles/global.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './configs/i18n';

export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
  // If query parameter "tip" exists, we don't want to scroll anywhere
  // because activity-page does its own scrolling
  if (!location.search.includes('tip=')) {
    const currentPosition = getSavedScrollPosition(location);

    window.scrollTo(...(currentPosition || [0, 0]));
  }

  return false;
};

export const wrapRootElement = ({ element }) => (
  <Suspense fallback="...">
    <I18nextProvider i18n={i18n}>{element}</I18nextProvider>
  </Suspense>
);
