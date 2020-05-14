import {Dimensions} from 'react-native';

import color from './color';
import view from './view';
import text from './text';
import simple from './simple';
import macro from './macro';
import {getConstans} from '../Navigation';

const {width, height} = Dimensions.get('window');

// примерная диагональ экрана
let screenSize;

// iphone 5/SE (4")
if (height > 0) {
  // width: 320, height: 568
  screenSize = 4;
}
// iphone 6 (4.7")
if (height > 568) {
  // width: 375, height: 667
  screenSize = 4.7;
}
// iphone X (5.8")
if (height > 667) {
  // width: 375, height: 812
  screenSize = 5.8;
}
// iphone 11 Pro Max (6.5")
if (height > 812) {
  // width: 414, height: 896
  screenSize = 6.5;
}

const params = {
  screenSize,
  height,
  width,
};

const getSimpleConst = () => {
  return simple;
};

let type;
let callBackUpdateTheme;
let theme = {
  color: color(() => type),
  simple,
  text,
  view,
  macro,
  constans: getConstans(),
};

const setTheme = (typeTheme) => {
  type = typeTheme;
  theme = {
    color: color(() => type),
    simple,
    text,
    view,
    macro,
    constans: getConstans(),
  };
  callBackUpdateTheme && callBackUpdateTheme(theme);
};

/** Вешает слушателя на обновление темы
 * @param {Function} call слушатель на обновление темы
 */
const onUpdateTheme = (call) => {
  callBackUpdateTheme = call;
};

const createStyles = (creator) => creator(theme, params);

const getColors = () => theme.color;

export default {
  type,
  onUpdateTheme,
  theme,
  setTheme,
  createStyles,
  getColors,
  getSimpleConst,
  getConstans,
};
