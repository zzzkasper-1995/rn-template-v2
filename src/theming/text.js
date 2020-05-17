import simple from './simple';
import {Theme} from '../library';

const Color = Theme.getColors();

export default {
  normal: {
    color: Color.primaryText,
    fontSize: 16,
  },
  smallBold: {
    fontSize: 10,
    fontWeight: simple.fontWeight.bold,
    color: Color.BLACK_LIGHT,
    opacity: 0.5,
  },
  primaryText: {
    fontSize: 16,
    fontWeight: simple.fontWeight.bold,
    color: Color.primaryText,
  },
};
