import {StyleSheet} from 'react-native';
import {Theme} from '../../../library';

export default (theme) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: Theme.getColors().BACKGROUND,
    },
    content: {
      flex: 1,
      justifyContent: 'space-between',
    },
    list: {
      backgroundColor: Theme.getColors().NOTIFY,
    },
  });
