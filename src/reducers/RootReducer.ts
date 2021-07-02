import {combineReducers} from 'redux';

import {authReducer} from './authReducer';
import {AuthState} from './authReducer';
import {feedReducer} from './feedReducer';
import {FeedState} from './feedReducer';
import {themeReducer} from './themeReducer';
import {ThemeState} from './themeReducer';

export const RootReducer = combineReducers({
  authReducer,
  feedReducer,
  themeReducer,
});

export interface AppState extends AuthState, FeedState {
  authReducer: AuthState;
  feedReducer: FeedState;
  themeReducer: ThemeState;
}
