/** @module Navigation */
import {Navigation} from 'react-native-navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {EventsRegistry} from 'react-native-navigation/lib/dist/events/EventsRegistry';
import Log from '../Log';
// import {Log} from '../../library';

let targetScreen; // id текущего экрана
let targetModal; // id текущего экрана модального окна
let lastScreen; // id экрана который был
let provider; // обертка редакса
let screenEventListenerDidAppear;
let screenEventListenerDidDisappear;
let screenEventListenerModalDismissed;
let commandListener;

const dbModalListener = {};
const isWait = false; // для игнорирования сторонних операций во время совершения операции

// const lastNameScreen = '';
// const stack = []; // для стэк навигации (орентировочный маршрут)
// let isSwipebl = true;
// const timeWait = 1000; // ms

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
 * @param {String} currentID имя компонента с которого делается переход
 * @param {String} nameScreen имя компонента на который делается переход
 * @param {Object} options настройки перехода см(док wix/react-native-navigation)
 * @param {Object} passProps пропса для передачи между экранами через натив
 */
const push = (currentID, nameScreen, options = {}, passProps = {}) => {
  if (targetScreen !== nameScreen) {
    targetScreen = nameScreen;

    Navigation.push(currentID, {
      component: {
        id: nameScreen,
        name: nameScreen,
        passProps,
        options,
      },
    });
  }
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
 * Отслеживает последовательность открытия экранов пользователем
 * @param {String} root имя корня навигации
 * @param {Object} service сервисы для регистрации и отправки какой0либо информации
 */
const traking = (root, service) => {
  screenEventListenerDidAppear = Navigation.events().registerComponentDidAppearListener(
    ({componentId, componentName}) => {
      // Log('registerComponentDidAppearListener', componentId, componentName);
      targetScreen = componentId;
      if (targetScreen !== targetModal) {
        targetModal = undefined;
      }
    },
  );
  screenEventListenerDidDisappear = Navigation.events().registerComponentDidDisappearListener(
    ({componentId, componentName}) => {},
  );
  screenEventListenerModalDismissed = Navigation.events().registerModalDismissedListener(
    ({componentId, modalsDismissed}) => {
      // Log('screenEventListenerModalDismissed', dbModalListener, componentId, modalsDismissed);
      dbModalListener[componentId] &&
        dbModalListener[componentId](modalsDismissed);
      targetModal = '';
      targetScreen = '';
    },
  );
  commandListener = Navigation.events().registerCommandListener(
    (name, params) => {
      if (name === 'dismissOverlay') {
        targetScreen = '';
      }

      if (name.includes('dismissModal')) {
        targetModal = undefined;
      }

      // Log('commandListener', name, params, name.includes('dismissModal'));
    },
  );
};

const deleteTraking = () => {
  screenEventListenerDidAppear?.remove?.();
  screenEventListenerDidDisappear?.remove?.();
  screenEventListenerModalDismissed?.remove?.();
  commandListener?.remove?.();
};

const dbOverlay = {};
/**
 * Показывает компонент как наложение
 * @param {String} name имя/ид  компонента
 * @param {Object} options  параметры
 */
const showOverlay = (name, options, passProps) => {
  if (targetScreen !== name) {
    targetScreen = name;
    dbOverlay[name] = true;
    Navigation.showOverlay({
      component: {
        id: name,
        name,
        options,
        passProps,
      },
    });
  }
};

/**
 * Скрывает все наложения на экране по имени/id
 * @param {String} name имя/ид  компонента
 */
const dismissOverlay = (name) => {
  if (dbOverlay[name]) {
    dbOverlay[name] = false;
    Navigation.dismissOverlay(name);
  }
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

const setListenerModalClose = (nameModal, callback) => {
  dbModalListener[nameModal] = callback;
};
const events = (): EventsRegistry => Navigation.events();

export default {
  registerComponent,
  pop,
  push,
  setRoot,
  bindComponent,
  navigateTab,
  mergeOptions,
  traking,
  deleteTraking,
  showOverlay,
  dismissOverlay,
  storeDispatch,
  setProvider,
  showModal,
  dismissModal,
  initConstans,
  getConstans,
  setListenerModalClose,
  events,
};
