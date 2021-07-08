import {Dispatch} from 'redux';

import {Themes} from '../theme';
import {setTheme} from '../actions/themeActions';
import {appTheme} from '../services/storage/theme';

export const chooseTheme = (theme: Themes) => (dispatch: Dispatch) => {
  dispatch(setTheme(theme));
  appTheme.saveTheme(theme);
};
