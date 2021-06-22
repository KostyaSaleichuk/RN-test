import {Constants} from '../actions/types';
import {LoginActionTypes} from '../actions/loginActions';

export interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
};

export const authReducer = (state = initialState, action: LoginActionTypes) => {
  switch (action.type) {
    case Constants.LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case Constants.LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
