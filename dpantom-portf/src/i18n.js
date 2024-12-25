import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ru from './locales/ru.json';

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
    debug: true,  // debugging (check browser console for logs)
  });

export default i18n;