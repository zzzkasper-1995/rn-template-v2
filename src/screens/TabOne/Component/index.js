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

    const set = {
      mainContainer: {
        flex: 1,
        backgroundColor: '$background',
        paddingTop: 40,
      },
      content: {
        alignItems: 'center',
      },
      text: {
        fontSize: 20,
        color: '$primary',
      },
      list: {
        backgroundColor: '$background',
      },
    };
    const styles = Theme.create(set);

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

export default ModuleWrapper(TabOne, {styleCreator: styleCreator});
