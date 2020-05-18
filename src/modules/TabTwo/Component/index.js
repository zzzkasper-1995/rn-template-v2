import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {Log, Theme, ModuleWrapper} from '../../../library';
import styleCreator from './styles';

class TabTwo extends React.Component {
  changeTheme = () => {
    Theme.setTheme('Default');
    this.forceUpdate();
  };

  render() {
    Log('render Tabtwo');
    const styles = Theme.createStyles(styleCreator);

    return (
      <SafeAreaView style={this.props.styles.safeArea}>
        <ScrollView
          style={styles.mainContainer}
          contentContainerStyle={styles.content}>
          <Text onPress={this.changeTheme} style={styles.text}>
            Theme Light
          </Text>
          <Text onPress={this.props.onOpenDraggable} style={styles.text}>
            Open draggable
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ModuleWrapper(TabTwo, {styleCreator: styleCreator});
