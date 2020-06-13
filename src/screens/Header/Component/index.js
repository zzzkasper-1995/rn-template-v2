import React from 'react';
import Header from './Header';
import {ModuleWrapper, Log} from '../../../library/functional';

type Props = {
  title: Object,
  rightBtn: Object,
  leftBtn: Object,
};

class WixHeader extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    Log('Header props', this.props);
    const {title, subtitle, rightBtn, leftBtn, ...other} = this.props;

    return (
      <Header
        subtitle={subtitle}
        title={title}
        leftItem={leftBtn}
        rightItem={rightBtn}
        {...other}
      />
    );
  }
}

export default ModuleWrapper(WixHeader);
