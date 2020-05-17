import {StyleSheet} from 'react-native';
import {Theme} from '../library';

export default {
  screen: {
    flex: 1,
    backgroundColor: Theme.getColors().background,
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,

    elevation: 6,
  },
  icon: {
    width: 16,
    height: 16,
  },
};
