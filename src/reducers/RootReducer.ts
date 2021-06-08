import {combineReducers} from 'redux';

import {loginReducer} from './loginReducer';
import {feedsReducer} from './feedsReducer';
import {LoginState} from './loginReducer';
import {FeedsState} from './feedsReducer';

export const RootReducer = combineReducers({loginReducer, feedsReducer});

export interface AppState extends LoginState, FeedsState {}
