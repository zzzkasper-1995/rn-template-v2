import {SET_OPEN_COIN} from './actions';

/**
 * menuItem - текущий выбранный раздел меню навигации
 */
const initialState = {
  currentTiket: undefined,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case SET_OPEN_COIN:
      return {...state, currentTiket: action.payload?.tiket};
    default:
      return state;
  }
}
