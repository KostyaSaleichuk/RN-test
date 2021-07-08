import {Dispatch} from 'redux';

import {getImages} from '../services/imagesRequest';
import {addPosts} from '../actions/feedActions';

export const getData = (page: number) => async (dispatch: Dispatch) => {
  const response = await getImages(page);
  dispatch(addPosts(response));
};
