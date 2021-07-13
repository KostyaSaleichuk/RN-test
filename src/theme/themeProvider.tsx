import React from 'react';

import {ThemeContext} from './themeContext';

export const ThemeProvider = props => (
  <ThemeContext.Provider value={props.value}>
    {props.children}
  </ThemeContext.Provider>
);
