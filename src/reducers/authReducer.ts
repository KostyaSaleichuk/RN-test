import {Constants} from '../actions/types';
import {LoginActionTypes} from '../actions/loginActions';

export interface AuthState {
  isAuth: boolean;
}

const initialState: AuthState = {
  isAuth: false,
};

export const authReducer = (state = initialState, action: LoginActionTypes) => {
  switch (action.type) {
    case Constants.LOG_IN:
      return {
        ...state,
        isAuth: true,
      };
    case Constants.LOG_OUT:
      return {
        ...state,
        isAuth: false,
      };
    case Constants.SET_AUTH:
      return {
        ...state,
        isAuth: action.data,
      };
    default:
      return state;
  }
};
