
import {Theme} from '../../../library/functional';
import {SimpleProperties} from '../../../theming';

export default Theme.create({
  safeArea: {
    flex: 2,
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
  item: {
    marginBottom: SimpleProperties.indent.normal,
  },
});
