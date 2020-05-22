import React from 'react';
import {ScrollView, RefreshControl, ScrollViewProps} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

// For more details,
// https://github.com/APSL/react-native-keyboard-aware-scroll-view
// https://reactnative.dev/docs/scrollview

type Props = {
  isKeyboardAdjusting?: Boolean,
  onUploadNext?: Function,
  reference?: Function,
};

/** Обертка над ScrollView */
class WrapperScrollView extends React.PureComponent<Props & ScrollViewProps> {
  // подгружаем новые события по мере приближения к концу видимого списка
  handleOnUploadNext = (event) => {
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
      console.log('handleOnUploadNext err:', err);
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
    const {
      style,
      isKeyboardAdjusting,
      contentContainerStyle,
      horizontal,
      refreshing,
      onRefresh,
      reference,
      scrollEventThrottle,
    } = this.props;

    if (!isKeyboardAdjusting) {
      return (
        <ScrollView
          ref={this.handleRef}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          {...this.props}
          style={[styles.view, style]}
          contentContainerStyle={[
            !horizontal && styles.viewContent,
            contentContainerStyle,
          ]}
          refreshControl={
            onRefresh && (
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            )
          }
          refreshing={refreshing}
          onRefresh={onRefresh}
          onScroll={this.onScroll}
          scrollEventThrottle={scrollEventThrottle}
        />
      );
    }
    return (
      <KeyboardAwareScrollView
        ref={this.handleRef}
        resetScrollToCoords={{x: 0, y: 0}}
        // extraScrollHeight={60}
        keyboardOpeningTime={0}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={scrollEventThrottle || 0}
        // keyboardDismissMode='on-drag'
        {...this.props}
        style={[styles.view, style]}
      />
    );
  }
}

export default WrapperScrollView;
