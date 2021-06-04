import {Constants} from './types';
import {
  IOnChangeEmail,
  IOnChangePassword,
  ILogIn,
  ILogOut,
} from '../interfaces';

export const onChangeEmail = (email: string): IOnChangeEmail => ({
  type: Constants.ON_CHANGE_EMAIL,
  payload: email,
});

export const onChangePassword = (password: string): IOnChangePassword => ({
  type: Constants.ON_CHANGE_PASSWORD,
  payload: password,
});

export const logIn = (): ILogIn => ({
  type: Constants.LOG_IN,
});

export const logOut = (): ILogOut => ({
  type: Constants.LOG_OUT,
});
