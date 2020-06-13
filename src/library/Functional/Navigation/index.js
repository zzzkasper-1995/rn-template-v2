/** @module Navigation */
import {Navigation} from 'react-native-navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {EventsRegistry} from 'react-native-navigation/lib/dist/events/EventsRegistry';

let provider; // обертка редакса

/**
 * Переход назад по стек навигаци
 * @param {String} currentID имя компонента с которого производится переход
 * @param {Object} options настройки перехода см(док wix/react-native-navigation)
 */
const pop = (currentID, options = {}) => {
  Navigation.pop(currentID, options);
};

/**
 * Переход вперед по стек навигации
 * @param {String} currentID имя компонента компонента с которого делаем переход
 * @param {String} nameScreen имя компонента на который делается переход
 * @param {Object} options настройки перехода см(док wix/react-native-navigation)
 * @param {Object} passProps пропса для передачи между экранами через натив
 */
const push = (currentID, nameScreen, options = {}, passProps = {}) => {
  Navigation.push(currentID, {
    component: {
      id: nameScreen,
      name: nameScreen,
      passProps,
      options,
    },
  });
};

/**
 *  Переход по таб навигации wix
 *
 * @param {String} screenID имя таб навигатора или имя сцены в табнавигаторе с которой производится переход
 * @param {String} nameScreen имя сцены на которую производится переход
 * @param {Object} options почие настройки (см wix/react-native-navigation)
 */
const navigateTab = (screenID, nameScreen, options) => {
  Navigation.mergeOptions(screenID, {
    bottomTabs: {
      currentTabId: nameScreen,
      ...options,
    },
  });
};

/**
 * Замена дерева навигации
 * @param {Object} root дерево навигации (RNN)
 */
const setRoot = (root) => {
  Navigation.setRoot(root);
};

/**
 * Устанавливает провайдер для компонентов
 * @param {Object} component обертка редакса
 */
const setProvider = (component) => {
  provider = component || ((componentScreen) => componentScreen);
};

/**
 * Трансформирует экран
 * @param {*} screenID
 * @param {*} options настройки экрана
 */
const mergeOptions = (screenID, options) => {
  Navigation.mergeOptions(screenID, options);
};

/**
 * Расширяет компонент виксовскими штуками
 * @param {Object} self контекст
 */
const bindComponent = (self) => {
  Navigation.events().bindComponent(self);
};

/**
 * Регистрация компонентов
 * @param {String} name имя компонента
 * @param {Object} component компонент
 */
function registerComponent(name, component, isGesture = false) {
  Navigation.registerComponent(
    name,
    () =>
      !isGesture
        ? provider(gestureHandlerRootHOC(component))
        : provider(component),
    () => component,
  );
}

/**
 * Показывает компонент как наложение
 * @param {String} name имя/ид  компонента
 * @param {Object} options  параметры
 */
const showOverlay = (name, options, passProps) => {
  Navigation.showOverlay({
    component: {
      id: name,
      name,
      options,
      passProps,
    },
  });
};

/**
 * Скрывает все наложения на экране по имени/id
 * @param {String} name имя/ид  компонента
 */
const dismissOverlay = (name) => {
  Navigation.dismissOverlay(name);
};

const dbModal = {};
/**
 * Показывает компонент как модал
 * @param {String} name имя/ид  компонента
 * @param {Object} options  параметры
 */
const showModal = (name, options, passProps = {}) => {
  Navigation.showModal({
    component: {
      id: name,
      name,
      options,
      passProps,
    },
  });
};

/**
 * Скрывает модалку на экране по имени/id
 * @param {String} name имя/ид  компонента
 */
const dismissModal = (name, options) => {
  // targetModal = undefined;
  if (dbModal[name]) {
    dbModal[name] = false;
    Navigation.dismissModal(name, options);
  }
};

/**
 * Обернуть метод в функцию генератор собятия
 * @param {Function} action функция которую необходимо обернуть
 */
const storeDispatch = (action) => store.dispatch(action);

let _constans = {bottomTabsHeight: 0, statusBarHeight: 0, topBarHeight: 0}; // константы приложения
/**
 * инициализирует константы приложения
 */
const initConstans = async () => {
  const vr = await Navigation.constants();

  _constans = {
    bottomTabsHeight: Math.floor(vr.bottomTabsHeight),
    statusBarHeight: Math.floor(vr.statusBarHeight),
    topBarHeight: Math.floor(vr.topBarHeight),
  };
};
/**
 * Возвращает константы
 */
const getConstans = () => {
  return _constans;
};

const events = (): EventsRegistry => Navigation.events();

const setDefaultOptions = (options) => Navigation.setDefaultOptions(options);

export default {
  registerComponent,
  pop,
  push,
  setRoot,
  bindComponent,
  navigateTab,
  mergeOptions,
  showOverlay,
  dismissOverlay,
  storeDispatch,
  setProvider,
  showModal,
  dismissModal,
  initConstans,
  getConstans,
  events,
  setDefaultOptions,
};
