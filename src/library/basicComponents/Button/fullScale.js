import React from 'react';
import ScaleButton from './scale';
import ContentFull from './contentFull';
import {fullScaleBtnType} from './types';
import {fullScaleBtnStyles as styles} from './styles';

// Обычная кнопка, при нажатии отдаляется, когда пользователь отпускает , то кнопка возвращается на место
class FullScale extends React.PureComponent<fullScaleBtnType> {
  render() {
    const {
      onPress,
      isLoadBar,
      isSpring,
      disabled,
      activityIndicator,
      text,
      color,
      icon,
      style,
      containerStyle,
      iconStyle,
      textStyle,
      activeOpacity,
      onPressIn,
      onPressOut,
      min,
      max,
    } = this.props;

    const styleFull = [
      styles.btnFull,
      style,
      color && {backgroundColor: color},
      (disabled || isLoadBar) && {opacity: activeOpacity},
    ];

    return (
      <ScaleButton
        min={min}
        max={max}
        isSpring={isSpring}
        disabled={isLoadBar || disabled}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={styleFull}
        containerStyle={containerStyle}>
        <ContentFull
          text={text}
          icon={icon}
          isLoadBar={isLoadBar}
          activityIndicator={activityIndicator}
          iconStyle={iconStyle}
          textStyle={textStyle}
        />
      </ScaleButton>
    );
  }
}

FullScale.defaultProps = {
  min: 0.95,
};

export default FullScale;
