import {createSelector} from 'reselect';

/** Массив монет */
export const slGetCoins = createSelector(
  (state) => state.coins.set,
  (state) => state.coins.link,
  (set, link) => {
    const listCoins = Object.keys(set || {}).map((key) => {
      const item = set[key];
      const {CoinInfo, RAW} = item;
      const {FullName, Name, ImageUrl} = CoinInfo;
      const price = RAW.USD.PRICE;

      return {
        key: Name,
        fullName: FullName,
        name: Name,
        imageUrl: link + ImageUrl,
        price,
      };
    });

    return listCoins;
  },
);
