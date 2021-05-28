import {LOG_IN, LOG_OUT} from '../actions/actions';
import {testData} from '../services/authService';

const initialState = {
    isLoggedIn: false,
};

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
        return{
            ...state,
            isLoggedIn: true,
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
/*
const func = () => {
    if (testData.email == email && testData.password == password)
    {
        return ...state.isLoggedIn: true
    }
*/