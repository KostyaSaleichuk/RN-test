import {Dispatch} from 'redux';

import {Constants} from '../actions/types';
import {ThemeActionTypes} from '../actions/themeActions';
import {Themes} from '../theme';
import {appTheme} from '../services/storage/theme';
import {setTheme} from '../actions/themeActions';

export interface ThemeState {
  theme: Themes;
}

const initialState: ThemeState = {
  theme: Themes.light,
};

export const themeReducer = (
  state = initialState,
  action: ThemeActionTypes,
) => {
  switch (action.type) {
    case Constants.SET_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
};

export const themePicker = (theme: Themes) => (dispatch: Dispatch) => {
  dispatch(setTheme(theme));
  appTheme.saveTheme(theme);
};
