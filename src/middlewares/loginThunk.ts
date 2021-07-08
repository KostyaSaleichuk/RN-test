import {Dispatch} from 'redux';

import {logOut, setAuth} from '../actions/loginActions';
import {authentication} from '../services/storage/authentication';

export const tryLogin =
  (credentials: {email: string; password: string}) => (dispatch: Dispatch) => {
    const validCreds =
      credentials.email === 'email@email.com' &&
      credentials.password === '12345678';
    if (validCreds) {
      dispatch(setAuth(validCreds));
      authentication.tryLogin();
    }
    return validCreds;
  };

export const logoutHandler = () => (dispatch: Dispatch) => {
  dispatch(logOut());
  authentication.logoutHandler();
};
