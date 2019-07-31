/*
 * @file: product.js
 * @description: Reducers and actions for store/manipulate user's  data
 * @author: Jasdeep Singh
*/

import * as TYPE from '../../actions/constants';

/******** Reducers ********/
const initialState = [];
const i = 0;
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TYPE.ADD_TODO:
      return [...state, {id:i+1, text: action.data}];
    default:
      return state;
  }
}