import {setMenuItem} from '../../redux/modules/app/actions';

/**
 * @description методы для модуля TabOne
 * @private
 */
const pdfviewer = {};

pdfviewer.onClose = (params) => async (dispatch, getState) => {
  dispatch(setMenuItem('name'));
};

export default pdfviewer;
