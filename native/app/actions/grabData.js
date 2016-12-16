import { types } from './actionTypes';

export const grabData = {
  fetchAllData: (data) => {
    return {type: types.GRAB_DATA, allData: data}
  }
};
