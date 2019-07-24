/*
 * @file: product.js
 * @description: Reducers and actions for store/manipulate user's  data
 * @author: Jasdeep Singh
*/

import * as TYPE from '../../actions/constants';

/******** Reducers ********/
const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TYPE.LISTING:
      return action.data;
    default:
      return state;
  }
}