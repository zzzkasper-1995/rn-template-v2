import {createSelector} from 'reselect';

/** Массив монет */
export const slGetCoins = createSelector(
  (state) => state.coins.set,
  (state) => state.coins.link,
  (set, link) => {
    const listCoins = Object.keys(set || {}).map((key) => {
      const item = set[key];
      const {CoinInfo, RAW, DISPLAY} = item;
      const {FullName, Name, ImageUrl} = CoinInfo;
      const price = RAW.USD.PRICE;

      const res = {
        key: Name,
        fullName: FullName,
        name: Name,
        imageUrl: link + ImageUrl,
        price,
        symbol: DISPLAY?.USD?.TOSYMBOL,
      };

      return res;
    });

    return listCoins;
  },
);

/** Массив монет */
export const slCurrentCoin = createSelector(
  (state) => state.coins.set,
  (state) => state.coins.link,
  (state) => state.app.currentTiket,
  (set, link, currentTiket) => {
    const item = set[currentTiket];
    const {CoinInfo, RAW, DISPLAY} = item;
    const {FullName, Name, ImageUrl} = CoinInfo;
    const price = RAW.USD.PRICE;

    const res = {
      key: Name,
      fullName: FullName,
      name: Name,
      imageUrl: link + ImageUrl,
      price,
      symbol: DISPLAY?.USD?.TOSYMBOL,
    };

    return res;
  },
);
