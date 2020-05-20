import React from 'react';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ContentFull from './contentFull';
import {fullBtnStyles as styles} from './styles';
import {fullGradientBtnType} from './types';

// For more details,
// https://github.com/react-native-community/react-native-linear-gradient

/** Обычная кнопка c градиентным фоном */
const FullGradientBtn = (props: fullGradientBtnType) => {
  const {
    colors = [],
    onPress,
    style,
    isLoadBar,
    disabled,
    activeOpacity,
    text,
    icon,
    activityIndicator,
    iconStyle,
    textStyle,
  } = props;

  const styleFull = [
    styles.btnFull,
    style,
    (disabled || isLoadBar) && {opacity: activeOpacity},
  ];

  return (
    <TouchableOpacity
      style={styleFull}
      onPress={onPress}
      activeOpacity={activeOpacity}
      disabled={isLoadBar || disabled}>
      <LinearGradient colors={colors} style={styles.gradient} />
      <ContentFull
        text={text}
        icon={icon}
        isLoadBar={isLoadBar}
        activityIndicator={activityIndicator}
        iconStyle={iconStyle}
        textStyle={textStyle}
      />
    </TouchableOpacity>
  );
};

export default FullGradientBtn;
