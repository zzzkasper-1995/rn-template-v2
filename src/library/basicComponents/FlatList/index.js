import React from 'react';
import {FlatList, RefreshControl, FlatListProps} from 'react-native';
import {Log} from '../../Log';

// For more details,
// https://reactnative.dev/docs/flatlist#__docusaurus

type Props = {
  onUploadNext: Function,
};

/** Обертка над FlatList */
class WrapperFlatList extends React.Component<FlatListProps & Props> {
  /** Подгружаем новые события по мере приближения к концу видимого списка */
  handleOnUploadNext = (event) => {
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

  onScroll = (event) => {
    const {onScroll, onUploadNext} = this.props;

    if (onScroll) {
      onScroll(event);
    }
    if (onUploadNext) {
      this.handleOnUploadNext(event);
    }
  };

  handleRef = (ref) => {
    const {reference} = this.props;

    reference?.(ref);
    this.scrollView = ref;
  };

  render() {
    const {onRefresh, refreshing, scrollEventThrottle} = this.props;

    return (
      <FlatList
        ref={this.handleRef}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        initialNumToRender={20}
        {...this.props}
        refreshControl={
          onRefresh && (
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              progressViewOffset={64}
            />
          )
        }
        refreshing={refreshing}
        onScroll={this.onScroll}
        scrollEventThrottle={scrollEventThrottle}
      />
    );
  }
}

export default WrapperFlatList;
