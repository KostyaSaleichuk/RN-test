import {Constants} from './types';

interface SetLightTheme {
  type: Constants.SET_LIGHT_THEME;
  theme: string;
}

export const setLightTheme = (theme: string): SetLightTheme => ({
  type: Constants.SET_LIGHT_THEME,
  theme: theme,
});

interface SetDarkTheme {
  type: Constants.SET_DARK_THEME;
  theme: string;
}

export const setDarkTheme = (theme: string): SetDarkTheme => ({
  type: Constants.SET_DARK_THEME,
  theme: theme,
});

export type ThemeActionTypes = SetLightTheme | SetDarkTheme;
