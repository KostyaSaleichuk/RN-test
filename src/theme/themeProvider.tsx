import React from 'react';

import {Themes} from './theme';
import {ThemeContext} from './themeContext';

interface ThemeProviderProps {
  value: {
    theme: Themes;
    setTheme: (theme: Themes) => void;
  };
}

export const ThemeProvider: React.FC<ThemeProviderProps> = props => (
  <ThemeContext.Provider value={props.value}>
    {props.children}
  </ThemeContext.Provider>
);
