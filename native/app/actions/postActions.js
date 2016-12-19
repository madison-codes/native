import { types } from './actionTypes';

export const actionCreators = {
  getPosts: (data) => {
    return { type: types.GET_POSTS, data: data };
  }
};
