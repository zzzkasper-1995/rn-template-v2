import React from 'react';
import {Text, TextInput} from 'react-native';
import {Provider} from 'react-redux';
import {setProvider} from './library/Navigation';
import {initModules} from './routes';
import {initRoutes} from './routes';
import configureStore from './redux/store';
import {Log} from './library';

// Нужно для того что бы текст не скейлился в зависимости от настроек телефона
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

const {store} = configureStore();

/** Оборачивает компоненты редаксом */
function ReduxProvider(Component) {
  const _store = store || configureStore();

  return (props) => (
    <Provider store={_store}>
      <Component {...props} />
    </Provider>
  );
}

/** Точка входа */
export default async function runApp() {
  Log('runApp');
  setProvider(ReduxProvider);
  initModules();
  initRoutes();
  Log('runApp');
}
