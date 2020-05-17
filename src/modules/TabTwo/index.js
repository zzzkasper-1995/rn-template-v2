import {connect} from 'react-redux';
import Component from './Component';
import methods from './methods';
import {bindActionCreators} from 'redux';
// import { menuItemsSelector } from '../selectors/app-selectors'

function stateToProps(state) {
  return {
    // menuItem: menuItemsSelector(state),
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators(methods, dispatch);
}

export default connect(stateToProps, dispatchToProps)(Component);
