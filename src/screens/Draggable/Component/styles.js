import {StyleSheet} from 'react-native';

const set = {
  safeArea: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    // backgroundColor: theme.color.background,
    paddingTop: 40,
  },
  content: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    // color: theme.color.primary,
  },
  list: {
    // backgroundColor: theme.color.background,
  },
};

export default () => StyleSheet.create(set);
