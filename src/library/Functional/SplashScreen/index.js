import SplashScreenMod from 'react-native-splash-screen';

let isShow = true;

const hide = () => {
  if (isShow) {
    SplashScreenMod.hide();
    isShow = false;
  }
};

const rebootOptions = () => {
  isShow = true;
};

const SplashScreen = {
  hide,
  rebootOptions,
};

export default SplashScreen;
