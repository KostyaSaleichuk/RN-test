import {storeApi} from './storeApi';
import {AsyncKey} from './asyncKey';
import {Languages} from '../../localization/languages';

class AppLanguage {
  public saveLanguage = async (language: Languages) => {
    await storeApi.set(AsyncKey.currentLanguage, language);
  };

  public getLanguage = async () => {
    const currentLanguage = await storeApi.getString(AsyncKey.currentLanguage);
    return currentLanguage as Languages;
  };
}

export const appLanguage = new AppLanguage();
