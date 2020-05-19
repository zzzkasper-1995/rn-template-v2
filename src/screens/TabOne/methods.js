import {setMenuItem} from '../../redux/modules/app/actions';
import {getLastSession} from '../../api/request';
import {Log} from '../../library/functional';

/**
 * @description методы для модуля TabOne
 * @private
 */
const methods = {};

methods.onClose = (params) => async (dispatch, getState) => {
  dispatch(setMenuItem('name'));
};

methods.loadingLastSession = (params) => async (dispatch, getState) => {
  Log('methods.loadingLastSession', params);

  getLastSession();
};

export default methods;
