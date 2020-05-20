import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
// https://github.com/react-native-community/react-native-linear-gradient

/**
 * @module InitflowLinearGradient
 * @description градиент
 */
class InitflowLinearGradient extends React.PureComponent {
	render() {
		return (
			<LinearGradient
				locations={[0, 1]}
				start={{x: 0, y: 1}}
				end={{x: 0, y: 0}}
				colors={['rgba(255,255,255, 1)', 'rgba(255,255,255, 0)']}
				pointerEvents="none"
				{...this.props}
			/>
		);
	}
}

export {InitflowLinearGradient as LinearGradient};
