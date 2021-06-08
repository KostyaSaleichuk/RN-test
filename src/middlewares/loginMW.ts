import {Dispatch} from 'redux';

import {AppState} from '../reducers/RootReducer';
import {logIn} from '../actions/loginActions';
import {testData} from '../services/authService';
import {store} from '../store';

export const loggingIn = (state: AppState) => {
  return (dispatch: Dispatch) => {
    console.log(store.getState());
    if (testData.email == state.email && testData.password == state.password) {
      dispatch(logIn());
    }
    throw new Error('You passed wrong data or middleware did not work out.');
  };
};
