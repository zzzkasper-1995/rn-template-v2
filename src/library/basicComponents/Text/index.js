import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import TextHTML from 'react-native-render-html';
import {
  LinearTextGradient,
  LinearTextGradientProps,
} from 'react-native-text-gradient';
import I from '../../functional/I18n';
import styles from './styles';

// For more details,
// https://github.com/archriss/react-native-render-html
// https://github.com/iyegoroff/react-native-text-gradient
// https://reactnative.dev/docs/text

type Props = {
  isDummy?: Boolean, // показать пустышку
  isGrad?: Boolean, // использовать градиентный текст
  isHtml?: Boolean, // распарсить html
  i18n?: Boolean, // перевести текст
};

/**
 * Обертка над текстом
 *
 * @class Text
 * @extends {React.PureComponent}
 */
const Text = (props: Props & TextProps & LinearTextGradientProps) => {
  const {
    isDummy,
    isGrad,
    isHtml,
    i18n,
    children,
    colors = [],
    dummyStyle,
    style,
    ...other
  } = props;

  const value = i18n ? I.text(children) : children;

  if (isDummy) {
    return (
      <RNText
        {...this.other}
        value=""
        style={[styles.text, style, styles.dummy, dummyStyle]}
      />
    );
  }
  if (isHtml) {
    return (
      <TextHTML
        html={value}
        imagesMaxWidth={styles.screen.width}
        baseFontStyle={style}
        {...other}
      />
    );
  }
  if (isGrad) {
    return (
      <LinearTextGradient
        locations={[0, 1]}
        colors={colors}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        {...this.props}
        style={[styles.text, style]}>
        <RNText>{value}</RNText>
      </LinearTextGradient>
    );
  }

  return (
    <RNText {...this.props} children={value} style={[styles.text, style]} />
  );
};

export default Text;
