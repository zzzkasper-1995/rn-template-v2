import {Theme} from '../../../../library/functional';
import {SimpleProperties} from '../../../../theming';

export default Theme.create({
  main: {
    borderBottomWidth: 1,
    borderColor: '#bcc6cf',
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
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f1f2f7',
    marginRight: 8,
  },
});
