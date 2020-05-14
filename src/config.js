export default {
  isLog: true,

  redux: {
    // Список редьюсеров данные которых необходимо запомнить в приложении до следующего запуска
    whitelist: ['dev', 'app', 'chat', 'favorites', 'user', 'options'],
    isLogger: true,
  },
};
