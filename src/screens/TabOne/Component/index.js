import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Theme, Log, ModuleWrapper} from '../../../library/functional';
import {FlatList} from '../../../library/basicComponents';
import {ViewStyles, TextStyles} from '../../../theming';
import styles from './styles';
import Item from './Item';

class TabOne extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidAppear() {
    this.props.loadTopCoin();
  }

  changeTheme = () => {
    // Theme.setTheme('Dark');
    // this.forceUpdate();

    this.props.loadTopCoin();
  };

  render() {
    Log('render TabOne', this.props);
    const {coins} = this.props;

    return (
      <SafeAreaView style={styles.mainContainer}>
        <FlatList data={coins} renderItem={Item} />
        <View style={[ViewStyles.item, ViewStyles.shadow, styles.item]}>
          <Text onPress={this.changeTheme} style={TextStyles.normal}>
            Theme Dark
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default ModuleWrapper(TabOne);
