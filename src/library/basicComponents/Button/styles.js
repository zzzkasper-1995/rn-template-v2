import {StyleSheet} from 'react-native';

export const contentFullStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 16,
    height: 16,
  },
});

export const fullBtnStyles = StyleSheet.create({
  btnFull: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 48,
    borderRadius: 4,
  },
});

export const fullScaleBtnStyles = StyleSheet.create({
  ...fullBtnStyles,
});

export const fullRippleStyles = StyleSheet.create({
  ...fullBtnStyles,
});

export const fullGradientBtnStyles = StyleSheet.create({
  ...fullBtnStyles,
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export const linkBtnStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  textBtnSimple: {
    color: 'blue',
  },
});
