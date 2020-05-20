import React from 'react';
import {Animated, TouchableOpacity} from 'react-native';

const DURATION = 200;

type Props = {
	onPressIn?: Function,
	onPressOut?: Function,
	min?: Number,
	max?: Number,
	onAction?: Function,
};

class ScaleButton extends React.PureComponent<Props> {
	constructor(props) {
		super(props);
		this.scaleValue = new Animated.Value(1);
	}

	animateBig = () => {
		Animated.timing(this.scaleValue, {
			toValue: this.props.max,
			duration: DURATION,
			useNativeDriver: true,
		}).start();
	};

	animateBigSpring = () => {
		Animated.spring(this.scaleValue, {
			toValue: this.props.max,
			friction: 4,
			tension: 120,
			useNativeDriver: true,
		}).start();
	};

	animateLitle = () => {
		Animated.timing(this.scaleValue, {
			toValue: this.props.min,
			duration: DURATION,
			useNativeDriver: true,
		}).start();
	};

	handlePressIn = () => {
		this.animateLitle();
		this.props.onPressIn();
	};

	handlePressOut = () => {
		const {isSpring} = this.props;

		if (isSpring) {
			this.animateBigSpring();
		} else {
			this.animateBig();
		}
		this.props.onPressOut();
	};

	render() {
		const {onPressIn, onPressOut, onAction, containerStyle, ...other} = this.props;

		const scale = {
			transform: [
				{
					scale: this.scaleValue,
				},
			],
		};

		return (
			<Animated.View style={[scale, containerStyle]}>
				<TouchableOpacity
					onPressIn={this.handlePressIn}
					onPressOut={this.handlePressOut}
					onPress={onAction}
					{...other}
					activeOpacity={1}
				/>
			</Animated.View>
		);
	}
}

ScaleButton.defaultProps = {
	onPressIn: () => {},
	onPressOut: () => {},
	onAction: () => {},
	min: 0.92,
	max: 1,
};

export {ScaleButton};
