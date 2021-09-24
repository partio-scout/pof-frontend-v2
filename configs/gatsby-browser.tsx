import React, { Suspense } from 'react';

import { ShouldUpdateScrollArgs, WrapRootElementBrowserArgs } from 'gatsby';
import '../src/styles/global.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }: ShouldUpdateScrollArgs) => {
  // If query parameter "tip" exists, we don't want to scroll anywhere
  // because activity-page does its own scrolling
  if (!location.search.includes('tip=')) {
    const currentPosition = getSavedScrollPosition(location);

    window.scrollTo(...(currentPosition || [0, 0]));
  }

  return false;
};

export const wrapRootElement = ({ element }: WrapRootElementBrowserArgs) => (
  <Suspense fallback="...">
    <I18nextProvider i18n={i18n}>{element}</I18nextProvider>
  </Suspense>
);
