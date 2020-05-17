import React from 'react';
import {Text, TextInput} from 'react-native';
import {Provider} from 'react-redux';
import {setProvider} from './library/Functional/Navigation';
import {initModules} from './routes';
import {initRoutes} from './routes';
import configureStore from './redux/store';
import {Log, Theme} from './library';
import theming from './theming';

// Отменяем системный автоскейл текста устанвливаемый настройками телефона
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
  Theme.setColorKit(theming.Color);
  setProvider(ReduxProvider);
  initModules();
  initRoutes();
}
