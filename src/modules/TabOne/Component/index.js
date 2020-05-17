import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {Theme, Log, ModuleWrapper} from '../../../library';
import styleCreator from './styles';

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
    const styles = Theme.createStyles(styleCreator);

    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.mainContainer}>
          <Text
            onPress={this.changeTheme}
            style={{width: 200, height: 200, backgroundColor: 'red'}}>
            Theme Dark
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ModuleWrapper(TabOne, {styleCreator: styleCreator});
