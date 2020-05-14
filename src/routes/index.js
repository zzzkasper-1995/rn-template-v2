import {Navigation, registerComponent, setRoot} from '../library/Navigation';
import projectList from '../modules/projectList';
import {rootMainApp} from './roots';
import {PROJECT_LIST} from './screenName';
import {Log} from '../library';

/** Инициализация модулей */
export function initModules() {
  Log('initModules');
  registerComponent(PROJECT_LIST, projectList);
}

/** Инициализация дерева навигаци */
export function initRoutes() {
  Log('initRoutes');
  Navigation.events().registerAppLaunchedListener(async () => {
    Log('registerAppLaunchedListener');
    // Navigation.setDefaultOptions(settingsDefault);
    setRoot(rootMainApp);
  });
}
