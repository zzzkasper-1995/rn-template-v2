import {setMenuItem} from '../../redux/modules/app/actions';
import {Log} from '../../library/functional';
import {getTopCapful} from '../../api/rest/cryptocompare';
import {addCoins} from '../../redux/modules/coins/actions';

/**
 * @description методы для модуля
 * @private
 */
const methods = {};

methods.onClose = (params) => async (dispatch, getState) => {
  dispatch(setMenuItem('name'));
};

export default methods;
