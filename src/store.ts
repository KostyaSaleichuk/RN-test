import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {loginReducer} from './reducers/loginReducer'

export const store = createStore(loginReducer, applyMiddleware(thunk));
