import {
  Navigation,
  registerComponent,
  setRoot,
} from '../library/Functional/Navigation';
import {rootMainApp} from './roots';
import {TAB_ONE, TAB_TWO} from './screenName';

import TabTwo from '../modules/TabTwo';
import TabOne from '../modules/TabOne';
import {Log} from '../library';

/** Инициализация модулей */
export function initModules() {
  registerComponent(TAB_ONE, TabOne);
  registerComponent(TAB_TWO, TabTwo);
}

/** Инициализация дерева навигаци */
export function initRoutes() {
  Navigation.events().registerAppLaunchedListener(async () => {
    // Navigation.setDefaultOptions(settingsDefault);
    setRoot(rootMainApp);
  });

  // наблюдаем за нажатиями на табы
  // Navigation.events().registerBottomTabSelectedListener(async (event) => {
  //   Log('registerBottomTabSelectedListener', event);
  // });

  // // наблюдаем какие экраны пользователь закрыл
  // Navigation.events().registerComponentDidDisappearListener(async (event) => {
  //   Log('registerComponentDidDisappearListener', event);
  // });

  // // наблюдаем какие экраны пользователь открыл
  // Navigation.events().registerComponentDidAppearListener(async (event) => {
  //   Log('registerComponentDidAppearListener', event);
  // });
}
