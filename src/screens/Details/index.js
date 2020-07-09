import {connect} from 'react-redux';
import Component from './Component';
import methods from './methods';
import {bindActionCreators} from 'redux';
import {slGetCoins, slCurrentCoin} from '../../selectors';
// import { menuItemsSelector } from '../selectors/app-selectors'

function stateToProps(state) {
  return {
    info: slCurrentCoin(state),
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators(methods, dispatch);
}

export default connect(stateToProps, dispatchToProps)(Component);
