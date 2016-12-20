import * as types from '../actions/actionTypes';
import Immutable from 'immutable';

const initialState = Immutable.List( [] );

const posts = (state = initialState, action) => {
  const { posts } = state;
  const { type, data } = action;
  switch (type) {
    case 'GET_POSTS':
      return Immutable.List(data);
  }
  return state;
};

export default posts
