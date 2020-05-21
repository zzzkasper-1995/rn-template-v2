import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainWrap: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },

  contentWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingBottom: 24,
  },
  childrenView: {
    // alignItems: 'center',
  },
  missView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  missViewIos: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalView: {
    // backgroundColor: theme.color.BACKGROUND_CONTRAST,
    margin: 20,
    padding: 20,
    borderRadius: 4,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    // fontWeight: theme.simple.fontWeight.bold,
    marginBottom: 12,
  },
});
