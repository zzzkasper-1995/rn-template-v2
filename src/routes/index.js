import {
  Navigation,
  registerComponent,
  setRoot,
} from '../library/Functional/Navigation';
import {rootMainApp} from './roots';
import {TAB_ONE, TAB_TWO} from './screenName';

import TabTwo from '../modules/TabTwo';
import TabOne from '../modules/TabOne';

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
}
