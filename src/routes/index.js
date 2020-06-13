import {Navigation, Log} from '../library/functional';
import {rootMainApp} from './roots';
import {TAB_ONE, TAB_TWO, DRAGGABLE, DETAILS, STACK_ONE} from './screenName';

import TabTwo from '../screens/TabTwo';
import TabOne from '../screens/TabOne';
import Draggable from '../screens/Draggable';
import Details from '../screens/Details';
import {settingsDefault} from './settings';
import {openDraggable, openDetails} from './action';

/** Инициализация дерева навигаци */
export function initRoutes() {
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setDefaultOptions(settingsDefault);
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

/** Инициализация модулей */
export function initModules() {
  Navigation.registerComponent(TAB_ONE, TabOne);
  Navigation.registerComponent(TAB_TWO, TabTwo);
  Navigation.registerComponent(DRAGGABLE, Draggable);
  Navigation.registerComponent(DETAILS, Details);
}

/** Карта переходов по экранам */
export function transition(type) {
  Log('TRANSITION ', type);

  switch (type) {
    case openDraggable: {
      return Navigation.showModal(DRAGGABLE, {
        modalPresentationStyle: 'overCurrentContext',
        modalTransitionStyle: 'crossDissolve',
      });
    }
    case openDetails: {
      return Navigation.push(STACK_ONE, DETAILS);
    }
  }
}
