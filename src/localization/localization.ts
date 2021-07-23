import i18n, {Callback, InitOptions} from 'i18next';
import {initReactI18next} from 'react-i18next';

import {storeApi} from '../services/storage/storeApi';
import {AsyncKey} from '../services/storage/asyncKey';
import en from './translations/en.json';
import ua from './translations/ua.json';
import ru from './translations/ru.json';

export enum Languages {
  english = 'en',
  ukrainian = 'ua',
  russian = 'ru',
}

class Localization {
  public changeLanguage = async (key: Languages) =>
    await i18n.changeLanguage(key);

  public translate = (textKey: string) => {
    const translation = i18n.t(textKey);
    return translation as string;
  };

  public InitLanguage = async (language: Languages) =>
    await i18n.use(initReactI18next).init({
      resources: {en, ua, ru},
      lng: language || Languages.english,
      keySeparator: false,
      interpolation: {escapeValue: false},
    });

  public saveLanguage = async (language: Languages) => {
    await storeApi.set(AsyncKey.currentLanguage, language);
  };

  public getLanguage = async () => {
    const currentLanguage = await storeApi.getString(AsyncKey.currentLanguage);
    return currentLanguage as Languages;
  };
}

export const localization = new Localization();
