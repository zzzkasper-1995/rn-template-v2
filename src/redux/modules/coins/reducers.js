import {ADD_COINS} from './actions';
import config from '../../../config';

/**
 * menuItem - текущий выбранный раздел меню навигации
 */
const initialState = {
  link: 'https://www.cryptocompare.com',
  set: {},
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case ADD_COINS:
      const {set} = action.payload;

      const resSet = {...state.set, ...set};
      return {...state, set: resSet};
    default:
      return state;
  }
}
