import {Request} from '../library/functional';
import {getDate} from '../library/utils';

/** Получить результаты сегодняшней торговой сессии */
export async function getLastSession() {
  return Request(
    '/iss/history/engines/stock/markets/shares/boards/tqbr/securities.json',
    {data: getDate()},
  );
}
