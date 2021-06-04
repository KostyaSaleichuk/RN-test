import {Constants} from './actions/types';

export interface IProps {
  props: any;
  [propName: string]: any;
}

export interface IButtonProps {
  text: string;
  onPress: () => void;
}

export interface IInputProps {
  input?: string;
  secureTextEntry?: boolean;
  placeholder: string;
  value: () => void;
  onChangeText: (input: string) => void;
}

export interface IOnChangeEmail {
  type: typeof Constants.ON_CHANGE_EMAIL;
  payload: string;
}

export interface IOnChangePassword {
  type: typeof Constants.ON_CHANGE_PASSWORD;
  payload: string;
}
export interface ILogIn {
  type: typeof Constants.LOG_IN;
}
export interface ILogOut {
  type: typeof Constants.LOG_OUT;
}

export type LoginActionTypes =
  | IOnChangeEmail
  | IOnChangePassword
  | ILogIn
  | ILogOut;
