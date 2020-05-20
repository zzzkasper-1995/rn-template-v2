import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {fullRippleStyles as styles} from './styles';
import ContentFull from './contentFull';

// For more details,
//https://software-mansion.github.io/react-native-gesture-handler/docs/component-buttons.html#rectbutton

/** Обычная кнопка, при нажатии идет волна */
const FullRippleBtn = (props: fullRippleBtnType) => {
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
    <RectButton
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
    </RectButton>
  );
};

export default FullRippleBtn;
