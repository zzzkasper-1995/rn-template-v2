import React from 'react';
import {} from 'react-native';
import {WebView as Web} from 'react-native-webview';
import {BindSimple} from '../../Component';
import Styles from './styles';

// See: https://github.com/react-native-community/react-native-webview

/**
 *  Обетка над видженом
 *
 * @class WebView
 * @extends {React.PureComponent}
 */
class WebView extends React.PureComponent {
	constructor(props) {
		super(props);
		BindSimple(this, {styles: Styles});
	}

	render() {
		const {styles, props} = this;
		const {source, style, reference, ...other} = props;

		return (
			<Web
				ref={ref => {
					reference && reference(ref);
					this.web = ref;
				}}
				source={source}
				showsVerticalScrollIndicator={true}
				style={style}
				{...other}
			/>
		);
	}
}

export {WebView};
