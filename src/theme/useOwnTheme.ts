import {useContext} from 'react';

import {ThemeContext} from './themeContext';

export const useOwnTheme = () => useContext(ThemeContext);
