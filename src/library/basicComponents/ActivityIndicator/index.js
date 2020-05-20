import React from 'react';
import {ActivityIndicator as UIActivityIndicator} from 'react-native';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import HorizontalIndicator from './horizontal-indicator';

// For more details,
// https://reactnative.dev/docs/activityindicator
// https://github.com/n4kz/react-native-indicators

type Props = {
  type?:
    | 'ball'
    | 'dot'
    | 'bar'
    | 'material'
    | 'pacman'
    | 'pulse'
    | 'skype'
    | 'horizontal',
  size?: 'small' | 'large',
  //   ...ActivityIndicatorProps
};

/** Displays a circular loading indicator */
const ActivityIndicator = (props: Props) => {
  const {type, ...other} = this.props;

  switch (type) {
    case 'ball': {
      return <BallIndicator {...other} />;
    }
    case 'dot': {
      return <DotIndicator {...other} />;
    }
    case 'bar': {
      return <BarIndicator {...other} />;
    }
    case 'material': {
      return <MaterialIndicator {...other} />;
    }
    case 'pacman': {
      return <PacmanIndicator {...other} />;
    }
    case 'pulse': {
      return <PulseIndicator {...other} />;
    }
    case 'skype': {
      return <SkypeIndicator {...other} />;
    }
    case 'horizontal': {
      return <HorizontalIndicator {...other} />;
    }
    case 'wave': {
      return <WaveIndicator {...other} />;
    }
    default: {
      return <UIActivityIndicator {...other} />;
    }
  }
};

export default ActivityIndicator;
