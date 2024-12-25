import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ru from './locales/ru.json';

// Get the language from localStorage if it exists, else use 'en' by default
const languageFromStorage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    lng: languageFromStorage, // Initialize the language from localStorage
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    debug: true, // Enable debugging logs for easier troubleshooting
  });

// Save language to localStorage when it changes
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng); // Save the current language in localStorage
});

export default i18n;
