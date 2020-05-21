import React, {PureComponent} from 'react';
import {Animated, Easing} from 'react-native';

type Props = {
  start?: Number,
  end?: Number,
  duration?: Number,
};

export default class WaveView extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.opacity = new Animated.Value(0);
  }

  componentDidMount() {
    this.animateShow();
  }

  animateShow = (toValue) => {
    const {duration} = this.props;

    Animated.timing(this.opacity, {
      toValue,
      duration,
      easing: Easing.sin,
      useNativeDriver: true,
    }).start(() => {
      if (toValue > 0) {
        this.animateShow(0);
      } else {
        this.animateShow(1);
      }
    });
  };

  render() {
    const {style, children, start, end} = this.props;

    const opacity = {
      opacity: this.opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [start, end],
      }),
    };

    return <Animated.View style={[style, opacity]}>{children}</Animated.View>;
  }
}

WaveView.defaultProps = {
  end: 1,
  start: 0.6,
  duration: 1000,
};
