import * as types from '../actions/actionTypes';
import Immutable from 'immutable';

const initialState = {
  posts: []
};

const posts = (state = initialState, action) => {
  const { posts } = state;
  const { type, data } = action;

  switch (type) {
    case 'GET_POSTS':
      return {
        ...state,
        posts: data
      }
  }
  return state
}

export default posts
