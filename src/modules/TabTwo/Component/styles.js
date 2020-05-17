import {StyleSheet} from 'react-native';

export default (theme) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    mainContainer: {
      flex: 1,
      backgroundColor: theme.color.background,
    },
    content: {
      flex: 1,
      justifyContent: 'space-between',
    },
    list: {
      backgroundColor: theme.color.background,
    },
  });
