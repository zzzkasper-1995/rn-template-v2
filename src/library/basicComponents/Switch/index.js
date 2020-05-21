import React from 'react';
import {Switch, SwitchProperties} from 'react-native-gesture-handler';
import {Platform} from 'react-native';

// For more details,
// https://software-mansion.github.io/react-native-gesture-handler/docs/about-handlers.html#using-native-components

/** Переключатель */
const RNSwitch = (props: SwitchProperties) => {
  const {...other} = props;

  return (
    <Switch
      {...other}
      trackColor={Platform.OS !== 'ios' ? {false: '#ddd'} : undefined}
    />
  );
};

export default RNSwitch;
