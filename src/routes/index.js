import {Navigation, Log, SplashScreen, I} from '../library/functional';
import {rootMainApp} from './roots';
import {TAB_ONE, TAB_TWO, DETAILS, STACK_ONE, HEADER} from './screenName';

import TabTwo from '../screens/TabTwo';
import TabOne from '../screens/TabOne';
import Details from '../screens/Details';
import Header from '../screens/Header';
import {settingsDefault} from './settings';
import {openDetails} from './action';

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
  Navigation.registerComponent(DETAILS, Details);
  Navigation.registerComponent(HEADER, Header);

  SplashScreen.hide();
}

/** Карта переходов по экранам */
export function transition(type, payload) {
  Log('TRANSITION ', type, payload);

  switch (type) {
    case openDetails: {
      const {title} = payload;

      return Navigation.push(STACK_ONE, DETAILS, {
        topBar: {
          title: {
            component: {
              name: HEADER,
              passProps: {
                title: {
                  text: title,
                },
              },
            },
          },
        },
      });
    }
  }
}
