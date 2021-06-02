import { ON_CHANGE_EMAIL, ON_CHANGE_PASSWORD, LOG_IN, LOG_OUT } from "./types";
//Login actions

export const onChangeEmail = (email: any) => ({
  type: ON_CHANGE_EMAIL,
  payload: email,
});

export const onChangePassword = (password: any) => ({
  type: ON_CHANGE_PASSWORD,
  payload: password,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const logOut = () => ({
  type: LOG_OUT,
});

//feeds actions

export const LOAD_MORE = () => ({
  type: LOAD_MORE,
});

export const HANDLE_REFRESH = () => ({
  type: HANDLE_REFRESH,
});
