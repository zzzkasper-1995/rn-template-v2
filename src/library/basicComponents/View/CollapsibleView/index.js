import React, {Component} from 'react';
import Collapsible from 'react-native-collapsible';
import {View} from 'react-native';

type Props = {
  isShow: Boolean,
  isDidMountAnimated: Boolean,
};

class CollapsibleView extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isAnimated: !props.isDidMountAnimated,
    };
  }

  componentDidMount() {
    const {isDidMountAnimated} = this.props;
    if (isDidMountAnimated) {
      this.setState({isAnimated: true});
    }
  }

  render() {
    // Log('CollapsibleView', this.props, this.state);
    const {isAnimated} = this.state;
    const {isShow, children, duration, ...other} = this.props;

    const collapsed = !(isShow && isAnimated);

    return (
      <Collapsible collapsed={collapsed} duration={duration || 300}>
        <View {...other}>{children}</View>
      </Collapsible>
    );
  }
}

export default CollapsibleView;
