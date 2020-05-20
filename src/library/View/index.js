import React from 'react';
import {
	View as RNView,
	SafeAreaView as RNSafeAreaView,
	TouchableWithoutFeedback,
	Keyboard,
	Platform,
	KeyboardAvoidingView,
} from 'react-native';
import LateView from './Late';
import WaveView from './Wave';
import Styles from './styles';
import {BindSimple} from '../../Component';
import {CollapsibleView} from './CollapsibleView';
import {getConstans} from '../../../core/navigation';

/**
 *  Обетка над видженом
 *
 * @class View
 * @extends {React.PureComponent}
 */
class View extends React.PureComponent {
	constructor(props) {
		super(props);
		BindSimple(this, {styles: Styles});
	}

	render() {
		const {
			pressDismissKeyboard,
			safeArea,
			wave,
			late,
			style,
			topBar,
			topBarMargin,
			statusBar,
			topBarIos,
			navBar,
			isKeyboardAdjusting,
			collaps,
			...other
		} = this.props;

		let s = style;
		if (Platform.OS !== 'ios') {
			if (topBar) {
				s = [style, {paddingTop: getConstans().topBarHeight + getConstans().statusBarHeight}];
			} else if (statusBar) {
				s = [style, {paddingTop: getConstans().statusBarHeight}];
			} else if (topBarMargin) {
				s = [style, {marginTop: getConstans().topBarHeight + getConstans().statusBarHeight}];
			}
			if (navBar) {
				s = [style, {marginBottom: getConstans().bottomTabsHeight}];
			}
		} else {
			if (topBarIos) {
				s = [style, {paddingTop: getConstans().topBarHeight + getConstans().statusBarHeight}];
			}
		}

		if (pressDismissKeyboard) {
			return (
				<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
					<RNView {...other} style={s} />
				</TouchableWithoutFeedback>
			);
		}

		if (safeArea || topBarIos) {
			return <RNSafeAreaView {...other} style={s} />;
		}
		if (isKeyboardAdjusting) {
			return (
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'height' : null}
					keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
					{...other}
					style={s}
				/>
			);
		}

		if (late) {
			return <LateView {...other} style={s} />;
		}
		if (wave) {
			return <WaveView {...other} style={s} />;
		}
		if (collaps) {
			return <CollapsibleView {...this.props} style={s} />;
		}
		return <RNView {...other} style={s} />;
	}
}

export {View};
