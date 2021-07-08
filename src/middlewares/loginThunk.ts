import {Dispatch} from 'redux';

import {logOut, setAuth} from '../actions/loginActions';
import {authentication} from '../services/storage/authentication';

export const tryLogin =
  (credentials: {email: string; password: string}) => (dispatch: Dispatch) => {
    const result =
      credentials.email === 'email@email.com' &&
      credentials.password === '12345678';
    if (result) {
      dispatch(setAuth(result));
      authentication.tryLogin();
    }
    return result;
  };

export const logoutHandler = () => (dispatch: Dispatch) => {
  dispatch(logOut());
  authentication.logoutHandler();
};
