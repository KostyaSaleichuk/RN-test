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

interface AddData {
  type: Constants.ADD_DATA;
  data: Array<{download_url: string; author: string}>;
}

export const addData = (data: AddData) => ({
  type: Constants.ADD_DATA,
  data: data,
});

interface RemoveData {
  type: Constants.REMOVE_DATA;
}

export const removeData = (): RemoveData => ({
  type: Constants.REMOVE_DATA,
});

export type FeedActionTypes =
  | Refresh
  | StartLoading
  | StopLoading
  | SetPage
  | AddData
  | RemoveData;
