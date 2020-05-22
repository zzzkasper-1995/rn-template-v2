import React from 'react';
import {
  View as RNView,
  SafeAreaView as RNSafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  ViewProps,
} from 'react-native';
import FadeView from './Fade';
import WaveView from './Wave';
import {CollapsibleView} from './CollapsibleView';

// For more details,
// https://github.com/oblador/react-native-collapsible
// https://reactnative.dev/docs/view
// https://reactnative.dev/docs/keyboardavoidingview#__docusaurus
// https://reactnative.dev/docs/safeareaview#__docusaurus

type Props = {
  type?:
    | 'pressDismissKeyboard' // нажатие по области скрывает клавиатуру
    | 'safeArea' // SafeAreaView // https://reactnative.dev/docs/safeareaview#__docusaurus
    | 'isKeyboardAdjusting' // помогает при работе с клавиатурой // https://reactnative.dev/docs/keyboardavoidingview#__docusaurus
    | 'fade' // эфект fade при появлении и исчезновении
    | 'wave' // картинка затухает и появляется как синусоида
    | 'collaps', // слой сжимается // https://github.com/oblador/react-native-collapsible
  isShow?: Boolean,

  isDidMountAnimated?: Boolean, // only for type==='collaps'

  start?: Number, // only for type==='wave'
  end?: Number, // only for type==='wave'

  duration?: Number, // only for type===('fade' | 'wave')
};

/** View */
const View = (props: Props & ViewProps) => {
  const {type, ...other} = props;

  switch (type) {
    case 'pressDismissKeyboard': {
      return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <RNView {...other} />
        </TouchableWithoutFeedback>
      );
    }
    case 'safeArea': {
      return <RNSafeAreaView {...other} />;
    }
    case 'isKeyboardAdjusting': {
      return (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'height' : null}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
          {...other}
        />
      );
    }
    case 'fade': {
      return <FadeView {...other} />;
    }
    case 'wave': {
      return <WaveView {...other} />;
    }
    case 'collaps': {
      return <CollapsibleView {...this.props} />;
    }
    default: {
      return <RNView {...other} />;
    }
  }
};

export default View;
