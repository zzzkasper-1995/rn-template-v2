import React from 'react';
import {ActivityIndicator, Text, View, Image} from 'react-native';
import {contentFullStyles as styles} from './styles';
import {contentFullType} from './types';

/** Содержимое кнопок семейства full */
class ContentFull extends React.Component<contentFullType> {
  /** Отрисовываем индикатор загрузки */
  renderActivityIndicator = () => {
    const {activityIndicator} = this.props;

    if (activityIndicator) {
      return activityIndicator();
    }
    return <ActivityIndicator size="large" color="white" />;
  };

  /** Отрисовываем иконку */
  renderIcon = () => {
    const {icon, iconStyle, text} = this.props;

    if (icon) {
      return (
        <Image
          source={icon}
          style={[styles.icon, text && {marginRight: 8}, iconStyle]}
          resizeMode="contain"
        />
      );
    }
    return null;
  };

  /** Отрисовываем текст */
  renderText = () => {
    const {text, textStyle} = this.props;

    if (text) {
      return (
        <Text style={textStyle} ellipsizeMode="tail" numberOfLines={1}>
          {text}
        </Text>
      );
    }

    return null;
  };

  render() {
    const {isLoadBar} = this.props;

    return (
      <View style={styles.container}>
        {isLoadBar ? (
          this.renderActivityIndicator()
        ) : (
          <>
            {this.renderIcon()}
            {this.renderText()}
          </>
        )}
      </View>
    );
  }
}

export default ContentFull;
