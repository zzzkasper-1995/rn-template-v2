import React from 'react';
import {TouchableOpacity, Keyboard, Platform} from 'react-native';
import {RectButton, BaseButton, RawButton} from 'react-native-gesture-handler';
import {Simple} from './simple';
import {Full} from './full';
import {Around} from './around';
import {FullG} from './fullG';
import {ScaleButton} from './scale';
import {FullScale} from './fullScale';
import {FullAndroid} from './fullAndroid';
import {Log} from '../../Log';
import {FirebaseLib} from '../../FirebaseLib';
import {ANALYTICS_EVENT_TYPE} from '../../../core/constants';

/**
 * @module Button
 * @description Кнопка
 */
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
 * @param {Boolean} keyDismiss нужно ли скрывать клаву при нажатии
 * @param {Boolean} isSpring свойство применяется для scaleButton, делает анимацию пружинкой при увеличении кнопки
 */
class Button extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	handleDebug = () => {
		const {props} = this;
		const {text} = props;

		if (text) {
			FirebaseLib.analytics.customEvent(ANALYTICS_EVENT_TYPE.DEBUG_BTN, {text});
		}
	};

	handleOnAction = () => {
		const {onAction, keyDismiss} = this.props;

		if (keyDismiss) {
			requestAnimationFrame(Keyboard.dismiss);
		}
		if (onAction) {
			onAction();
		}
		this.handleDebug();
	};

	render() {
		const {props} = this;

		const {
			rnAndroid,
			fullG,
			simple,
			full,
			around,
			onAction = () => {},
			activeOpacity = 0.75,
			scale,
			isSpring,
			fullScale,
			fullAndroid,
			...other
		} = props;

		if (fullG) {
			return <FullG {...other} onAction={this.handleOnAction} activeOpacity={activeOpacity} />;
		}
		if (simple) {
			return <Simple {...other} onAction={this.handleOnAction} activeOpacity={activeOpacity} />;
		}
		if (full) {
			return <Full {...other} onAction={this.handleOnAction} activeOpacity={activeOpacity} />;
		}
		if (around) {
			return <Around {...other} onAction={this.handleOnAction} activeOpacity={activeOpacity} />;
		}
		if (scale) {
			return (
				<ScaleButton
					{...other}
					isSpring={isSpring}
					onAction={this.handleOnAction}
					activeOpacity={activeOpacity}
				/>
			);
		}
		if (fullScale) {
			return (
				<FullScale
					{...other}
					isSpring={isSpring}
					onAction={this.handleOnAction}
					activeOpacity={activeOpacity}
				/>
			);
		}
		if (fullScale) {
			return (
				<FullScale
					{...other}
					isSpring={isSpring}
					onAction={this.handleOnAction}
					activeOpacity={activeOpacity}
				/>
			);
		}
		if (fullAndroid) {
			return (
				<FullAndroid activeOpacity={activeOpacity} {...other} onAction={this.handleOnAction} />
			);
		}
		if (rnAndroid && Platform.OS !== 'ios') {
			return <RectButton activeOpacity={activeOpacity} {...other} onPress={this.handleOnAction} />;
		}

		return (
			<TouchableOpacity
				removeMoveResponder
				activeOpacity={activeOpacity}
				{...other}
				onPress={this.handleOnAction}
			/>
		);
	}
}

export {Button};
