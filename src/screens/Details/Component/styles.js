import {Theme} from '../../../library/functional';
import {SimpleProperties} from '../../../theming';

export default Theme.create({
  safeArea: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '$background',
    paddingTop: 40,
  },

  main: {},
  content: {
    alignItems: 'center',
  },
  list: {
    backgroundColor: '$background',
  },
  item: {
    marginBottom: SimpleProperties.indent.normal,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f1f2f7',
    marginRight: 8,
  },
});
