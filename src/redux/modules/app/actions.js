export const SET_MENU_ITEM = 'app/SET_MENU_ITEM';

/**
 * метод изменяет текущий выбранный пункт меню навигации
 * @param {string} name - наименование пункта меню
 */
export function setMenuItem(name: string) {
  return {
    type: SET_MENU_ITEM,
    payload: {name},
  };
}
