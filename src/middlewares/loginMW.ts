import {testData} from '../services/authService';


export const loginUser = () => {
    return(dispatch, getState) => {
        if (testData.email === email && testData.password === password) {
            Object.assign({},state,{ isLoggedIn:true })
        }
    }
};
