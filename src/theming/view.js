import {Theme} from '../library/functional';
import simple from './simple';

/** Базовые стили для View */
export default Theme.create({
  screen: {
    flex: 1,
    backgroundColor: '$background',
  },
  absolute: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  canter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.2,

    elevation: 6,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: simple.indent.normal,
    height: simple.itemHeight.normal,
    backgroundColor: '$item',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: simple.indent.normal,
    height: simple.itemHeight.normal,
  },
  icon: {
    width: 16,
    height: 16,
  },
});
