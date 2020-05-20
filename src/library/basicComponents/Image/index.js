import React from 'react';
import FastImage from 'react-native-fast-image';
import {Image as RNImage} from 'react-native';
import {View} from '../View';
import {Text} from '../Text';

import Styles from './styles';
import {BindSimple} from '../../Component';
import {Log} from '../../Log';

/**
 * @module ImageView
 * @description Блок с картинкой
 */
/**
 * @param {String} name имя картинки, если отображаеться из списка имеющихся
 * @param {Object} style стиль иконки (в том числе высота и ширина)
 * @param {Object} uri uri до картинки, на пример 'www.google.com/yeuiyriy'
 * @param {String} resizeMode тип автоподгонки картинки
 * @param {Boolean} isFast использовать более оптимизированный компонент для вывода картинок (FastImage) или обычный Image
 * @param {Boolean} isReq используем сетевой запрос дл получения картинки
 * @param {Object} headers  шапка запроса
 * @param {String} priority  поретет запроса (normal,low,high)
 * @param {String} cache (immutable,web,cacheOnly)
 * @param {Object|Number} source ресурс картинки
 * @param {String} color цвет заливки
 */

class ImageView extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			isLoad: false,
		};
		BindSimple(this, {styles: Styles});
	}

	onLoadEnd = e => {
		if (this.props.onLoadEnd) {
			this.props.onLoadEnd(e);
		}
		this.setState({isLoad: true});
	};

	render() {
		const {styles, props} = this;
		const {
			style = {},
			name,
			uri,
			resizeMode,
			isFast,
			headers,
			priority,
			cache,
			text,
			isActive,
			isFade,
			fadeConfig,
			fadeDuration,
			source,
			color,
			isDummy,
			...other
		} = props;

		const styleImg = [styles.image, {tintColor: color}, style];
		const sourceImg = source || uri;

		if (isDummy) {
			return <View style={[styleImg, styles.dummy]} />;
		}
		if (isFast) {
			if (isFade) {
				return (
					<View late isShow={this.state.isLoad}>
						<FastImage
							style={styleImg}
							source={sourceImg}
							resizeMode={FastImage.resizeMode[resizeMode]}
							onLoadEnd={this.onLoadEnd}
							{...other}
						/>
					</View>
				);
			}
			if (sourceImg) {
				return text ? (
					<View style={[styleImg, styles.reserveView]}>
						{text && text.length >= 1 ? (
							<Text style={styles.text}>{text.toUpperCase()}</Text>
						) : null}

						<FastImage
							style={[styleImg, {position: 'absolute', top: 0, left: 0}]}
							source={sourceImg}
							resizeMode={FastImage.resizeMode[resizeMode]}
							fadeDuration={fadeDuration}
							onLoadEnd={this.onLoadEnd}
							{...other}
						/>
					</View>
				) : (
					<FastImage
						style={styleImg}
						tintColor={color}
						source={sourceImg}
						resizeMode={FastImage.resizeMode[resizeMode]}
						{...other}
					/>
				);
			}
			return (
				<View style={[styles.reserveView, styleImg]}>
					{text && text.length >= 1 ? (
						<Text style={styles.text}>{text && text.toUpperCase()}</Text>
					) : null}
				</View>
			);
		}

		return (
			<RNImage
				style={styleImg}
				source={sourceImg}
				resizeMode={resizeMode}
				fadeDuration={fadeDuration}
			/>
		);
	}
}

export {ImageView as Image};
