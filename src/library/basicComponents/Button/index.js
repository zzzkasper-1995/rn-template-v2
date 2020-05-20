import React from 'react';
import {TouchableOpacity, Keyboard} from 'react-native';
import RectButton from 'react-native-gesture-handler';
import LinkBtn from './linkBtn';
import FullBtn from './fullBtn';
import FullGradientBtn from './fullGradientBtn';
import ScaleBtn from './scaleBtn';
import FullScaleBtn from './fullScaleBtn';
import FullRippleBtn from './fullRippleBtn';
import {btnType} from './types';

// works using
// https://reactnative.dev/docs/touchableopacity#__docusaurus
// https://software-mansion.github.io/react-native-gesture-handler/docs/component-buttons.html#rectbutton
// https://github.com/react-native-community/react-native-linear-gradient

/** Кнопка */
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
        return <LinkBtn {...other} onPress={this.handleOnPress} />;
      }
      case 'scale': {
        return (
          <ScaleBtn
            {...other}
            isSpring={isSpring}
            onPress={this.handleOnPress}
          />
        );
      }
      case 'full': {
        return <FullBtn {...other} onPress={this.handleOnPress} />;
      }
      case 'fullG': {
        return <FullGradientBtn {...other} onPress={this.handleOnPress} />;
      }
      case 'ripple': {
        return <RectButton {...other} onPress={this.handleOnPress} />;
      }
      case 'fullRipple': {
        return <FullRippleBtn {...other} onPress={this.handleOnPress} />;
      }
      case 'fullScale': {
        return (
          <FullScaleBtn
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
