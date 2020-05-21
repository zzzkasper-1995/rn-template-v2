import plural from 'plural-ru';
import uuid from 'react-native-uuid';
import moment from 'moment';
import numeral from 'numeral';
import 'moment/locale/ru';

moment.locale('ru');

/**
 * Сон в асинхронной функции
 * @param {Number} ms количество милисекунд
 */
export async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

const objectIdfunctionLast = {};
/**
 * Выполняет функцю лишь раз последний вызов в временной интервал
 * @param {String} id идентификатр функции
 * @param {Function} callback функция обратного вызова которую стоит выполнить
 * @param {Number} time интервал в который стоит выполнить функцию (ms)
 */
export function functionLast(
  id: String,
  callback: Function,
  time: Number = 500,
): void {
  clearTimeout(objectIdfunctionLast[id]);
  objectIdfunctionLast[id] = setTimeout(callback, time);
}

const objectIdSafeFun = {};
/** Позволяет избежать повторного вызова функции. Например при двойном проклике по кнопке */
export function safeCall(id: String, fun: Function, time: Number = 2000): void {
  if (!objectIdSafeFun[id] || new Date() - objectIdSafeFun[id] > time) {
    objectIdSafeFun[id] = new Date();
    fun();
  }
}

/**
 * Форматирует число  расставляя символ между разрядами
 * @param {String} str входное число
 * @param {String} symbol символ разделителя

 * @memberof module:Utils
 */
export function formatNumber(
  str: String,
  symbol: String = ' ',
  isNumeral: Boolean = false,
): String {
  return isNumeral
    ? numeral(`${str}`).format(symbol)
    : `${str}`.replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, `$&${symbol}`);
}

/** Создать уникальный id */
export function getUniqueId(): String {
  return uuid.v1();
}

/** Если el массив то вернет el, иначе возвращает [el] */
export function getArray(el: any): Array {
  if (el) {
    if (!Array.isArray(el)) {
      return [el];
    }
    return el;
  }
  return [];
}

/** Склоняем русские слова во множественном числе */
export function getPluralWord(
  number: Number,
  one: String,
  two: String,
  five: String,
): String {
  // Log('getPluralWord', number, one, two, five);
  // example
  // plural(1, 'файл', 'файла', 'файлов'); // файл
  // plural(2, 'файл', 'файла', 'файлов'); // файла
  // plural(5, 'файл', 'файла', 'файлов'); // файлов

  const word = plural(number, one, two, five);
  return word;
}

/** Проверяем строку на соответствие регулярному выражению */
export function checkReg(str: String, regStr: String): Boolean {
  return !!`${str}`.match(new RegExp(regStr));
}

/**
 * Форматирует дату
 * @param {Date} date дата
 * @param {String} format *необходимый формат
 */
export function getDate(date = Date.now(), format: String = null): String {
  if (format) {
    return moment(date).format(format);
  }
  return moment(date).format('YYYY-MM-DD');
}

/**
 * Преобразует объект в массив
 * @param {Object} object
 */
export function objectToArray(object: Object): Array {
  return Object.keys(object || {}).map((key) => ({...object[key], id: key}));
}

/**
 * Возвращает количестиво полей в объекте
 * @param {Object} object
 */
export function objectLen(object: Object): Number {
  return Object.keys(object || {}).length;
}

/**
 * Вернуть первый ключ в объекте
 * @param {Object} object из которого надо вернуть
 */
export function getFirstKey(object: Object): Any {
  const arr = Object.keys(object);
  if (arr.length > 0) {
    return arr[0];
  }
  return undefined;
}

/**
 * Simple object check.
 * @param item
 */
export function isObject(item: Any): Boolean {
  return item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * Проверяем аргумент на соответствие типу дата
 * @param item
 */
export function isDate(data: Any): Boolean {
  if (data) {
    const nDate = new Date(data);
    if (nDate && !isNaN(nDate)) {
      return true;
    }
  }
  return false;
}
