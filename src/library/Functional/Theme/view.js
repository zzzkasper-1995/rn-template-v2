import {Platform, StyleSheet} from 'react-native';
import Color from './color/default';

export default {
  screen: {
    flex: 1,
    backgroundColor: Color.BACKGROUND,
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
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
  icon: {
    width: 16,
    height: 16,
  },
  textInputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Color.BACKGROUND,
    height: 36,
    borderRadius: 4,
    paddingVertical: Platform.OS === 'ios' ? 8 : 0,
    paddingHorizontal: 8,
  },

  supportStatusBarView: {
    zIndex: 5,
    // backgroundColor: Color.HEADER,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
};
