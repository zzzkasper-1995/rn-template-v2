export const SET_OPEN_COIN = 'app/SET_OPEN_COIN';

/**
 * метод изменяет информацию о том какая монета сейчас открыта
 * @param {string} tiket - код монеты
 */
export function setOpenCoin(tiket: string) {
  return {
    type: SET_OPEN_COIN,
    payload: {tiket},
  };
}
