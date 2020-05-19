import {StyleSheet} from 'react-native';
import {Theme} from '../../../library';

export default Theme.create({
  safeArea: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '$background',
    paddingTop: 40,
  },
  content: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '$primary',
  },
  list: {
    backgroundColor: '$background',
  },
});
