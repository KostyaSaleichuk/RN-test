import {testData} from '../services/authService';

//doesn't work yet
export const loggingIn = state => dispatch => {
  if (testData.email == state.email && testData.password == state.password) {
    dispatch();
  }
  dispatch(loggingIn(state));
};
