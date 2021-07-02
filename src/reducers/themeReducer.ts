import {Constants} from '../actions/types';
import {ThemeActionTypes} from '../actions/themeActions';

export interface ThemeState {
  isDark: boolean;
}

const initialState: ThemeState = {
  isDark: false,
};

export const themeReducer = (
  state = initialState,
  action: ThemeActionTypes,
) => {
  if (action.type === Constants.CHANGE_THEME) {
    return {
      isDark: !state.isDark,
    };
  } else {
    return state;
  }
};
