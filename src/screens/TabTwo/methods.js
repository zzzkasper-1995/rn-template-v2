import {setMenuItem} from '../../redux/modules/app/actions';
import {Log} from '../../library';
import {transition} from '../../routes/transitionMap';
import {openDraggable} from '../../routes/action';

/**
 * @description методы для модуля TabTwo
 * @private
 */
const methods = {};

methods.onClose = (params) => async (dispatch, getState) => {
  dispatch(setMenuItem('name'));
};

methods.onOpenDraggable = (params) => async (dispatch, getState) => {
  Log('Draggable');
  transition(openDraggable);
};

export default methods;
