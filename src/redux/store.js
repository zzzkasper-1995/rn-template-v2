import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage';

import config from '../config';
import rootReducer from './combine';

const persistConfig = {
  key: 'root',
  stateReconciler: autoMergeLevel2,
  whitelist: config.redux.whitelist,
  timeout: null,
  storage: AsyncStorage,
};

export default function configureStore() {
  let enhacers;

  if (config.redux.isLogger && __DEV__ === true) {
    enhacers = applyMiddleware(thunk, createLogger({collapsed: true}));
  } else {
    enhacers = applyMiddleware(thunk);
  }

  const store = createStore(
    persistReducer(persistConfig, rootReducer),
    undefined,
    enhacers,
  );
  const persistor = persistStore(store);
  return {store, persistor};
}
