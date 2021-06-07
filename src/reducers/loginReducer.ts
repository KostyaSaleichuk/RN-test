import {Constants} from '../actions/types';
import {LoginActionTypes} from '../actions/loginActions';
interface InitialState {
  isLoggedIn: boolean;
  email: string;
  password: string;
}

const initialState: InitialState = {
  isLoggedIn: false,
  email: '',
  password: '',
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
