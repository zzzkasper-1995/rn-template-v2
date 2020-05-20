import React from 'react';

import {TouchableOpacity, ActivityIndicator} from 'react-native';
import {Icon} from '../../Icon';
import {Text} from '../../Text';
import {View} from '../../View';
import Styles from './styles';
import {BindSimple} from '../../../Component';

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
class Around extends React.Component {
	constructor(props) {
		super(props);
		BindSimple(this, {styles: Styles});
	}

	render() {
		const {styles, props, compose} = this;

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
			activeOpacity,
			activityIndicator,
			textStyle,
		} = props;

		const styleAround = [
			styles.btnAround,
			style,
			color && {borderColor: color},
			(!enable || isLoadBar) && {opacity: OPACITY},
			disabledColor && (!enable || isLoadBar) && {backgroundColor: disabledColor},
		];

		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styleAround}
					onPress={onAction}
					activeOpacity={OPACITY}
					disabled={isLoadBar || !enable}>
					<View style={styles.inButtonContainer}>
						{isLoadBar ? (
							activityIndicator ? (
								activityIndicator()
							) : (
								<ActivityIndicator size="large" color={color || 'black'} />
							)
						) : (
							<>
								{icon && <Icon name={icon} style={styles.icon} color={color} style={iconStyle} />}
								<Text
									i18n
									style={compose(styles.textBtnAround, textStyle)}
									ellipsizeMode="tail"
									numberOfLines={1}>
									{text}
								</Text>
							</>
						)}
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

export {Around};
