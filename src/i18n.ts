import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import english from './translations/en/english.json';
import slovak from './translations/sk/slovak.json';

i18n.use(initReactI18next).init({
  lng: 'sk',
  debug: true,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: english,
    },
    sk: {
      translation: slovak,
    },
  },
});

export default i18n;
