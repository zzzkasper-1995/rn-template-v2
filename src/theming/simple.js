import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

export default {
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: Platform.OS === 'ios' ? '600' : '700',
    bold: Platform.OS === 'ios' ? '700' : '700',
    black: Platform.OS === 'ios' ? '900' : '900',
  },
  opacity: {
    normal: 0.3,
    super: 0.1,
  },
  screenSize: {
    width,
    height,
  },
  indent: {
    normal: 16,
    mini: 8,
  },
  itemHeight: {
    normal: 48,
    little: 40,
  },
  fontSize: {
    normal: 17,
    medium: 14,
    mini: 12,
  },
  border: {
    normal: 1,
  },
  borderRadius: {
    normal: 4,
  },
};
