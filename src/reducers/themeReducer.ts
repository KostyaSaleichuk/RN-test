import {Constants} from '../actions/types';
import {ThemeActionTypes} from '../actions/themeActions';
import {Themes} from '../theme';

export interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: Themes.light,
};

export const themeReducer = (
  state = initialState,
  action: ThemeActionTypes,
) => {
  switch (action.type) {
    case Constants.SET_LIGHT_THEME:
      return {
        ...state,
        theme: Themes.light,
      };
    case Constants.SET_DARK_THEME:
      return {
        ...state,
        theme: Themes.dark,
      };
    default:
      return state;
  }
};
