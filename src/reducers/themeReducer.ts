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
    case Constants.SET_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
};
