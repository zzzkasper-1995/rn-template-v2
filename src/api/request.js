import {Request, Utils} from '../library';

/** Получить результаты сегодняшней торговой сессии */
export async function getLastSession() {
  return Request(
    '/iss/history/engines/stock/markets/shares/boards/tqbr/securities.json',
    {data: Utils.getDate()},
  );
}
