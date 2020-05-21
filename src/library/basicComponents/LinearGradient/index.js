import React from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

// For more details,
// https://github.com/react-native-community/react-native-linear-gradient

/** Градиент */
const WrapperLinearGradient = (props: LinearGradientProps) => {
  return (
    <LinearGradient
      locations={[0, 1]}
      start={{x: 0, y: 1}}
      end={{x: 0, y: 0}}
      colors={['rgba(255,255,255, 1)', 'rgba(255,255,255, 0)']}
      pointerEvents="none"
      {...props}
    />
  );
};

export default WrapperLinearGradient;
