import Log from '../Log';
import {store} from '../../../redux/store';
import {setLoaderStatus} from '../../../redux/modules/loaderStatus/actions';

/** Отправляем запросы */
export default async function request(path, params = {}): Promise {
  const {dispatch} = store;

  try {
    dispatch(setLoaderStatus(path, true));
    const response = await fetch(path + '?$' + objToQueryString(params));

    Log('request path, params', path, params);
    Log('response', response);
    if (response.ok) {
      const res = await response.json();
      dispatch(setLoaderStatus(path, false));
      return res;
    }

    dispatch(setLoaderStatus(path, false));
    return {error: true, requestStatus: response.status};
  } catch (error) {
    dispatch(setLoaderStatus(path, false, error));
    return {error: true, info: error};
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
