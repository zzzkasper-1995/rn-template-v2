import {combineReducers} from 'redux';
import app from './modules/app/reducers';

// объеденяем все редьюсеры в один
export default combineReducers({
  app,
});
