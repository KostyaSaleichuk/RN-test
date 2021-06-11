import {combineReducers} from 'redux';

import {authReducer} from './authReducer';
import {feedsReducer} from './feedsReducer';
import {AuthState} from './authReducer';
import {FeedsState} from './feedsReducer';

export const RootReducer = combineReducers({authReducer, feedsReducer});

export interface AppState extends AuthState, FeedsState {}
