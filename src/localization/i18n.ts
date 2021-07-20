import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './translations/en.json';
import ua from './translations/ua.json';
import ru from './translations/ru.json';

const resources = {
  en,
  ua,
  ru,
};

export const localization = i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {escapeValue: false},
});
