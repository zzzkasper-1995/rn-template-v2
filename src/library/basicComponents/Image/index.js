import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {Image as RNImage, ImageProps} from 'react-native';
import {View} from '../View';
import {Text} from '../Text';
import styles from './styles';

// For more details,
// https://github.com/DylanVann/react-native-fast-image
// https://reactnative.dev/docs/image

type Props = {
  isFast?: Boolean, // будем использовать FastImage
  isFade?: Boolean, // картинка будет появляться c эфектом fade
  isDummy?: Boolean, // вместо картинки будет показана заглушка
  text?: String, // текст который надо показать если нет картинки
  source?: Object | Number,
  color?: String, // цвет картинки
  style?: Object | Array, // стиль
  dummyStyle?: Object | Array, // стиль заглушки
  textStyle?: Object | Array, // стиль текста
};

/** Блок с картинкой */
const ImageView = (props: ImageProps & Props) => {
  const [isLoad, setIsLoad] = useState(false);

  const onLoadEnd = (e) => {
    if (props?.onLoadEnd) {
      props.onLoadEnd(e);
    }
    setIsLoad(true);
  };

  const {
    style,
    dummyStyle,
    textStyle,
    isFast,
    isFade,
    isDummy,
    text,
    source,
    color,
    ...other
  } = props;

  const styleImg = [styles.image, {tintColor: color}, style];

  if (isDummy) {
    return <View style={[styleImg, styles.dummy, dummyStyle]} />;
  }
  if (!source || (typeof source === 'object' && !source?.uri)) {
    if (text) {
      return (
        <View style={[styles.reserveView, styleImg]}>
          <Text style={[styles.text, textStyle]}>{text}</Text>
        </View>
      );
    }
  }
  if (isFast) {
    if (isFade) {
      return (
        <View late isShow={isLoad}>
          <FastImage
            source={source}
            onLoadEnd={onLoadEnd}
            style={styleImg}
            {...other}
          />
        </View>
      );
    }

    return (
      <FastImage
        tintColor={color}
        source={source}
        style={styleImg}
        {...other}
      />
    );
  }

  return (
    <RNImage
      source={source}
      fadeDuration={isFade ? 300 : undefined}
      style={styleImg}
    />
  );
};

export default ImageView;
