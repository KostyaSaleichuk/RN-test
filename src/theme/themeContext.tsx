import React from 'react';

import {Themes} from './theme';

interface ThemeContextProps {
  theme: Themes;
  setTheme: (theme: Themes) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: Themes.light,
  setTheme: theme => {},
});
