import React from 'react';
import {TextInput, Platform} from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';
import TextMask from '../../functional/TextMask';
import {formatNumber} from '../../utils';
import I from '../../functional/I18n';

type Props = {
  reference: Function,
  input: Object, // final-form
  mask: String,
  digits: Boolean, // вставляет разряды в число
};

/**
 *  Обертка над видженом
 *
 * @class WrapperTextInput
 * @extends {React.PureComponent}
 */
class WrapperTextInput extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initValue || '',
    };
    if (Platform.OS === 'ios') {
      KeyboardManager.setEnable(!!props.keyboardManager);
      KeyboardManager.setEnableAutoToolbar(!!props.keyboardManager);
    }

    !!props.keyboardManager &&
      Platform.OS === 'ios' &&
      KeyboardManager.setToolbarDoneBarButtonItemText(I.text('Done'));
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      setTimeout(() => {
        this.textInput && this.textInput.focus();
      }, 500);
    }
  }

  getValue = () => this.state.value;

  _onChangeText = (text) => {
    const {onChangeText, input, keyboardType} = this.props;

    onChangeText && onChangeText(text);

    input && input.onChange && input.onChange(text); // для редакс-форм или финал-форм

    if (keyboardType === 'numeric' || keyboardType === 'number-pad') {
      this.textInput.clear();

      let resValue = text;
      try {
        resValue = text.replace(/\D/g, '');
        resValue = resValue ? Math.round(Number(resValue)) : resValue;
      } catch {}
      this.setState({value: resValue});
    } else {
      this.setState({value: text});
    }
  };

  focus = () => {
    this.textInput.focus();
  };

  clear = () => {
    const {onChangeText, input} = this.props;

    onChangeText?.('');
    this.setState({value: ''});
    input?.onChange?.('');
    this.textInput?.clear?.();
  };

  setRef = (ref) => {
    const {reference} = this.props;

    reference && reference(ref);
    this.textInput = ref;
  };

  render() {
    const {value} = this.state;
    const {
      mask,
      input,
      digits,
      returnKeyType,
      placeholderTextColor,
    } = this.props;

    let str = '';
    if (input?.value) {
      str = input?.value;
    } else {
      if (input?.value === '') {
        str = '';
      } else {
        str = value || '';
      }
    }

    if (digits && str) {
      str = `${formatNumber(str, '0,0', true)}`.replace(/,/gi, digits);
    }

    const resStr = mask ? TextMask.getMaskedValue(`${str}`, mask) : str;

    return (
      <TextInput
        {...this.props}
        placeholderTextColor={placeholderTextColor || '#9ca8b4'}
        onChangeText={this._onChangeText}
        ref={this.setRef}
        autoFocus={false}
        returnKeyType={returnKeyType}>
        {resStr}
      </TextInput>
    );
  }
}

export default WrapperTextInput;
