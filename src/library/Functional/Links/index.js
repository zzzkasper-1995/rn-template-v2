import {Linking, Alert, Platform} from 'react-native';
import AndroidOpenSettings from 'react-native-android-open-settings';
import Log from '../Log';
import Config from '../../../config';
import I from '../I18n';

/**
 * Обертка над Linking. Открывает ссылку
 * @param {String} url  ссылка для открытия
 */
const onLinking = (url) => {
  const protocol = (url.match(/^([a-zA-Z]+):\/\//) || [])[0];
  switch (protocol) {
    case 'https://':
    case 'http://': {
      Linking.canOpenURL(url)
        .then((supported) => {
          if (!supported) {
            // Log('onLinking error');
          } else {
            return Linking.openURL(url);
          }
        })
        .catch((err) => Log('onLinking error:', err));
      break;
    }
    default: {
      try {
        Linking.openURL(url);
      } catch (e) {
        Log('onLinkingDeepLink error', e);
      }
      break;
    }
  }
};

/**
 * Опредляет битая ли ссылка
 * @param {String} url  ссылка для открытия
 */
const onCanOpenLinking = (url = '', callback) => {
  Linking.canOpenURL(url)
    .then(() => callback?.(true))
    .catch((err) => callback?.(false));
};

const dbLink = {};
const onDeepStart = () => {
  const fnCallBack = (url, type) => {
    let _url;
    if (url) {
      _url = url.split('/?')[0].split('?')[0];
    }
    Log(`Initial url is: ${url}`, _url, dbLink);
    dbLink[_url] && dbLink[_url](url, type);
  };

  Linking.addEventListener('url', (event) => {
    fnCallBack(event.url, 'reboot');
  });

  Linking.getInitialURL()
    .then((url) => {
      fnCallBack(url, 'start');
    })
    .catch((err) => Log('An error occurred', err));
};

const setEventDeepLink = (name, callback) => {
  Linking.addEventListener(name, callback);
};

/**
 * Установить слушателя на дип линк
 * @param {String} name маршрут диплинка
 * @param {Function} callback выполнить это
 */
const setHandlerDeepLink = (name, callback) => {
  Config.deeplink.forEach((el) => {
    dbLink[`${el}://${name}`] = callback;
  });
};

/**
 * Открыть настройки
 * @param {String} type 'appNotificationSettings' | 'appDetailsSettings'
 * @param {String} title
 * @param {String} message
 */
const onOpenSetting = ({type = 'appDetailsSettings', title, message}) => {
  Alert.alert(
    title || '',
    message || '',
    [
      {
        text: I.text('ОК'),
        onPress: () => {
          if (Platform.OS === 'ios') {
            onLinking('app-settings:');
          } else {
            if (AndroidOpenSettings?.[type]) {
              AndroidOpenSettings[type]();
            } else {
              AndroidOpenSettings.appDetailsSettings();
            }
          }
        },
      },
      {
        text: I.text('Отмена'),
        onPress: () => {},
        style: 'cancel',
      },
    ],
    {cancelable: true},
  );
};

export default {
  onLinking,
  onCanOpenLinking,
  onDeepStart,
  setHandlerDeepLink,
  onOpenSetting,
  setEventDeepLink,
};
