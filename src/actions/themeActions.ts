import {Constants} from './types';
import {Themes} from '../theme';
interface SetTheme {
  type: Constants.SET_THEME;
  theme: Themes;
}

export const setTheme = (theme: Themes): SetTheme => ({
  type: Constants.SET_THEME,
  theme: theme,
});

export type ThemeActionTypes = SetTheme;
