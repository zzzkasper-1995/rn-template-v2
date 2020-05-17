import React from 'react';
import {BackHandler} from 'react-native';
import {mergeOptions} from '../Navigation';

/**
 * Обертка над компонентами
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

      this.iosSwipeBack();
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

      mergeOptions(componentId, {
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
      return <Component {...this.props} />;
    }
  };
}
