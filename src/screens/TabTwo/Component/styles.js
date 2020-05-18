import {StyleSheet} from 'react-native';

export default (theme) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    mainContainer: {
      flex: 1,
      backgroundColor: theme.color.background,
      paddingTop: 40,
    },
    content: {
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      color: theme.color.primary,
    },
    list: {
      backgroundColor: theme.color.background,
    },
  });
