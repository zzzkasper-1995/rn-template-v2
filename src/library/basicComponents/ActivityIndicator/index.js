import React from 'react';
import {ActivityIndicator as UIActivityIndicator} from 'react-native';
import {
	BallIndicator,
	BarIndicator,
	DotIndicator,
	MaterialIndicator,
	PacmanIndicator,
	PulseIndicator,
	SkypeIndicator,
	WaveIndicator,
} from 'react-native-indicators';
import HorizontalIndicator from './horizontal-indicator';

class ActivityIndicator extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {props} = this;
		const {ball, dot, bar, material, pacman, pulse, skype, horizontal, ...other} = props;

		if (ball) {
			return <BallIndicator {...other} />;
		}
		if (dot) {
			return <DotIndicator {...other} />;
		}
		if (bar) {
			return <BarIndicator {...other} />;
		}
		if (material) {
			return <MaterialIndicator {...other} />;
		}
		if (pacman) {
			return <PacmanIndicator {...other} />;
		}
		if (pulse) {
			return <PulseIndicator {...other} />;
		}
		if (skype) {
			return <SkypeIndicator {...other} />;
		}
		if (horizontal) {
			return <HorizontalIndicator {...other} />;
		}

		return <UIActivityIndicator {...other} />;
	}
}

export {ActivityIndicator};
