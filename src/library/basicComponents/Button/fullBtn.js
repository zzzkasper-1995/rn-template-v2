import React from 'react';
import {TouchableOpacity} from 'react-native';
import ContentFull from './contentFull';
import {fullBtnType} from './types';
import {fullBtnStyles as styles} from './styles';

/** Обычная кнопка */
const Full = (props: fullBtnType) => {
  const {
    onPress,
    color,
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
    color && {backgroundColor: color},
    (disabled || isLoadBar) && {opacity: activeOpacity},
  ];

  return (
    <TouchableOpacity
      style={styleFull}
      onPress={onPress}
      activeOpacity={activeOpacity}
      disabled={isLoadBar || disabled}>
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

export default Full;
