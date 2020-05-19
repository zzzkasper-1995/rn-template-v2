let instance;

/**
 * @class Looper
 * @classdesc Выполняет действия с заданной периодичностью
 */
class Looper {
  /**
   * Инициализация
   * @static
   * @returns экземпляр этого класса
   * @memberof Looper
   */
  static instance(): Looper {
    if (!instance) {
      instance = new Looper();
    }
    return instance;
  }

  constructor() {
    this.buff = {}; // буфер задач
    this.run(); // запускается жизненный цикл
  }

  run() {
    setInterval(() => {
      Object.values(this.buff).forEach((el) => {
        if (el.wait > 0) {
          el.wait -= 1;
        } else {
          el.action();
          el.wait = el.interval;
          if (el.amount) {
            el.quantity += 1;
            if (el.amount < el.quantity) {
              this.stop(el.name);
            }
          }
        }
      });
    }, 1000);
  }

  /**
   * Стартует какое либо событие на повтор
   * @param {String} name имя собятия
   * @param {Function} action действие собятия
   * @param {Number} interval интервал между повторами в сек
   * @param {Boolean|Number} amount количество повторений
   */
  start(name, action, interval = 1, amount = false) {
    if (this.buff[name]) {
      delete this.buff[name];
    }
    this.buff[name] = {
      name,
      action,
      interval,
      wait: interval,
      ...(amount
        ? {
            quantity: 0,
            amount,
          }
        : {}),
    };

    action();
  }

  /**
   * Снимает с выполнения какое либо событие
   * @param {String} name имя собятия
   */
  stop(name) {
    if (this.buff[name]) {
      delete this.buff[name];
    }
  }
}
const LooperRN = Looper.instance();

export default LooperRN;
