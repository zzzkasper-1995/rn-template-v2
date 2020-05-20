import React, {PureComponent} from 'react';
import {Animated, Platform} from 'react-native';

const DURATION = Platform.OS === 'ios' ? 300 : 300;

type Props = {
	isShow: Boolean,
	style: Object,
	duration: Number,
	durationHide: Number,
};

export default class LateView extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.opacity = new Animated.Value(0);
	}

	componentDidMount() {
		const {isShow} = this.props;

		if (isShow) {
			this.animate(1);
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		const {isShow} = this.props;
		const nextIsShow = nextProps.isShow;

		if (!isShow && nextIsShow) {
			this.animate(1);
		}
		if (isShow && !nextIsShow) {
			this.animate(0);
		}
	}

	animate = (toValue: Boolean) => {
		const {duration, durationHide} = this.props;

		let resDuration = DURATION;
		if (toValue === 0 && durationHide) {
			resDuration = durationHide;
		}
		if (toValue === 1 && duration) {
			resDuration = duration;
		}

		Animated.timing(this.opacity, {
			toValue,
			duration: resDuration,
			useNativeDriver: true,
		}).start();
	};

	render() {
		const {style, isShow, ...other} = this.props;

		const opacity = {
			opacity: this.opacity.interpolate({
				inputRange: [0, 1],
				outputRange: [0, 1],
			}),
		};

		return (
			<Animated.View
				pointerEvents={!isShow ? 'none' : 'auto'}
				style={[style, opacity]}
				{...other}
			/>
		);
	}
}
