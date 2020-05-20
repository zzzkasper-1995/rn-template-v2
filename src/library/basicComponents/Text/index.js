import React from 'react';
import {Text as RNText, Platform} from 'react-native';
import TextHTML from 'react-native-render-html';
import {LinearTextGradient} from 'react-native-text-gradient';
import {I} from '../../I18n';
import {BindSimple} from '../../Component';
import Styles from './styles';
import {Log} from '../../Log';
import {Theme} from '../../Theme';
import {Utils} from '../../Utils';

/**
 * Обертка над текстом
 *
 * @class Text
 * @extends {React.PureComponent}
 */
class Text extends React.PureComponent {
	constructor(props) {
		super(props);
		BindSimple(this, {styles: Styles});
	}

	render() {
		const color = Theme.getColors();
		const {styles, props} = this;
		const {
			style,
			children,
			i18n,
			html,
			isDummy,
			dummyStyle,
			multiline = true,
			grad,
			colors = [color.GRADIENT_TEXT1, color.GRADIENT_TEXT2],
			...other
		} = props;

		const st = {};

		// делаем полужирный шрифт на андройде
		try {
			const temp = !Array.isArray(style) ? [style] : [...style];

			if (Platform.OS === 'android') {
				for (const element of Utils.getArray(temp).reverse()) {
					if (element?.fontWeight === Theme.getSimpleConst().fontWeight.semibold) {
						st.fontFamily = 'Roboto-Medium';
						break;
					}
				}
			}
		} catch {}

		if (isDummy) {
			return (
				<RNText {...this.other} value="" style={[styles.text, style, styles.dummy, dummyStyle]} />
			);
		}
		if (html && i18n) {
			return (
				<TextHTML
					html={I.text(children || '')}
					imagesMaxWidth={styles.screen.width}
					baseFontStyle={style}
					{...other}
				/>
			);
		}
		if (html) {
			return (
				<TextHTML
					html={children}
					imagesMaxWidth={styles.screen.width}
					baseFontStyle={style}
					{...other}
				/>
			);
		}
		if (i18n) {
			return (
				<RNText
					ellipsizeMode="middle"
					numberOfLines={!multiline ? 1 : undefined}
					{...this.props}
					style={[styles.text, style, st]}>
					{I.text(children || '')}
				</RNText>
			);
		}
		if (grad) {
			return (
				<LinearTextGradient
					locations={[0, 1]}
					colors={colors}
					start={{x: 0, y: 0}}
					end={{x: 1, y: 0}}
					{...this.props}
					style={[styles.text, style]}>
					<RNText>{children || ''}</RNText>
				</LinearTextGradient>
			);
		}

		return (
			<RNText
				ellipsizeMode="middle"
				numberOfLines={!multiline ? 1 : undefined}
				{...this.props}
				style={[styles.text, style, st]}
			/>
		);
	}
}

export {Text};
