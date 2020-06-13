import React from 'react';
import styles from './styles';
import {Theme} from '../../../../library/functional';
import {View, Image, Text, Button} from '../../../../library/basicComponents';

type Props = {
  leftItem?: {
    onAction: Function,
    icon: Number | {uri: String},
    text: String,
  },
  rightItem?: {
    onAction: Function,
    icon: Number | {uri: String},
    text: String,
  },
  title?: String,
};

export default class Header extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
  }

  _handlerLeftButton = () => {
    const {props} = this;
    const {leftItem} = props;
    leftItem.action && props[leftItem.action] && props[leftItem.action]();
  };

  _handlerRightButton = () => {
    const {props} = this;
    const {rightItem} = props;
    rightItem.action && props[rightItem.action] && props[rightItem.action]();
  };

  getBadgeRight = () => {
    const {rightItem} = this.props;
    const {badge} = rightItem || {};
    const {param, styleView, textStyle} = badge || {};

    const value = param ? this.props[param] : 0;
    return {
      isVisible: !!(value > 0 && param),
      styleView,
      value,
      textStyle,
    };
  };

  getVisibleRightItem = () => {
    const {rightItem} = this.props;
    if (rightItem) {
      const {visible} = rightItem;

      if (visible) {
        if (visible === true) {
          return true;
        } else if (visible.param) {
          return this.props[visible.param];
        } else {
          return false;
        }
      } else {
        return visible !== false;
      }
    } else {
      return false;
    }
  };

  render() {
    const {leftItem, rightItem, title, subtitle, titleViewStyle} = this.props;

    const {icon} = title;
    const color = Theme.getColors();
    const badge = this.getBadgeRight();
    const isVisibleRightItem = this.getVisibleRightItem();

    const calcTitle =
      title.param && this.props[title.param]
        ? this.props[title.param]
        : title.text;
    let calcSubtitle = subtitle?.param
      ? this.props[subtitle?.param]
      : subtitle?.text || ' ';

    if (subtitle?.textFun) {
      if (!isNaN(Number(calcTitle))) {
        calcSubtitle = subtitle.textFun(Number(calcTitle));
      } else {
        calcSubtitle = '';
      }
    }

    return (
      <View style={styles.header}>
        <View style={styles.mainHeader}>
          <View late isShow style={[styles.headerTitleView, titleViewStyle]}>
            {icon ? (
              <Image
                isFast
                source={icon}
                resizeMode="contain"
                style={styles.iconTitle}
              />
            ) : (
              <>
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  i18n
                  style={[
                    styles.headerTitle,
                    title?.style,
                    !calcSubtitle?.trim?.() && {paddingBottom: 10},
                  ]}>
                  {calcTitle}
                </Text>
                {Boolean(calcSubtitle?.trim?.()) && (
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    i18n
                    style={[
                      styles.headerTitle,
                      {fontSize: 10},
                      subtitle?.style,
                    ]}>
                    {calcSubtitle}
                  </Text>
                )}
              </>
            )}
          </View>

          {leftItem ? (
            <View late isShow>
              <Button
                onAction={this._handlerLeftButton}
                style={[
                  styles.actionView,
                  {paddingHorizontal: 20, marginLeft: -10},
                ]}>
                {Boolean(leftItem.icon) && (
                  <Image
                    isFast
                    source={leftItem.icon}
                    resizeMode="contain"
                    color={leftItem?.color || color.WHITE}
                    style={[styles.leftActionIcon, leftItem.iconStyle]}
                  />
                )}
                {Boolean(leftItem.text) && (
                  <Text style={[styles.actionText, leftItem.textStyle]}>
                    {leftItem.text}
                  </Text>
                )}
              </Button>
            </View>
          ) : (
            <View
              style={[
                styles.actionView,
                {paddingHorizontal: 20, marginLeft: -10 + 18},
              ]}
            />
          )}

          {isVisibleRightItem ? (
            <View late isShow>
              <Button
                onAction={this._handlerRightButton}
                style={[
                  styles.actionView,
                  {paddingRight: 20, marginRight: -10},
                  rightItem.iconViewStyle,
                ]}>
                {Boolean(rightItem.text) && (
                  <Text style={[styles.actionText, rightItem.textStyle]}>
                    {rightItem.text}
                  </Text>
                )}
                {Boolean(
                  rightItem.param
                    ? this.props[rightItem.param]
                    : rightItem.icon,
                ) &&
                  (rightItem.transparent ? (
                    <Image
                      isFast
                      source={
                        rightItem.param
                          ? this.props[rightItem.param]
                          : rightItem.icon
                      }
                      resizeMode={
                        rightItem.resizeMode ? rightItem.resizeMode : 'contain'
                      }
                      style={[styles.rightActionIcon, rightItem.iconStyle]}
                    />
                  ) : (
                    <Image
                      isFast
                      source={
                        rightItem.param
                          ? this.props[rightItem.param]
                          : rightItem.icon
                      }
                      resizeMode={
                        rightItem.resizeMode ? rightItem.resizeMode : 'contain'
                      }
                      color={rightItem?.color || color.WHITE}
                      style={[styles.rightActionIcon, rightItem.iconStyle]}
                    />
                  ))}

                {badge.isVisible ? (
                  <View
                    style={{
                      backgroundColor: 'red',
                      position: 'absolute',
                      paddingHorizontal: 5,
                      borderRadius: 90,
                      ...badge.styleView,
                    }}>
                    <Text style={{...badge.textStyle}}>{badge.value}</Text>
                  </View>
                ) : (
                  <></>
                )}
              </Button>
            </View>
          ) : (
            <></>
          )}
        </View>
      </View>
    );
  }
}

Header.defaultProps = {
  leftItem: undefined,
  rightItem: undefined,
  title: '',
};
