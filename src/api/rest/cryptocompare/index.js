import {Request, Log} from '../../../library/functional';
import config from '../../../config';

const endPoint = config?.api?.endPoint?.cryptocompare;

type getTopCapfulArg = {
  limit: Number,
  page: Number,
  tsym: String,
};
// получить топ валют по капитализации
export async function getTopCapful(
  params: getTopCapfulArg = {},
): Promise<Array> {
  const {limit = 10, page = 0, tsym = 'USD'} = params;

  const res = Request(endPoint + '/data/top/mktcapfull', {
    limit,
    page,
    tsym,
  });

  return res;
}
