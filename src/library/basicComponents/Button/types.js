export type contentFullType = {
  text: String,
  icon?: Number | {uri: String},
  isLoadBar?: Boolean,
  activityIndicator?: Function,
  iconStyle?: Object | Array,
  textStyle?: Object | Array,
};

export type fullBtnType = {
  onPress?: Function,
  color?: String,
  isLoadBar?: Boolean,
  disabled?: Boolean,
  activeOpacity?: Number,
  style?: Object | Array,
  ...contentFullType,
};

export type fullRippleBtnType = {
  ...fullBtnType,
};

export type fullGradientBtnType = {
  ...fullBtnType,
  colors: Array,
};

export type linkType = {
  onPress?: Function,
  text?: String,
  style: Object | Array,
  textStyle: Object | Array,
  activeOpacity?: Number,
};

export type scaleType = {
  isSpring?: Boolean,
  onPressIn?: Function,
  onPressOut?: Function,
  min?: Number,
  max?: Number,
  onPress?: Function,
};

export type fullScaleBtnType = {
  ...fullBtnType,
  ...scaleType,
};

export type btnType = {
  type?:
    | 'link'
    | 'scale'
    | 'full'
    | 'fullG'
    | 'ripple'
    | 'fullRipple'
    | 'fullScale'
    | 'darkPress',
  ...contentFullType,
  ...scaleType,
  ...linkType,
  ...fullGradientBtnType,
  ...fullRippleBtnType,
  ...fullScaleBtnType,
  ...fullBtnType,
};
