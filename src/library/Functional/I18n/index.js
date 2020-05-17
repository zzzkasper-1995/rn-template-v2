import i18n from './i18n';

/**
 * Выполняет перевод строк
 *
 * @class I
 */
class I {
  constructor() {
    this.db = {};
  }

  _getText(key) {
    const text = i18n.t(key, {language: i18n.currentLocale()});
    if (i18n.t(key, {language: i18n.currentLocale()}).includes('[missing')) {
      this.db[i18n.currentLocale()] = {
        ...this.db[i18n.currentLocale()],
        [key]: key,
      };
      return key;
    }
    return text;
  }

  text(text = 'default') {
    return this._getText(text);
  }
}

const localization = new I();

export default localization;
