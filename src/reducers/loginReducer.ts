import {
  onChangeEmail,
  onChangePassword,
  logIn,
  logOut,
} from "../actions/actions";

const initialState = {
  isLoggedIn: false,
  email: "",
  password: "",
};

export const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case onChangeEmail:
      return {
        ...state,
        email: action.payload,
      };
    case onChangePassword:
      return {
        ...state,
        password: action.payload,
      };
    case logIn:
      return {
        ...state,
        isLoggedIn: true,
      };
    case logOut:
      return {
        state,
      };
    default:
      return state;
  }
};
