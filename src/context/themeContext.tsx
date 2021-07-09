import React from 'react';
import {setTheme} from '../actions/themeActions';
import {Themes} from '../theme';

interface ThemeContext {
  theme: Themes;
  setTheme: (theme: Themes) => void;
}

export const ThemeContext = React.createContext<ThemeContext>({
  theme: Themes.light,
  setTheme: setTheme,
});
