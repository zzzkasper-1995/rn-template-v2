import {Request} from '../../../library/functional';
import {getDate} from '../../../library/utils';
import config from '../../../config';

const endPoint = config?.api?.endPoint?.moex;

/** Получить результаты сегодняшней торговой сессии */
export async function getLastSession() {
  return Request(
    endPoint +
      '/iss/history/engines/stock/markets/shares/boards/tqbr/securities.json',
    {data: getDate()},
  );
}
