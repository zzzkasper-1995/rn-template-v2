import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {Theme, Log, ModuleWrapper} from '../../../library';
import styles from './styles';

class TabOne extends React.Component {
  constructor(props) {
    super(props);
    props.loadingLastSession();
  }

  changeTheme = () => {
    Theme.setTheme('Dark');
    this.forceUpdate();
  };

  render() {
    Log('render TabOne');

    return (
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView
          style={styles.mainContainer}
          contentContainerStyle={styles.content}>
          <Text onPress={this.changeTheme} style={styles.text}>
            Theme Dark
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ModuleWrapper(TabOne);
