import React from 'react';

import {TouchableOpacity, ActivityIndicator} from 'react-native';
import {Icon} from '../../Icon';
import {Text} from '../../Text';
import {View} from '../../View';
import Styles from './styles';
import {BindSimple} from '../../../Component';

const OPACITY = 0.7;

class Simple extends React.Component {
	constructor(props) {
		super(props);
		BindSimple(this, {styles: Styles});
	}

	render() {
		const {styles, props} = this;

		const {
			onAction,
			text,
			color,
			style,
			textStyle,
			isLoadBar,
			enable = true,
			disabledColor,
			activeOpacity,
		} = props;

		const styleSimple = [styles.container, style];
		const textStyleSimple = [styles.textBtnSimple, textStyle];

		return (
			<TouchableOpacity onPress={onAction} activeOpacity={activeOpacity} style={styleSimple}>
				<Text i18n style={textStyleSimple}>
					{text}
				</Text>
			</TouchableOpacity>
		);
	}
}

export {Simple};
