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
      return [...state, {id:Date.now(), text: action.text}];
      case TYPE.UPDATE_TODO:
        const index = state.findIndex(i => i.id === action.data.id);
        if(index > -1){
          state[index].text = action.data.text; 
        }
        return [...state];
        case TYPE.DELETE_TODO:
            const deletIndex = state.findIndex(i => i.id === action.id);
           if(deletIndex > -1){
            state.splice(deletIndex, 1);
           }
            
        return [...state];
    default:
      return state;
  }
}