/*
 * @file: index.js
 * @description: It Contain Product Account Related Action Creators.
 * @author: Jasdeep Singh
 */

import * as TYPE from '../constants';
import ApiClient from '../../api-client';
import message from '../../utilities/message';

export const add_todo = (text) => ({ type: TYPE.ADD_TODO, text });
export const update_todo = (data) => ({ type: TYPE.UPDATE_TODO, data });
export const delete_todo = id => ({ type: TYPE.DELETE_TODO, id });
// Thunk Action Creators For Api
/****** action creator for login ********/
// export const getProductListing = (cb) => {
//     return dispatch => {
//         ApiClient.get('https://eh6tw7697k.execute-api.us-east-1.amazonaws.com/demo').then(result => {
//             if (result && result.products) {
//                // dispatch(product_list(result.products));
//                   cb({
//                     status: true,
//                     message: message.success
//                   });
//                 } else {        
//                   cb({
//                     status: false,
//                     message: message.error
//                   });
//                 }
//         });
//     };
// };