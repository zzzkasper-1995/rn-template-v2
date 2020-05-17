import Log from '../Log';

let instance;

/** Управляем цвето-темой */
class Theme {
  constructor() {
    this.name = 'Default'; // имя текущенй темы
    this.colorKit = {
      default: {},
    }; // наборы цветов
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
}

const ThemerRN = Theme.instance();

export default ThemerRN;
