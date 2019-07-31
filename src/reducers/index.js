
/*********** Reduceres defined here *********/

import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import { routerReducer as router } from 'react-router-redux';
import encryptor from './encryptor';
import user from './modules/user';
import todo from './modules/todo';

const userPersistConfig = {
  key: 'demo',
  storage: storage,
  transforms: [encryptor],
  blacklist: ['isLoading']
};

export default persistCombineReducers(userPersistConfig, {
  user,
  todo,
  router
});
