import {SET_MENU_ITEM} from './actions';

/**
 * menuItem - текущий выбранный раздел меню навигации
 */
const initialState = {
  menuItem: '',
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case SET_MENU_ITEM:
      return {...state, menuItem: action.payload};
    default:
      return state;
  }
}
