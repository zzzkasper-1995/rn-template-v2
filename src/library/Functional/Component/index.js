import React from 'react';
import {BackHandler} from 'react-native';
import Navigation from '../Navigation';
import {Theme} from '..';

/**
 * Обертка над компонентами
 * Обрабатываем инициаторов перехода назад
 * Помогает обновлять тему компонента на лету
 * @export
 * @param {*} Component
 * @param {*} {isBack}
 * @returns
 */
export default function ModuleWrapper(Component, params = {}) {
  const {isBack = true} = params;
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        theme: Theme.getName(),
      };

      this.iosSwipeBack();
      Theme.addEventListener((theme) => this.setState({theme}));
    }

    componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    // Логика при размонтровании
    componentWillUnmount() {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        this.handleBackPress,
      );
    }

    // Логика при установки экрана в фокус
    componentDidAppear() {
      this.component.componentDidAppear?.();
    }

    // Логика при снятии фокуса с экрана
    componentDidDisappear() {
      this.component.componentDidDisappear?.();
    }

    /** Обработчик свайпа для перехода назад */
    iosSwipeBack = () => {
      const {componentId} = this.props;

      Navigation.mergeOptions(componentId, {
        popGesture: isBack,
      });
    };

    /** Обработчик нажатия системной кнопки "назад" */
    handleBackPress = () => {
      if (isBack) {
        return false;
      }
      return true;
    };

    render() {
      const {theme} = this.state;

      return <Component theme={theme} {...this.props} />;
    }
  };
}
