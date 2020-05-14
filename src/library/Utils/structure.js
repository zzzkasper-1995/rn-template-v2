/**
 * Преобразует объект в хэш
 * @param {Object} object
 * @memberof module:Utils
 */
const objectToHash = (object) => {
  const hash = {};
  Object.keys(object).forEach((key) => {
    hash[key] = JSON.stringify(object[key]);
  });
  return hash;
};

/**
 * Преобразует массив в объект
 * @param {Array} array массив объектов
 * @param {String} key поле по которому присваимват ь ключи
 * @param {*} initial
 * @memberof module:Utils
 */
const arrayToMap = (array, key, initial = {}) => {
  if (array.length > 0) {
    return array.reduce((prev, item) => {
      const o = prev;
      const i = item[key];
      o[i] = item;
      return o;
    }, initial);
  }
  return {};
};

/**
 * Преобразует объект в массив
 * @param {Object} object
 * @memberof module:Utils
 */
const objectToArray = (object): Array => {
  return Object.keys(object || {}).map((key) => ({...object[key], id: key}));
};

/**
 * Возвращает количестиво полей в объекте
 * @param {Object} object
 * @memberof module:Utils
 */
const objectLen = (object): Number => {
  return Object.keys(object || {}).length;
};

/**
 * Вернуть первый ключ в объекте
 * @param {Object} obj из которого надо вернуть
 * @memberof module:Utils
 */
const getFirstKey = (obj) => {
  const arr = Object.keys(obj);
  if (arr.length > 0) {
    return arr[0];
  }
  return undefined;
};

/**
 * Возвращает ключ в объекте любой вложенности, если ключ не найдет то возврщает undefined
 *
 * @param {Object} object объект для поиска
 * @param {String} key если . есть то ищется путь если их нет то ищется рекурсивно в оюхекто до первого вхождения
 */
const getKeyObject = (object, key) => {
  let search;
  if (typeof object === 'object') {
    if (key.toString().split('.').length > 1) {
      search = object;
      key
        .toString()
        .split('.')
        .forEach((el) => {
          if (search[el]) {
            search = search[el];
          } else {
            return undefined;
          }
        });
      return search;
    }

    for (const el in object) {
      if (el === key) {
        return object[el];
      }
      search = getKeyObject(object[el], key);
      if (search) {
        return search;
      }
    }
  }
  return search;
};

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
const isObject = (item) => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

/**
 * Мерджит объекты в глубь (может привести к зацикливанию)
 * @param target объект в который объединяем
 * @param ...sources
 */
const mergeObject = (target, ...sources) => {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, {[key]: {}});
        }
        mergeObject(target[key], source[key]);
      } else {
        Object.assign(target, {[key]: source[key]});
      }
    }
  }

  return mergeObject(target, ...sources);
};

/**
 *  мерджит объекты
 * @param {*Object} array собирает входящие объекты в массив
 */
const compose = (...array) => {
  let r = {};
  array.forEach((element) => {
    r = {...r, ...element};
  });
  return r;
};

function isDate(data) {
  if (data) {
    const nDate = new Date(data);
    if (nDate && !isNaN(nDate)) {
      return true;
    }
  }
  return false;
}

export {
  objectToHash,
  arrayToMap,
  objectToArray,
  objectLen,
  getFirstKey,
  getKeyObject,
  isObject,
  mergeObject,
  compose,
  isDate,
};
