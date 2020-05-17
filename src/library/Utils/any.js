import numeral from 'numeral';
import {Buffer} from 'buffer';

const plural = require('plural-ru');

const uuid = require('react-native-uuid');
/**
 * Сон в асинхронной функции
 * @param {Number} ms количество милисекунд
 * @memberof module:Utils
 */
const sleep = async (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Форматирует число  расставляя символ между тройками
 * @param {String} str входное число
 * @param {String} symbol символ разделителя

 * @memberof module:Utils
 */
const formatNumber = (str, symbol = ' ', isNumeral = false) =>
  isNumeral
    ? numeral(`${str}`).format(symbol)
    : `${str}`.replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, `$&${symbol}`);

/**
 * Округление числа до заданной точности и форматируем число, добавляем пробелы между разрядами
 * @param {String|Number} numb число которое необходимо отформатировать
 * @param {String|Number} eps точнось
 * @param {Boolean} isFormat форматировать ли отступы или нет
 * @param {String} symbol если форматировать то какой символ использовать в качестве разделителя(по умолчанию пробел)
 * @returns {String} отформатированное число
 * @memberof module:Utils
 */
const rounding = (numb, eps = 1, isFormat = true, symbol = ' ') => {
  if (numb !== undefined) {
    let n = '';
    if (typeof numb === 'number') {
      n = numb;
    } else {
      n = +numb.split(' ').join('');
    }
    let e;
    if (typeof eps === 'number') {
      e = eps;
    } else {
      e = +eps.split(' ').join('');
    }

    const res = Math.round(n / e, 0) * e;
    const epL = e.toString().length;
    const needL = e < 1 ? epL - 2 : 0;
    const r = (needL > 0 ? res.toFixed(needL) : res.toFixed()).split('.');
    return isFormat
      ? `${formatNumber(r[0], symbol)}${r[1] ? `.${r[1]}` : ''}`
      : `${r[0]}${r[1] ? `.${r[1]}` : ''}`;
  }
  return '0';
};

const objectIdTime = {};
/**
 * Выполняет функцю лишь раз последний вызов в временной интервал
 * @param {String} id идентификатр функции
 * @param {Function} callback функция обратного вызова которую стоит выполнить
 * @param {Number} time интервал в который стоит выполнить функцию (ms)
 */
const functionLast = (id, callback, time) => {
  clearTimeout(objectIdTime[id]);
  objectIdTime[id] = setTimeout(callback, time);
};

/** помогает сформировать список экранов */
const listScreen = (list, screen) => {
  const resList = {};

  Object.keys(list || {}).forEach((key) => {
    resList[key] = {screen};
  });
  return resList;
};

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const objectIdSafeFun = {};

/** Позволяет избежать повторного вызова функции. Например при двойном проклике по кнопке */
function safeCall(id, fun, time = 2000) {
  if (!objectIdSafeFun[id] || new Date() - objectIdSafeFun[id] > time) {
    objectIdSafeFun[id] = new Date();
    fun();
  }
}

/** Возвращает строку с заглавной буквы */
function capitalLetter(str = '') {
  const resStr = str.toLowerCase();

  if (str) {
    return resStr[0].toUpperCase() + resStr.slice(1);
  }
  return '';
}
/** библиотека по работе с числами */
const Numeral = (value) => numeral(value);

/** C заглавной буквы */
const firstLetterCaps = (str = '') => {
  const _str = str.toLowerCase();

  if (_str.length === 0) {
    return '';
  }
  if (_str.length === 1) {
    return _str.toUpperCase();
  }
  return `${_str[0].toUpperCase()}${_str.slice(1)}`;
};

/** Выполняет декодирование */
const fromEncode = (meta) => {
  return JSON.parse(Buffer.from(meta, 'base64').toString('utf8'));
};
/** Выполняет кодирование */
const fromDecode = (obj) => {
  return Buffer.from(JSON.stringify(obj), 'utf8').toString('base64');
};

/** Создать уникальный id */
const getUniqueId = () => {
  return uuid.v1();
};

const getArray = (res) => {
  let tr = res;
  if (tr) {
    if (!Array.isArray(tr)) {
      tr = [tr];
    }
    return tr;
  }
  return [];
};

const getPluralWord = (number, one, two, five) => {
  // Log('getPluralWord', number, one, two, five);
  // example
  // plural(1, 'файл', 'файла', 'файлов'); // файл
  // plural(2, 'файл', 'файла', 'файлов'); // файла
  // plural(5, 'файл', 'файла', 'файлов'); // файлов

  const word = plural(number, one, two, five);
  return word;
};

const checkReg = (str: String, regStr: String): Boolean => {
  return !!`${str}`.match(new RegExp(regStr));
};

const getObjectMsg = ({text = ''}) => {
  try {
    let _text = text;
    const _fileSource = {};
    let _btnLinks = {};
    let _linkCar = {};
    let isFile = false;
    let isBtnLink = false;
    let isLinkCar = false;
    const maskBtnLink = 'https://3dsec.sberbank.ru/shortlink'; // TODO удалить через месяц
    const maskLinkCar = 'https://sberauto.com/cars/';
    const maskFile = 'attachment://';
    const arrayPay = text.match(/[^[\]]+(?=])/g);
    if (text.includes(maskFile)) {
      isFile = true;
      const arrayText = text.split(maskFile);
      arrayText.forEach((e, index) => {
        if (index !== 0) {
          const element = e.split(' ');
          const _type = element[0];
          const _name = element[1];
          const _url = element[2].trim();
          _fileSource[index] = {
            id: index,
            isLoad: false,
            uri: _url,
            fileType: _type,
            properties: {
              name: _name,
            },
          };
        }
      });
      _text = (arrayText[0] || '').trim();
      _text = _text === '\n' ? '' : _text;
    } else if (text.includes(maskBtnLink)) {
      // TODO удалить блок
      isBtnLink = true;
      const arrayText = text.split(maskBtnLink);

      const _vr_text = arrayText[1].split(' ');
      const _url = maskBtnLink + _vr_text[0];

      _text = arrayText[0] || '';
      _text = _text.trim() === '\n' ? '' : _text;
      const amount = numeral(_text).value();

      const _amount = formatNumber(`${amount}`, ' ');
      const _title = amount > 0 ? `Счет на ${_amount} ₽` : 'Счет на оплату';
      _text = '';
      _btnLinks = {
        title: _title,
        buttons: [
          {
            text: 'Оплатить',
            uri: _url,
          },
        ],
      };
    } else if (arrayPay) {
      isBtnLink = true;
      arrayPay.forEach((e) => {
        const elements = e.split('|');
        if (elements.length < 2) {
          elements.unshift('');
        }
        const type = elements.length > 2 ? 1 : 2;

        _text = '';
        _btnLinks = {
          title: (elements[0] || 'Счет на оплату').trim(),
          buttons: [
            {
              text: type === 1 ? (elements[1] || '').trim() : 'Оплатить',
              uri: (elements[type === 1 ? 2 : 1] || '').trim(),
            },
          ],
        };
      });
    } else if (text.includes(maskLinkCar)) {
      isLinkCar = true;
      const arrayLink = text.match(
        /(https?:\/\/|ftp:\/\/|www\.)((?![.,?!;:()]*(\s|$))[^\s]){2,}/gim,
      );
      const vr = arrayLink[0].split('/');
      const _uuid = vr[vr.length - 1];
      _text = text.replace(
        /(https?:\/\/|ftp:\/\/|www\.)((?![.,?!;:()]*(\s|$))[^\s]){2,}/gim,
        '',
      );
      _linkCar = {
        action: 'onLoadInfoCarInMsg',
        uuid: _uuid,
        link: arrayLink[0],
        infoCar: {},
        host: 'sberauto.com',
      };
    }
    // Log('getObjectMsg', {
    // 	text: {text: _text},
    // 	...(isFile ? {fileSource: _fileSource} : {}),
    // 	...(isBtnLink ? {buttonLinksSingle: _btnLinks} : {}),
    // 	...(isLinkCar ? {buttonLinkCar: _linkCar} : {}),
    // });
    return {
      text: {text: _text},
      ...(isFile ? {fileSource: _fileSource} : {}),
      ...(isBtnLink ? {buttonLinksSingle: _btnLinks} : {}),
      ...(isLinkCar ? {buttonLinkCar: _linkCar} : {}),
    };
  } catch (e) {
    return {
      text: {text: ''},
    };
  }
};

export {
  fromDecode,
  fromEncode,
  firstLetterCaps,
  sleep,
  rounding,
  functionLast,
  listScreen,
  getRandomColor,
  formatNumber,
  safeCall,
  capitalLetter,
  getUniqueId,
  getArray,
  getPluralWord,
  getObjectMsg,
  checkReg,
};
