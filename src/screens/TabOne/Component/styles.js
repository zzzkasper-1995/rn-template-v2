import {StyleSheet} from 'react-native';
import {Theme} from '../../../library';
import { SimpleProperties } from '../../../theming';

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
  list: {
    backgroundColor: '$background',
  },
  item: {
    marginBottom: SimpleProperties.indent.normal,
  },
});
