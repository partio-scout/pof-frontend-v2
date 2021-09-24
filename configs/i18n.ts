
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    lng: 'fi',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${process.env.API_URL}/settings/translations/{{lng}}`
    }
  })

export default i18n;