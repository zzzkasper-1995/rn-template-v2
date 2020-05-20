import React from 'react';
import {TouchableOpacity, Keyboard} from 'react-native';
import RectButton from 'react-native-gesture-handler';
import Link from './link';
import Full from './full';
import FullG from './fullG';
import ScaleButton from './scale';
import FullScale from './fullScale';
import FullAndroid from './fullAndroid';
import {btnType} from './types';

class Button extends React.PureComponent<btnType> {
  constructor(props) {
    super(props);
  }

  handleOnPress = () => {
    const {onPress, keyDismiss} = this.props;

    if (keyDismiss) {
      requestAnimationFrame(Keyboard.dismiss);
    }
    if (onPress) {
      onPress();
    }
  };

  render() {
    const {type, isSpring, ...other} = this.props;

    switch (type) {
      case 'link': {
        return <Link {...other} onPress={this.handleOnPress} />;
      }
      case 'scale': {
        return (
          <ScaleButton
            {...other}
            isSpring={isSpring}
            onPress={this.handleOnPress}
          />
        );
      }
      case 'full': {
        return <Full {...other} onPress={this.handleOnPress} />;
      }
      case 'fullG': {
        return <FullG {...other} onPress={this.handleOnPress} />;
      }
      case 'ripple': {
        return <RectButton {...other} onPress={this.handleOnPress} />;
      }
      case 'fullRipple': {
        return <FullAndroid {...other} onPress={this.handleOnPress} />;
      }
      case 'fullScale': {
        return (
          <FullScale
            {...other}
            isSpring={isSpring}
            onPress={this.handleOnPress}
          />
        );
      }
      default: {
        return <TouchableOpacity {...other} onPress={this.handleOnPress} />;
      }
    }
  }
}

Button.defaultProps = {
  activeOpacity: 0.75,
};

export {Button};
