import Log from '../Log';

/** Отправляем запросы */
export default async function request(path, params = {}, method): Promise {
  try {
    const response = await fetch(path + '?$' + objToQueryString(params));

    Log('request path, params', path, params);
    Log('response', response);
    if (response.ok) {
      const res = await response.json();
      return res;
    }

    return {error: true, requestStatus: response.status};
  } catch (err) {
    return {error: true, info: err};
  }
}

function objToQueryString(obj) {
  const keyValuePairs = [];
  for (const key in obj) {
    keyValuePairs.push(
      encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]),
    );
  }
  return keyValuePairs.join('&');
}
