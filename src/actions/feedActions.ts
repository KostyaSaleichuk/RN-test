import {Constants} from './types';

interface Refresh {
  type: Constants.REFRESH;
}

export const refresh = (): Refresh => ({
  type: Constants.REFRESH,
});

interface StartLoading {
  type: Constants.START_LOADING;
}

export const startLoading = (): StartLoading => ({
  type: Constants.START_LOADING,
});

interface StopLoading {
  type: Constants.STOP_LOADING;
}

export const stopLoading = (): StopLoading => ({
  type: Constants.STOP_LOADING,
});

interface SetPage {
  type: Constants.ADD_PAGE;
}

export const setPage = (): SetPage => ({
  type: Constants.ADD_PAGE,
});

interface AddPosts {
  type: Constants.ADD_POSTS;
  data: Array<{download_url: string; author: string}>;
}

export const addPosts = (data: AddPosts) => ({
  type: Constants.ADD_POSTS,
  data: data,
});

export type FeedActionTypes =
  | Refresh
  | StartLoading
  | StopLoading
  | SetPage
  | AddPosts;
