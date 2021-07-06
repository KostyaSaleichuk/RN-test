import {Constants} from './types';

interface SetTheme {
  type: Constants.SET_THEME;
  theme: string;
}

export const setTheme = (theme: string): SetTheme => ({
  type: Constants.SET_THEME,
  theme: theme,
});

export type ThemeActionTypes = SetTheme;
