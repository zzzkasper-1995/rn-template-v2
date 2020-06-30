import {createSelector} from 'reselect';

/**  */
export const slGetCoins = createSelector(
  (state) => state.coins.set,
  (state) => state.app.tiket,
  (set, tiket) => {
    const res = {};

    return res;
  },
);
