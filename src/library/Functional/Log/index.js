import Config from '../../../config';

const Log = (...params) => {
  if (Config?.isLog) {
    console.log(...params);
  }
};

export default Log;
