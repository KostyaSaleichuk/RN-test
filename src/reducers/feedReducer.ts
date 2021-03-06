import {Constants} from '../actions/types';
import {FeedActionTypes} from '../actions/feedActions';

export interface FeedState {
  isLoading: boolean;
  data: Array<{download_url: string; author: string}>;
  page: number;
}

const initialState: FeedState = {
  isLoading: false,
  data: [],
  page: 1,
};

export const feedReducer = (state = initialState, action: FeedActionTypes) => {
  switch (action.type) {
    case Constants.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case Constants.STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case Constants.ADD_POSTS:
      return {
        ...state,
        data: [...state.data].concat(action.data),
      };
    case Constants.REFRESH:
      return {
        ...state,
        page: 1,
        data: [],
      };
    case Constants.ADD_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    default:
      return state;
  }
};
