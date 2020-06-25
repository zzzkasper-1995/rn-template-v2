import {combineReducers} from 'redux';
import app from './modules/app/reducers';
import coins from './modules/coins/reducers';
import loaderStatus from './modules/loaderStatus/reducers';

// объеденяем все редьюсеры в один
export default combineReducers({
  app,
  coins,
  loaderStatus,
});
