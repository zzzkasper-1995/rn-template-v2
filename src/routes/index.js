import {Navigation, registerComponent, setRoot} from '../library/Functional/Navigation';
import projectList from '../modules/projectList';
import {rootMainApp} from './roots';
import {PROJECT_LIST} from './screenName';

/** Инициализация модулей */
export function initModules() {
  registerComponent(PROJECT_LIST, projectList);
}

/** Инициализация дерева навигаци */
export function initRoutes() {
  Navigation.events().registerAppLaunchedListener(async () => {
    // Navigation.setDefaultOptions(settingsDefault);
    setRoot(rootMainApp);
  });
}
