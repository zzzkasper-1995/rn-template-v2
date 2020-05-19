import simple from './simple';
import {Theme} from '../library/functional';

export default Theme.create({
  normal: {
    fontSize: 16,
    color: '$primaryText',
  },
  smallBold: {
    fontSize: 10,
    fontWeight: simple.fontWeight.bold,
    opacity: 0.5,
    color: '$primaryText',
  },
  primaryText: {
    fontSize: 16,
    fontWeight: simple.fontWeight.bold,
    color: '$primaryText',
  },
});
