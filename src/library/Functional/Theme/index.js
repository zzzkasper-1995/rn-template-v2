var EventEmitter = require('events');
import Log from '../Log';
import Scheet from './scheet';

let instance;

/** Управляем цвето-темой */
class Theme {
  constructor() {
    this.name = 'Default'; // имя текущенй темы
    this.colorKit = {
      default: {},
    }; // наборы цветов

    this.eventEmiter = new EventEmitter();
    this.scheets = [];
  }

  static instance(): Theme {
    if (!instance) {
      instance = new Theme();
    }
    return instance;
  }

  /** Задать имя используемой темы */
  setTheme(name: String): void {
    Log('Theme setTheme', name);
    if (this.name !== name) {
      if (this.colorKit[this.name]) {
        this.name = name;
      } else {
        this.name = 'Default';
      }

      this.scheets.forEach((item) => item.calc(this.getColors()));
      Log('this.scheets', this.scheets);
      this.eventEmiter.emit('changeTheme', this.name);
    }
  }

  getName(): String {
    return this.name;
  }

  addEventListener(callback): void {
    this.eventEmiter.on('changeTheme', function (name) {
      try {
        callback?.(name);
      } catch {}
    });
  }

  /** Задать наборы цветов */
  setColorKit(kit: Object): void {
    Log('Theme setColorKit', kit);
    this.colorKit = kit;
    this.scheets.forEach((item) => item.calc(this.getColors()));
    Log('this.scheets', this.scheets);
  }

  /** Получить цвета текущей темы */
  getColors(): Object {
    Log('Theme getColors');
    return this.colorKit[this.name] || {};
  }

  create = (style: Object = {}): Object => {
    Log('Theme create', {...style});
    const scheet = new Scheet(style);
    this.scheets.push(scheet);
    return scheet.calc(this.getColors());
  };
}

const ThemerRN = Theme.instance();

export default ThemerRN;
