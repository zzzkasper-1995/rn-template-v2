import React from 'react';
import {Animated, TouchableOpacity} from 'react-native';
import {scaleType} from './types';

const DURATION = 200;

/** При нажатии отдаляется, когда пользователь отпускает , то кнопка возвращается на место */
class ScaleBtn extends React.PureComponent<scaleType> {
  constructor(props) {
    super(props);
    this.scaleValue = new Animated.Value(1);
  }

  animateBig = () => {
    Animated.timing(this.scaleValue, {
      toValue: this.props.max,
      duration: DURATION,
      useNativeDriver: true,
    }).start();
  };

  animateBigSpring = () => {
    Animated.spring(this.scaleValue, {
      toValue: this.props.max,
      friction: 4,
      tension: 120,
      useNativeDriver: true,
    }).start();
  };

  animateLitle = () => {
    Animated.timing(this.scaleValue, {
      toValue: this.props.min,
      duration: DURATION,
      useNativeDriver: true,
    }).start();
  };

  handlePressIn = () => {
    this.animateLitle();
    this.props.onPressIn();
  };

  handlePressOut = () => {
    const {isSpring} = this.props;

    if (isSpring) {
      this.animateBigSpring();
    } else {
      this.animateBig();
    }
    this.props.onPressOut();
  };

  render() {
    const {
      onPressIn,
      onPressOut,
      onPress,
      containerStyle,
      ...other
    } = this.props;

    const scale = {
      transform: [
        {
          scale: this.scaleValue,
        },
      ],
    };

    return (
      <Animated.View style={[scale, containerStyle]}>
        <TouchableOpacity
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}
          onPress={onPress}
          {...other}
          activeOpacity={1}
        />
      </Animated.View>
    );
  }
}

ScaleBtn.defaultProps = {
  onPressIn: () => {},
  onPressOut: () => {},
  onPress: () => {},
  min: 0.92,
  max: 1,
};

export default ScaleBtn;
