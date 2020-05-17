import moment from 'moment';
import I from '../Functional/I18n';
import 'moment/locale/ru';

moment.locale('ru');

/**
 * Форматирует дату
 * @param {Date} date дата
 * @param {String} format *необходимый формат
 * @memberof module:Utils
 */
const getDate = (date = Date.now(), format = null) => {
  if (format) {
    return moment(date).format(format);
  }
  return moment(date).format('YYYY-MM-DD');
};

/**
 * Возвращает состояние входной даты по отношению к текущему времени
 * @param {String} date дата которую необходимо разобрать
 * @param {Boolean} simple  полностью в строку или нет
 */
const getDateText = (date, simple = false, format = null) => {
  const dateInput = new Date(date);
  const dateNow = new Date();
  const day = dateInput.getDate();
  const month = dateInput.getMonth();
  const year = dateInput.getFullYear();

  if (
    dateNow.getFullYear() === year &&
    dateNow.getMonth() === month &&
    dateNow.getDate() === day
  ) {
    return I.text('Сегодня');
  }
  if (
    dateNow.getFullYear() === year &&
    dateNow.getMonth() === month &&
    +dateNow.getDate() - 1 === +day
  ) {
    return I.text('Вчера');
  }
  if (simple) {
    if (format) {
      return moment(dateInput).format(format);
    } else {
      return moment(dateInput).format('DD MMM YYYY');
    }
  } else {
    if (
      dateNow.getFullYear() === year &&
      dateNow.getMonth() === month &&
      +dateNow.getDate() - 7 < +day
    ) {
      return I.text('На прошлой неделе');
    }
    if (dateNow.getFullYear() === year && dateNow.getMonth() === month) {
      return I.text('В этом месяце');
    }
    if (dateNow.getFullYear() === year && +dateNow.getMonth() - 1 === +month) {
      return I.text('В прошлом месяце');
    }
    if (dateNow.getFullYear() === year) {
      return I.text('В этом году');
    }
    if (+dateNow.getFullYear() - 1 === +year) {
      return I.text('В прошлом году');
    }
    return I.text('Ушел в подполье');
  }
};

/** Сравнить даты */
function isSameDay(currentDate, diffdate) {
  if (!currentDate || !diffdate) {
    return false;
  }
  const currentCreatedAt = moment(currentDate);
  const diffCreatedAt = moment(diffdate);
  if (!currentCreatedAt.isValid() || !diffCreatedAt.isValid()) {
    return false;
  }
  return currentCreatedAt.isSame(diffCreatedAt, 'day');
}

export {getDate, getDateText, isSameDay};
