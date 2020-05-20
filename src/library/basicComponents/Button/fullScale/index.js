import React from 'react';
import {ScaleButton} from '../scale';
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

class FullScale extends React.PureComponent<Props> {
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
			icon,
			style,
			containerStyle,
			iconStyle,
			textStyle,
		} = this.props;

		return (
			<ScaleButton
				scale
				min={0.95}
				onAction={onAction}
				style={[styles.mainBtn, color && {backgroundColor: color}, style]}
				enable={!isLoadBar}
				containerStyle={containerStyle}>
				{isLoadBar ? (
					<ActivityIndicator size={28} color="white" />
				) : (
					<>
						{Boolean(icon) && (
							<Image
								isFast
								source={icon}
								resizeMode="contain"
								style={[styles.icon, text && {marginRight: 8}, iconStyle]}
							/>
						)}
						{Boolean(text) && (
							<Text i18n style={[styles.textBtn, textStyle]}>
								{text}
							</Text>
						)}
					</>
				)}
			</ScaleButton>
		);
	}
}

export {FullScale};
