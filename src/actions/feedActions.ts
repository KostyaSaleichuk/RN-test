import {Constants} from './types';

interface Refresh {
  type: typeof Constants.REFRESH;
}

export const refresh = (): Refresh => ({
  type: Constants.REFRESH,
});

interface StartLoading {
  type: typeof Constants.START_LOADING;
}

export const startLoading = (): StartLoading => ({
  type: Constants.START_LOADING,
});

interface StopLoading {
  type: typeof Constants.STOP_LOADING;
}

export const stopLoading = (): StopLoading => ({
  type: Constants.STOP_LOADING,
});

interface SetPage {
  type: typeof Constants.ADD_PAGE;
}

export const setPage = (): SetPage => ({
  type: Constants.ADD_PAGE,
});

interface AddData {
  type: typeof Constants.ADD_DATA;
  data: any[];
}

export const addData = (data: any): AddData => ({
  type: Constants.ADD_DATA,
  data: data,
});

export type FeedActionTypes =
  | Refresh
  | StartLoading
  | StopLoading
  | SetPage
  | AddData;
