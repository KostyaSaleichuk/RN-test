import React from 'react';

import {ThemeContext} from './themeContext';

export const withTheme = (Component: React.FC) => props =>
  (
    <ThemeContext.Consumer>
      {context => <Component {...props} {...context} />}
    </ThemeContext.Consumer>
  );
