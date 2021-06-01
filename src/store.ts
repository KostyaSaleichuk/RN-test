import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {RootReducer} from './reducers/RootReducer'

export const store = createStore(RootReducer, applyMiddleware(thunk));
