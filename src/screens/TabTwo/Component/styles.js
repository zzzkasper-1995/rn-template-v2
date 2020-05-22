import {Theme} from '../../../library/functional';
import {SimpleProperties} from '../../../theming';

export default Theme.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'red',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '$background',
  },
  content: {
    // alignItems: 'center',
    // backgroundColor: 'red',
  },
  text: {
    fontSize: 20,
    color: '$primary',
  },
  list: {
    backgroundColor: '$background',
  },
  item: {
    marginBottom: SimpleProperties.indent.normal,
  },
});
