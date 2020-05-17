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

    return (
      <SafeAreaView style={this.props.styles.safeArea}>
        <ScrollView style={this.props.styles.mainContainer}>
          <Text
            onPress={this.changeTheme}
            style={{width: 200, height: 200, backgroundColor: 'red'}}>
            Theme Light
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ModuleWrapper(TabTwo, {styleCreator: styleCreator});
