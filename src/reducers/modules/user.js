/*
 * @file: user.js
 * @description: Reducers and actions for store/manipulate user's  data
 * @author: Jasdeep Singh
*/

import * as TYPE from '../../actions/constants';

/******** Reducers ********/
const initialState = {
    userData: {},
    isLogin: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TYPE.LOGIN_SUCCESS:
      return {...state, ...action.data};
    default:
      return state;
  }
}