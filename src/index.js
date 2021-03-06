import React from 'react';
import {Text, TextInput} from 'react-native';
import {Provider} from 'react-redux';
import {initModules} from './routes';
import {initRoutes} from './routes';
import configureStore from './redux/store';
import {Theme, Navigation} from './library/functional';
import {ColorKit} from './theming';

// Отменяем системный автоскейл текста установленный настройками телефона
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
  Theme.setColorKit(ColorKit);
  Navigation.setProvider(ReduxProvider);
  initModules();
  initRoutes();
}
