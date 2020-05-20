import React from 'react';
import {Switch} from 'react-native-gesture-handler';
import {Platform} from 'react-native';
import {Log} from '../../Log';

type Props = {
	initValue: Boolean, // инициализирует состояние переключателя
	onValueChange?: Function,
	thumbColor: String,
};

/**
 */
class RNSwitch extends React.PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			isTrue: props.initValue || false,
		};
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps?.value !== this.props?.value) {
			this.setState({isTrue: nextProps?.value});
		}
	}

	handleValueChange = value => {
		const {onValueChange} = this.props;

		onValueChange(value);
		this.setState({isTrue: value});
	};

	render() {
		// Log('RNSwitch', this.state);
		const {initValue, onValueChange, ...other} = this.props;
		const {isTrue} = this.state;

		return (
			<Switch
				value={isTrue}
				onValueChange={this.handleValueChange}
				{...this.other}
				thumbColor={this.props.thumbColor}
				trackColor={Platform.OS !== 'ios' ? {false: '#ddd'} : undefined}
			/>
		);
	}
}

RNSwitch.defaultProps = {
	onValueChange: () => {},
};

export {RNSwitch as Switch};
