import {LOADER_STATUS} from './actions';

const initialState = {
  // Пример
  // EXAMPLE_GET - тип запроса
  EXAMPLE_GET: {
    status: true,
    error: undefined,
  }, // запрос с данным id в процессе выполнения, ошибки нет
};

export default function loaderStatus(state = initialState, action) {
  switch (action.type) {
    case LOADER_STATUS:
      const {type, isStatus, error} = action.payload;

      const resType = {status: isStatus, error};

      return {...state, [type]: resType};
    default:
      return state;
  }
}
