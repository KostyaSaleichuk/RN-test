import i18n, {Callback, InitOptions} from 'i18next';
import {initReactI18next} from 'react-i18next';

import {Languages} from './languages';
import en from './translations/en.json';
import ua from './translations/ua.json';
import ru from './translations/ru.json';

class Localization {
  public changeLanguage = async (key: Languages) =>
    await i18n.changeLanguage(key);

  public translate = (textKey: string) => {
    const translation = i18n.t(textKey);
    return translation as string;
  };

  public initialization = async (options: InitOptions, callback?: Callback) => {
    await i18n.use(initReactI18next).init({...options}, callback);
  };
}

export const InitLanguage = (language: Languages) =>
  localization.initialization({
    resources: {en, ua, ru},
    lng: language || Languages.english,
    keySeparator: false,
    interpolation: {escapeValue: false},
  });

export const localization = new Localization();
