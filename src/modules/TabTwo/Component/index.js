import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {Theme, Log} from '../../../library';
import styleCreator from './styles';
import ModuleWrapper from '../../../library/Functional/Component';

class TabTwo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    Log('render Tabtwo');
    const styles = Theme.createStyles(styleCreator);

    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.mainContainer}>
          <Text
            onPress={this.changeTheme}
            style={{width: 200, height: 200, backgroundColor: 'red'}}>
            TabTwo
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ModuleWrapper(TabTwo);
