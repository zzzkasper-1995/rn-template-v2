import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {Theme, Log} from '../../../library';
import styleCreator from './styles';

class TabOne extends React.Component {
  constructor(props) {
    super(props);

    this.styles = Theme.createStyles(styleCreator);
  }

  changeTheme = () => {
    Theme.setTheme('Dark');
    this.styles = Theme.createStyles(styleCreator);
    this.forceUpdate();
  };

  render() {
    const {styles} = this;

    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.mainContainer}>
          <Text style={{width: 200, height: 200, backgroundColor: 'red'}}>
          TabOne
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default TabOne;
