import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Log, Theme, ModuleWrapper} from '../../../library';
import styles from './styles';
import {TextStyles, ViewStyles} from '../../../theming';

class TabTwo extends React.Component {
  changeTheme = () => {
    Theme.setTheme('Default');
    this.forceUpdate();
  };

  render() {
    Log('render Tabtwo');

    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.mainContainer}
          contentContainerStyle={styles.content}>
          <View style={[ViewStyles.item, ViewStyles.shadow, styles.item]}>
            <Text onPress={this.changeTheme} style={TextStyles.normal}>
              Theme Light
            </Text>
          </View>
          <View style={[ViewStyles.item, ViewStyles.shadow, styles.item]}>
            <Text
              onPress={this.props.onOpenDraggable}
              style={TextStyles.normal}>
              Open draggable
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ModuleWrapper(TabTwo);
