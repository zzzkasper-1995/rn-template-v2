import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export function getDiagonal(): Number {
  // примерная диагональ экрана
  let diagonal;

  // iphone 5/SE (4")
  if (height > 0) {
    // width: 320, height: 568
    diagonal = 4;
  }
  // iphone 6 (4.7")
  if (height > 568) {
    // width: 375, height: 667
    diagonal = 4.7;
  }
  // iphone X (5.8")
  if (height > 667) {
    // width: 375, height: 812
    diagonal = 5.8;
  }
  // iphone 11 Pro Max (6.5")
  if (height > 812) {
    // width: 414, height: 896
    diagonal = 6.5;
  }

  return diagonal;
}
