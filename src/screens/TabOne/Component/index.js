import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Theme, Log, ModuleWrapper} from '../../../library/functional';
import {ViewStyles, TextStyles} from '../../../theming';
import styles from './styles';

class TabOne extends React.Component {
  constructor(props) {
    super(props);
    props.loadTopCoin();
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
          <View style={[ViewStyles.item, ViewStyles.shadow, styles.item]}>
            <Text onPress={this.changeTheme} style={TextStyles.normal}>
              Theme Dark
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ModuleWrapper(TabOne);
