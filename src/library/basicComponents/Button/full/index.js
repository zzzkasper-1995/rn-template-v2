import React from 'react';

import {TouchableOpacity, ActivityIndicator} from 'react-native';
import {Icon} from '../../Icon';
import {Text} from '../../Text';
import {View} from '../../View';
import Styles from './styles';
import {BindSimple} from '../../../Component';
import {Image} from '../../Image';

const OPACITY = 0.7;

/**
 * @param {Function} onAction функция срабатываемая при нажатии
 * @param {String} text текст в нутри кнопки
 * @param {String} type тип кнопки
 * @param {String} color цвет кнопки в активном состоянии
 * @param {String} disabledColor цвет кнопки в неактивном состоянии
 * @param {String} icon название иконки отображаемой в кнопке
 * @param {Object} iconStyle стиль для иконки
 * @param {Object} style стили
 * @param {Boolean} isLoadBar нужен ли индикатор загрузки
 * @param {Boolean} enable активна кнопка или нет
 * @param {Number} activeOpacity прозрачность кнопки
 */
class Full extends React.Component {
	constructor(props) {
		super(props);
		BindSimple(this, {styles: Styles});
	}

	render() {
		const {styles, props} = this;

		const {
			onAction,
			text,
			color,
			style,
			icon,
			iconStyle,
			isLoadBar,
			enable = true,
			disabledColor,
			textStyle,
			activeOpacity,
			activityIndicator,
		} = props;

		const styleFull = [
			styles.btnFull,
			style,
			color && {backgroundColor: color},
			!disabledColor && (!enable || isLoadBar) && {opacity: OPACITY},
			disabledColor && (!enable || isLoadBar) && {backgroundColor: disabledColor},
		];

		return (
			<TouchableOpacity
				style={styleFull}
				onPress={onAction}
				activeOpacity={activeOpacity || OPACITY}
				disabled={isLoadBar || !enable}>
				<View style={styles.inButtonContainer}>
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
									source={icon}
									style={[styles.icon, text && {marginRight: 8}, iconStyle]}
									resizeMode="contain"
								/>
							)}
							{!!text && (
								<Text
									style={[styles.textBtnFull, textStyle]}
									i18n
									ellipsizeMode="tail"
									numberOfLines={1}>
									{text}
								</Text>
							)}
						</>
					)}
				</View>
			</TouchableOpacity>
		);
	}
}

export {Full};
