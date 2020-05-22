import React, {PureComponent} from 'react';
import {Animated, View} from 'react-native';
import styles from './styles';

const DURATION = 2000;

export default class HorizontalIndicator extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {width: 1, isShow: false};
    this.transform = new Animated.Value(0);
    this.transform2 = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate(this.transform);
    setTimeout(() => this.animate(this.transform2), DURATION / 2);
    requestAnimationFrame(() => this.setState({isShow: true}));
  }

  _onLayout = (event) => {
    this.setState({width: event.nativeEvent.layout.width});
  };

  animate = (animatedValue) => {
    animatedValue.stopAnimation();
    animatedValue.setValue(0);

    Animated.timing(animatedValue, {
      toValue: 1,
      duration: DURATION,
      useNativeDriver: true,
    }).start((e) => {
      if (e.finished) {
        this.animate(animatedValue);
      }
    });
  };

  render() {
    const {style = {}, animating, color} = this.props;
    const {isShow, width} = this.state;

    const translate = {
      transform: [
        {
          scaleX: this.transform.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0.5, 1, 0.5],
          }),
        },
        {
          translateX: this.transform.interpolate({
            inputRange: [0, 1],
            outputRange: [-width * 1.5, width * 1.5],
          }),
        },
      ],
    };

    const translate2 = {
      transform: [
        {
          scaleX: this.transform2.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0.5, 1, 0.5],
          }),
        },
        {
          translateX: this.transform2.interpolate({
            inputRange: [0, 1],
            outputRange: [-width * 1.7, width * 1.7],
          }),
        },
      ],
    };

    if (animating) {
      return (
        <View style={[styles.main, style]} onLayout={this._onLayout}>
          <Animated.View
            style={[
              styles.runer,
              translate,
              isShow && {opacity: 1},
              color && {backgroundColor: color},
            ]}
          />
          <Animated.View
            style={[
              styles.runer,
              translate2,
              isShow && {opacity: 1},
              color && {backgroundColor: color},
            ]}
          />
        </View>
      );
    }
    return null;
  }
}
