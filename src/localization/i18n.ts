import i18n, {Callback, InitOptions} from 'i18next';
import {initReactI18next} from 'react-i18next';

class Localization {
  public changeLanguage = async (key: string) => await i18n.changeLanguage(key);

  public translate = (key: string) => {
    const translation = i18n.t(key);
    return translation as string;
  };

  public initialization = async (options: InitOptions, callback?: Callback) => {
    await i18n.use(initReactI18next).init({...options}, callback);
  };
}

export const localization = new Localization();
