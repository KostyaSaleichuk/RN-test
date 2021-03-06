import {Constants} from './types';

interface LogIn {
  type: typeof Constants.LOG_IN;
}

export const logIn = (): LogIn => ({
  type: Constants.LOG_IN,
});

interface LogOut {
  type: typeof Constants.LOG_OUT;
}

export const logOut = (): LogOut => ({
  type: Constants.LOG_OUT,
});

interface SetAuth {
  type: typeof Constants.SET_AUTH;
  data: boolean;
}

export const setAuth = (setAuth: boolean): SetAuth => ({
  type: Constants.SET_AUTH,
  data: setAuth,
});

export type LoginActionTypes = LogIn | LogOut | SetAuth;
