import {storeApi} from './storeApi';
import {AsyncKey} from './asyncKey';
import {Themes} from '../../theme';

class AppTheme {
  public saveTheme = async (theme: Themes) => {
    await storeApi.set(AsyncKey.currentTheme, theme);
  };

  public getTheme = async () => {
    const currentTheme = await storeApi.getString(AsyncKey.currentTheme);
    return currentTheme as Themes;
  };
}

export const appTheme = new AppTheme();
