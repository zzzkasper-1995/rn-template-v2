import {combineReducers} from 'redux';
import app from './modules/app/reducers';
import coins from './modules/coins/reducers';

// объеденяем все редьюсеры в один
export default combineReducers({
  app,
  coins,
});
