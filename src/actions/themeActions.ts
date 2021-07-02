import {Constants} from './types';

interface ChangeTheme {
  type: Constants.CHANGE_THEME;
  isDark: boolean;
}

export const changeTheme = (isDark: boolean): ChangeTheme => ({
  type: Constants.CHANGE_THEME,
  isDark: isDark,
});

export type ThemeActionTypes = ChangeTheme;
