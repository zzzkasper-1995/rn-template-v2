import Default from './default';
import Black from './black';

export default (type) => {
  const current = type();

  switch (current) {
    case 'dark':
    case 'black': {
      return {...Default, ...Black};
    }
    default: {
      return Default;
    }
  }
};
