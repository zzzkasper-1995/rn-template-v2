var EventEmitter = require('events');
import Log from '../Log';

let instance;

/** Управляем цвето-темой */
class Theme {
  constructor() {
    this.name = 'Default'; // имя текущенй темы
    this.colorKit = {
      default: {},
    }; // наборы цветов

    this.eventEmiter = new EventEmitter();
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
    if (this.colorKit[this.name]) {
      this.name = name;
    } else {
      this.name = 'Default';
    }

    this.eventEmiter.emit('changeTheme', this.name);
  }

  getName(): String {
    return this.name;
  }

  addEventListener(callback, name) {
    this.eventEmiter.on('changeTheme', function () {
      try {
        callback?.();
      } catch {}
    });
  }

  /** Задать наборы цветов */
  setColorKit(kit: Object): void {
    Log('Theme setColorKit', kit);
    this.colorKit = kit;
  }

  /** Получить цвета текущей темы */
  getColors(): Object {
    Log('Theme getColors');
    return this.colorKit[this.name] || {};
  }

  /** Обертка над созданием стилей */
  createStyles = (creator) => {
    Log('Theme createStyles');
    const theme = {color: this.getColors()};
    Log('createStyles2');
    return creator(theme);
  };

  create = (style: Object = {}): Object => {
    const colors = this.getColors();
    const res = {...style};

    // пробегаемсмя по стилям и ищем в них свойства связаные с color
    Object.keys(style).forEach((key) => {
      const item = style[key];
      Object.keys(item || {}).forEach((property) => {
        const colorValue = item[property];

        // если у имени свойства есть color и  значение задано как цветовой код
        if (
          property?.toLowerCase().includes('color') &&
          colorValue.includes('$')
        ) {
          res[key][property] = colors[`${colorValue}`.replace('$', '')];
        }
      });
    });

    Log('res', res);
    return res;
  };
}

const ThemerRN = Theme.instance();

export default ThemerRN;
