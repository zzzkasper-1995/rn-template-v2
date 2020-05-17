import {Request} from '../library';

export async function getLastSession() {
  return Request(
    '/iss/history/engines/stock/markets/shares/boards/tqbr/securities.json',
    {data: '2020-05-15'},
  );
}
