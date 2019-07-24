/*
 * @file: App.js
 * @description: App Configration
 * @author: Jasdeep Singh
 * */
import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from './config';
import Routers from './routers';

export const history = createBrowserHistory();
/************ store configration *********/
const { store } = configureStore(history);

const App = () => {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
};

export default App;
