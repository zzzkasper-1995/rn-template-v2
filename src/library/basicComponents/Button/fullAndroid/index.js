import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {Text} from '../../Text';
import {ActivityIndicator} from '../../ActivityIndicator';
import {Theme} from '../../../Theme';
import Styles from './styles';
import {Image} from '../../Image';

type Props = {
	screenProps: {
		onAction: Function,
		isLoadBar: Boolean,
		text: String,
		style: Object | Array,
		textStyle: Object | Array,
	},
};

class FullAndroid extends React.PureComponent<Props> {
	constructor(props) {
		super(props);
		this.styles = Theme.createStyles(Styles);
	}

	render() {
		const {styles} = this;
		const {
			onAction,
			isLoadBar,
			text,
			color,
			style,
			icon,
			iconStyle,
			textStyle,
			activityIndicator,
			rippleColor,
		} = this.props;

		return (
			<RectButton
				onPress={onAction}
				style={[styles.mainBtn, color && {backgroundColor: color}, style]}
				enable={!isLoadBar}
				rippleColor={rippleColor}>
				{isLoadBar ? (
					activityIndicator ? (
						activityIndicator()
					) : (
						<ActivityIndicator size="large" color="white" />
					)
				) : (
					<>
						{icon && (
							<Image
								isFast
								source={icon}
								resizeMode="contain"
								style={[styles.icon, text && {marginRight: 8}, iconStyle]}
							/>
						)}
						{!!text && (
							<Text i18n style={[styles.textBtn, textStyle]}>
								{text}
							</Text>
						)}
					</>
				)}
			</RectButton>
		);
	}
}

export {FullAndroid};
