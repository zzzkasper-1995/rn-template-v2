import config from '../../../config';
import Log from '../Log';

export default async function request(path, params = {}): Promise {
  Log('request', path, params);

  try {
    const response = await fetch(config?.api?.endPoint + path, params);

    if (response.ok) {
      const res = await response.json();
      Log('request res json', res);
      return res;
    }

    Log('request response', response);
    return {error: true, requestStatus: response.status};
  } catch (err) {
    Log('request err', err);
    return {error: true, info: err};
  }
}
