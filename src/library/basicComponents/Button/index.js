import React from 'react';
import {TouchableOpacity, Keyboard, TouchableHighlight} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
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
const Button = (props: btnType) => {
  const {type, isSpring, onPress, keyDismiss, ...other} = props;

  const handleOnPress = () => {
    if (keyDismiss) {
      requestAnimationFrame(Keyboard.dismiss);
    }
    if (onPress) {
      onPress();
    }
  };

  switch (type) {
    case 'link': {
      return <LinkBtn {...other} onPress={handleOnPress} />;
    }
    case 'scale': {
      return (
        <ScaleBtn {...other} isSpring={isSpring} onPress={handleOnPress} />
      );
    }
    case 'full': {
      return <FullBtn {...other} onPress={handleOnPress} />;
    }
    case 'fullG': {
      return <FullGradientBtn {...other} onPress={handleOnPress} />;
    }
    case 'ripple': {
      return <RectButton {...other} onPress={handleOnPress} />;
    }
    case 'fullRipple': {
      return <FullRippleBtn {...other} onPress={handleOnPress} />;
    }
    case 'fullScale': {
      return (
        <FullScaleBtn {...other} isSpring={isSpring} onPress={handleOnPress} />
      );
    }
    case 'darkPress': {
      return (
        <TouchableHighlight
          underlayColor={'#DDDDDD'}
          {...other}
          activeOpacity={1}
          onPress={handleOnPress}
        />
      );
    }
    default: {
      return <TouchableOpacity {...other} onPress={handleOnPress} />;
    }
  }
};

Button.defaultProps = {
  activeOpacity: 0.75,
};

export default Button;
