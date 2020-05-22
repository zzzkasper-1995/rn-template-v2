import {setMenuItem} from '../../redux/modules/app/actions';
import {Log} from '../../library/functional';
import {getTopCapful} from '../../api/rest/cryptocompare';

/**
 * @description методы для модуля TabOne
 * @private
 */
const methods = {};

methods.onClose = (params) => async (dispatch, getState) => {
  dispatch(setMenuItem('name'));
};

/** Загружаем топ монет по капитализации */
methods.loadTopCoin = (params) => async (dispatch, getState) => {
  Log('methods.loadTopCoin', params);

  const res = await getTopCapful();
  console.log('getTopCapful res', res);
};

export default methods;
