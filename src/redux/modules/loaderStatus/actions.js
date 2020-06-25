export const LOADER_STATUS = 'loaderStatus/LOADER_STATUS';

/**
 * Обработать статус запроса
 */
export function setLoaderStatus(
  type: String,
  isStatus: Boolean,
  error?: String,
) {
  return {
    type: LOADER_STATUS,
    payload: {type, isStatus, error},
  };
}
