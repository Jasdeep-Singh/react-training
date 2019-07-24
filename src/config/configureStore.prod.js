/*
 * @file: configureStore.prod.js
 * @description: Configure/creating redux store with thunk,reducer etc
 * @author: Jasdeep Singh
 * */

import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reducers from '../reducers';

export default history => {
  const store = createStore(reducers, compose(applyMiddleware(thunk, routerMiddleware(history))));
  const persistor = persistStore(store);
  return { persistor, store };
};
