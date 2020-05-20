import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {Log} from '../../Log';

/**
 *  Обертка над видженом FlatList
 *
 * @class InitflowFlatList
 * @extends {React.PureComponent}
 */
class InitflowFlatList extends React.PureComponent {
	direction = undefined; // 'down'|| 'up'

	// подгружаем новые события по мере приближения к концу видимого списка
	handleOnUploadNext = event => {
		const {onUploadNext, horizontal} = this.props;

		const {nativeEvent} = event;
		const {contentOffset, contentSize, layoutMeasurement} = nativeEvent;
		let currentPosition = contentOffset.y;
		let dist = contentSize.height;
		let visibleDist = layoutMeasurement.height;
		let currentOffset = nativeEvent.contentOffset.y;

		if (horizontal) {
			visibleDist = layoutMeasurement.width;
			currentOffset = nativeEvent.contentOffset.x;
			dist = contentSize.width;
			currentPosition = contentOffset.x;
		}

		try {
			const isDown = currentOffset > (this.offset || 0);
			this.offset = currentOffset;
			if (isDown && currentPosition > dist - 2 * visibleDist) {
				onUploadNext();
			}
		} catch (err) {
			Log('handleOnUploadNext err:', err);
		}
	};

	handleOnDirection = event => {
		const {horizontal, onDown, onUp} = this.props;

		const {nativeEvent} = event;
		let velocity = 0;
		let contentOffset = 0;
		let maxOffset = 0;
		// Log('nativeEvent', nativeEvent);
		try {
			if (horizontal) {
				velocity = nativeEvent.velocity.x;
				contentOffset = nativeEvent.contentOffset.x;
				maxOffset = nativeEvent.contentSize.width - nativeEvent.layoutMeasurement.width;
			} else {
				velocity = nativeEvent.velocity.y;
				contentOffset = nativeEvent.contentOffset.y;
				maxOffset = nativeEvent.contentSize.height - nativeEvent.layoutMeasurement.height;
			}
			const dirtection = velocity > 0 ? 'down' : 'up';

			if (contentOffset > 100 && dirtection === 'down' && this.direction !== dirtection && onDown) {
				this.direction = 'down';
				onDown();
			}
			if (
				maxOffset > contentOffset + 50 &&
				dirtection === 'up' &&
				this.direction !== dirtection &&
				onUp
			) {
				this.direction = 'up';
				onUp();
			}
		} catch {}
	};

	onScroll = event => {
		const {onScroll, onUploadNext, onDown, onUp} = this.props;

		if (onScroll) onScroll(event);
		if (onUploadNext) this.handleOnUploadNext(event);
		if (onDown || onUp) this.handleOnDirection(event);
	};

	render() {
		const {reference, onRefresh, refreshing, scrollEventThrottle} = this.props;

		return (
			<FlatList
				ref={reference}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				initialNumToRender={20}
				{...this.props}
				refreshControl={
					onRefresh && (
						<RefreshControl refreshing={refreshing} onRefresh={onRefresh} progressViewOffset={64} />
					)
				}
				refreshing={refreshing}
				onScroll={this.onScroll}
				scrollEventThrottle={scrollEventThrottle || 0}
			/>
		);
	}
}

export {InitflowFlatList as FlatList};
