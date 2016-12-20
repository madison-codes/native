import * as types from '../actions/actionTypes';
import Immutable from 'immutable';

const initalState = Immutable.Map({});

const user = (state = initalState, action) => {
  const { user } = state;
  const { type, data } = action;

  switch(type) {
     case 'GET_USER':
     return Immutable.Map(data);

   }
   return state;
 };

 export default user
