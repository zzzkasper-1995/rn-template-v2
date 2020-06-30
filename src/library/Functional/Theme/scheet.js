// import Log from '../Log';

/** Управляем цвето-темой */
class Scheet {
  constructor(obj) {
    this._base = JSON.parse(JSON.stringify(obj));
    this._style = {...obj};
  }

  calc = (colors): Object => {
    // Log('!Scheet calc', colors, {...this._base});
    // пробегаемсмя по стилям и ищем в них свойства связаные с color
    Object.keys(this._base).forEach((key) => {
      const item = this._base[key];

      const res = {};
      Object.keys(item || {}).forEach((property) => {
        const value = item[property];

        // если у имени свойства есть color и  значение задано как цветовой код
        if (
          `${property?.toLowerCase()}`.includes('color') &&
          `${value}`.includes('$')
        ) {
          const color = colors[`${value}`.replace('$', '')];
          res[property] = color;
        } else {
          res[property] = value;
        }
      });

      this._style[key] = res;
    });

    return this._style;
  };
}

export default Scheet;
