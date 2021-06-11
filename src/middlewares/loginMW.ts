import {Dispatch} from 'redux';

import {AppState} from '../reducers/RootReducer';
import {logIn} from '../actions/loginActions';
import {testData} from '../services/authService';

export const loggingIn = (state: AppState) => {
  return (dispatch: Dispatch) => {
    if (state.email == testData.email && state.password == testData.password) {
      dispatch(logIn());
    }
  };
};
