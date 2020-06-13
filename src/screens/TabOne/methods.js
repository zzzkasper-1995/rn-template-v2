import {setMenuItem} from '../../redux/modules/app/actions';
import {Log} from '../../library/functional';
import {getTopCapful} from '../../api/rest/cryptocompare';
import {addCoins} from '../../redux/modules/coins/actions';
import {transition} from '../../routes';
import {openDetails} from '../../routes/action';

/**
 * @description методы для модуля TabOne
 * @private
 */
const methods = {};

methods.onClose = (params) => async (dispatch, getState) => {
  dispatch(setMenuItem('name'));
};

/** Загружаем топ монет по капитализации */
methods.onLoadTopCoin = (params) => async (dispatch, getState) => {
  Log('methods.onLoadTopCoin', params);

  const res = await getTopCapful();

  const coinSet = res.Data.reduce((prev, el) => {
    const key = el.CoinInfo.Name;
    prev[key] = el;
    return prev;
  }, {});

  dispatch(addCoins(coinSet));
};

methods.onOpenDetails = (params) => async (dispatch, getState) => {
  Log('methods.onOpenDetails', params);
  transition(openDetails);
};

export default methods;
