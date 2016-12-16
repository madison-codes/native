import { combineReducers } from 'redux';
import user from './user';
import allData from './grabData'

const reducers = combineReducers({
  user,
  allData
});

export default reducers;
