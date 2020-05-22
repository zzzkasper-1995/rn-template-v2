export default {
  isLog: true,

  api: {
    endPoint: {
      moex: 'http://iss.moex.com',
      cryptocompare: 'https://min-api.cryptocompare.com',
    },
  },
  redux: {
    // Список редьюсеров данные которых необходимо запомнить в приложении до следующего запуска
    whitelist: ['dev', 'app', 'chat', 'favorites', 'user', 'options'],
    isLogger: true,
  },
};
