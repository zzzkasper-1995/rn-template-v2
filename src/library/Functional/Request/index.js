import config from '../../../config';

/** Отправляем запросы */
export default async function request(path, params = {}): Promise {
  try {
    const response = await fetch(config?.api?.endPoint + path, params);

    if (response.ok) {
      const res = await response.json();
      return res;
    }

    return {error: true, requestStatus: response.status};
  } catch (err) {
    return {error: true, info: err};
  }
}
