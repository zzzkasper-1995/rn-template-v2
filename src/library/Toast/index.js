import {Alert, Platform, ActionSheetIOS} from 'react-native';
import SimpleToast from 'react-native-simple-toast';
import I from '../I18n';

const Toast = {};

/** Массив запросов */
const PoolRequest = [];

/**
 * @params buttons, title, message, cancelable
 */
Toast.alert = ({title, message, buttons, options, typeIos}) => {
  if (Platform.OS === 'android' || typeIos === 'alert') {
    Alert.alert(title, message, buttons, options);
  } else {
    let destructiveButtonIndex;
    let cancelButtonIndex;
    buttons.forEach((item, index) => {
      if (item.style === 'destructive') {
        destructiveButtonIndex = index;
      }
    });
    buttons.forEach((item, index) => {
      if (item.style === 'cancel') {
        cancelButtonIndex = index;
      }
    });

    ActionSheetIOS.showActionSheetWithOptions(
      {
        title,
        options: buttons.map((item) => item.text),
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        buttons[buttonIndex]?.onPress?.();
      },
    );
  }
};

Toast.short = (message) => {
  SimpleToast.show(message, SimpleToast.SHORT);
};

Toast.requestAlert = (text = '', title, action) => {
  const message = text === '' ? I.text('Что-то пошло не так') : I.text(text);
  const arrayBtn = action.map((el) => ({
    text: el.text ? I.text(el.text) : I.text('OK'),
    onPress: el.action
      ? () => {
          el.action();
          const index = PoolRequest.indexOf(message);
          setTimeout(() => {
            PoolRequest.splice(index, 1);
          }, 2 * 1000);
        }
      : () => {
          const index = PoolRequest.indexOf(message);
          setTimeout(() => {
            PoolRequest.splice(index, 1);
          }, 2 * 1000);
        },
    style: el.style || 'default',
  }));

  if (!PoolRequest.includes(message)) {
    Alert.alert(title, message, arrayBtn, {
      cancelable: false,
    });
    PoolRequest.push(message);
    const index = PoolRequest.indexOf(message);
    setTimeout(() => {
      PoolRequest.splice(index, 1);
    }, 2 * 1000);
  }
};

/**
 * Отображение собщения
 * @param {String} text сообщение
 * @param {String} title заголовок
 * @param {Function} action функции заголовок
 * @param {Function} action.action функция
 * @param {Function} action.text название кнопки
 *
 */
Toast.show = (text = '', title, ...action) => {
  const message =
    text === ''
      ? I.text('Что-то пошло не так')
      : I.text(title === '' ? JSON.stringify(text) : text);

  if (title === undefined) {
    Toast.short(message);
  } else {
    Toast.requestAlert(message, title, action);
  }
};

export default Toast;
