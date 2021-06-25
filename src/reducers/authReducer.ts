import {Dispatch} from 'redux';

import {Constants} from '../actions/types';
import {LoginActionTypes} from '../actions/loginActions';
import {logIn, logOut} from '../actions/loginActions';
import {authentication} from '../services/storage/authentication';

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

export const tryLogin = (credentials:{email:string; password:string}) => (dispatch: Dispatch) => {
  const result = (credentials.email === 'email@email.com' && credentials.password === '12345678') || false;
  if (result) {
    dispatch(logIn());
    authentication.tryLogin();
  }
  return result;
};

export const logoutHandler = () => (dispatch: Dispatch) => {
  dispatch(logOut());
  authentication.logoutHandler();
};
