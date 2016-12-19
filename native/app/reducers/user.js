import * as types from '../actions/actionTypes';

const initalState = {
  user: {}
};

const user = (state = initalState, action) => {
  const { user } = state;
  const { type, data } = action;

  switch(type) {
     case 'GET_USER':
     return {
       ...state,
       user: data
      }

  }
       return state;
}
export default user
