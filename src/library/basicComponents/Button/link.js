import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {linkBtnStyles as styles} from './styles';
import {linkType} from './types';

/** Кнопка с офрмлением ссылки */
const Link = (props: linkType) => {
  const {onPress, text, style, textStyle, activeOpacity} = props;

  const styleSimple = [styles.container, style];
  const textStyleSimple = [styles.text, textStyle];

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={styleSimple}>
      <Text style={textStyleSimple}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Link;
