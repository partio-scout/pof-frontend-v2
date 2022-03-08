import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../.cache/translations/en.json';
import translationFI from '../.cache/translations/fi.json';
import translationSV from '../.cache/translations/sv.json';
import translationSME from '../.cache/translations/sme.json';
import translationSMN from '../.cache/translations/smn.json';

// the translations
const resources = {
  fi: {
    translation: translationFI,
  },
  en: {
    translation: translationEN,
  },
  sv: {
    translation: translationSV,
  },
  smn: {
    translation: translationSMN,
  },
  sme: {
    translation: translationSME,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fi',
  fallbackLng: 'fi',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
