import {Theme} from '../../../../library/functional';
import {SimpleProperties} from '../../../../theming';

export default Theme.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '$background',
    paddingTop: 40,
  },
  textView: {
    flex: 1,
    marginRight: SimpleProperties.indent.normal,
    justifyContent: 'flex-start',
  },
  content: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#bcc6cf',
    flexDirection: 'row',
    height: SimpleProperties.itemHeight.big,
    marginHorizontal: SimpleProperties.indent.normal,
    alignItems: 'center',
  },
  tiket: {
    fontWeight: SimpleProperties.fontWeight.semibold,
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
