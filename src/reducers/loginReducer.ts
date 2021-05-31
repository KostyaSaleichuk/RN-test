import {ON_CHANGE_EMAIL, ON_CHANGE_PASSWORD, LOG_IN, LOG_OUT} from '../actions/actions';
import {loginUser} from '../middlewares/loginMW';

const initialState = {
    isLoggedIn: false,
    email: '',
    password: '',
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_CHANGE_EMAIL:
        return{
            ...state,
            email:email.concat(email),
        };
        case ON_CHANGE_PASSWORD:
        return{
            ...state,
            password:password.concat(password),
        };
        case LOG_IN:
        return{
            loginUser,
        };
        case LOG_OUT:
        return{
            ...state,
            isLoggedIn: false,
        };
        default:
            return state;
    };
};
