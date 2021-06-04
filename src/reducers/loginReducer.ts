import {LoginActionTypes} from '../interfaces';
import {Constants} from '../actions/types';

interface IInitialState {
  isLoggedIn: boolean;
  email: string;
  password: string;
}

const initialState: IInitialState = {
  isLoggedIn: false,
  email: 'email@email.com',
  password: '123456',
};

export const loginReducer = (
  state = initialState,
  action: LoginActionTypes,
) => {
  switch (action.type) {
    case Constants.ON_CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case Constants.ON_CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case Constants.LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case Constants.LOG_OUT:
      return {
        state,
      };
    default:
      return state;
  }
};
