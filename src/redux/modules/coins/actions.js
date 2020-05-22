export const ADD_COINS = 'coins/ADD_COINS';

/**
 * добавляем монеты в хранилище
 * @param {Object} set - массив монет
 */
export function addCoins(set: Object) {
  return {
    type: ADD_COINS,
    payload: {set},
  };
}
