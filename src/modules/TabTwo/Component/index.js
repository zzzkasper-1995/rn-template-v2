import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {Theme, Log} from '../../../library';
import styleCreator from './styles';

class TabTwo extends React.Component {
  constructor(props) {
    super(props);

    this.styles = Theme.createStyles(styleCreator);
  }

  changeTheme = () => {
    Theme.setTheme('Default');
    this.styles = Theme.createStyles(styleCreator);
    this.forceUpdate();
  };

  render() {
    const {styles} = this;

    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.mainContainer}>
          <Text style={{width: 200, height: 200, backgroundColor: 'red'}}>
            TabTwo
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default TabTwo;
