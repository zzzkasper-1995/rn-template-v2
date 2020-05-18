import {Navigation} from '../library';
import {rootMainApp} from './roots';
import {TAB_ONE, TAB_TWO, DRAGGABLE} from './screenName';

import TabTwo from '../screens/TabTwo';
import TabOne from '../screens/TabOne';
import Draggable from '../screens/Draggable';

/** Инициализация модулей */
export function initModules() {
  Navigation.registerComponent(TAB_ONE, TabOne);
  Navigation.registerComponent(TAB_TWO, TabTwo);
  Navigation.registerComponent(DRAGGABLE, Draggable);
}

/** Инициализация дерева навигаци */
export function initRoutes() {
  Navigation.events().registerAppLaunchedListener(async () => {
    // Navigation.setDefaultOptions(settingsDefault);
    Navigation.setRoot(rootMainApp);
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
