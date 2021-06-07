import {Constants} from './types';

interface OnChangeEmail {
  type: typeof Constants.ON_CHANGE_EMAIL;
  payload: string;
}

export const onChangeEmail = (email: string): OnChangeEmail => ({
  type: Constants.ON_CHANGE_EMAIL,
  payload: email,
});

interface OnChangePassword {
  type: typeof Constants.ON_CHANGE_PASSWORD;
  payload: string;
}

export const onChangePassword = (password: string): OnChangePassword => ({
  type: Constants.ON_CHANGE_PASSWORD,
  payload: password,
});

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

export type LoginActionTypes =
  | OnChangeEmail
  | OnChangePassword
  | LogIn
  | LogOut;
