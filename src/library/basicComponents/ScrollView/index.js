import React from 'react';
import {ScrollView, RefreshControl} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {Log} from '../../Log';

/**
 * @module InitflowScrollView
 * @description Обертка над видженом ScrollView
 */
/**
 * @param {Object} contentContainerStyle These styles will be applied to the scroll view content container which wraps all of the child views.
 * @param {Object} style стиль
 * @param {Boolean} keyboardScrolling требуется ли скролинг к полю ввода
 * @param {Boolean} horizontal горизонтальный скрол
 * @param {Boolean} refreshing отображать ли индикатор загрузки
 * @param {Function} onRefresh функция загрузки
 */
class InitflowScrollView extends React.PureComponent {
	// подгружаем новые события по мере приближения к концу видимого списка
	handleOnUploadNext = event => {
		const {onUploadNext} = this.props;

		const {nativeEvent} = event;
		const {contentOffset, contentSize, layoutMeasurement} = nativeEvent;
		const currentY = contentOffset.y;
		const {height} = contentSize;
		const visibleHeight = layoutMeasurement.height;
		const currentOffset = nativeEvent.contentOffset.y;

		try {
			const isDown = currentOffset > (this.offset || 0);
			this.offset = currentOffset;
			if (isDown && currentY > height - 2 * visibleHeight) {
				onUploadNext();
			}
		} catch (err) {
			Log('handleOnUploadNext err:', err);
		}
	};

	onScroll = event => {
		const {onScroll, onUploadNext} = this.props;

		if (onScroll) onScroll(event);
		if (onUploadNext) this.handleOnUploadNext(event);
	};

	render() {
		const {
			style,
			keyboardScrolling,
			contentContainerStyle,
			horizontal,
			refreshing,
			onRefresh,
			reference,
			scrollEventThrottle,
		} = this.props;

		if (!keyboardScrolling) {
			return (
				<ScrollView
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
					{...this.props}
					style={[styles.view, style]}
					contentContainerStyle={[!horizontal && styles.viewContent, contentContainerStyle]}
					refreshControl={
						onRefresh && <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
					}
					ref={ref => {
						reference && reference(ref);
						this.scrollView = ref;
					}}
					refreshing={refreshing}
					onRefresh={onRefresh}
					onScroll={this.onScroll}
					scrollEventThrottle={scrollEventThrottle || 0}
				/>
			);
		}
		return (
			<KeyboardAwareScrollView
				resetScrollToCoords={{x: 0, y: 0}}
				// extraScrollHeight={60}
				keyboardOpeningTime={0}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				scrollEventThrottle={scrollEventThrottle || 0}
				// keyboardDismissMode='on-drag'
				{...this.props}
				style={[styles.view, style]}
				ref={ref => {
					reference && reference(ref);
					this.scrollView = ref;
				}}
			/>
		);
	}
}

export {InitflowScrollView as ScrollView};
