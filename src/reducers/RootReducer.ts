import {combineReducers} from 'redux';

import {authReducer} from './authReducer';
import {AuthState} from './authReducer';
import {feedReducer} from './feedReducer';
import {FeedState} from './feedReducer';

export const RootReducer = combineReducers({authReducer, feedReducer});

export interface AppState extends AuthState, FeedState {
  feedReducer: FeedState;
}
