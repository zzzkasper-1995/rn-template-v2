import React, {PureComponent} from 'react';
import {Animated} from 'react-native';

type Props = {
  isShow: Boolean,
  style: Object,
  duration?: Number,
};

export default class FadeView extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.opacity = new Animated.Value(0);
  }

  componentDidMount() {
    const {isShow} = this.props;

    if (isShow) {
      this.animate(1);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {isShow} = this.props;
    const nextIsShow = nextProps.isShow;

    if (!isShow && nextIsShow) {
      this.animate(1);
    }
    if (isShow && !nextIsShow) {
      this.animate(0);
    }
  }

  animate = (toValue: Boolean) => {
    const {duration} = this.props;

    Animated.timing(this.opacity, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const {style, isShow, ...other} = this.props;

    const opacity = {
      opacity: this.opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
    };

    return (
      <Animated.View
        pointerEvents={!isShow ? 'none' : 'auto'}
        style={[style, opacity]}
        {...other}
      />
    );
  }
}

FadeView.defaultProps = {
  duration: 300,
};
