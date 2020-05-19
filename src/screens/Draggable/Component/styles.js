
import {Theme} from '../../../library/functional';

export default Theme.create({
  safeArea: {
    flex: 3,
  },
  mainContainer: {
    flex: 1,
    // backgroundColor: theme.color.background,
    paddingTop: 40,
  },
  content: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    // color: theme.color.primary,
  },
  list: {
    // backgroundColor: theme.color.background,
  },
});
