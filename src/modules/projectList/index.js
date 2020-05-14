import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import Component from './Component';
// import * as appAction from '../reducers/app-reducer'
// import { menuItemsSelector } from '../selectors/app-selectors'

function stateToProps(state) {
  return {
    // menuItem: menuItemsSelector(state),
  };
}

function dispatchToProps(dispatch) {
  return {
    // setMenuItem: bindActionCreators(appAction, dispatch).setMenuItem,
  };
}

export default connect(stateToProps, dispatchToProps)(Component);
