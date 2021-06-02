import { combineReducers } from "redux";

import { loginReducer } from "./loginReducer";
import { feedsReducer } from "./feedsReducer";

export const RootReducer = combineReducers({ loginReducer, feedsReducer });