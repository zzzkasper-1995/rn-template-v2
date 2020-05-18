import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {Theme, Log, ModuleWrapper} from '../../../library';
import styleCreator from './styles';

class Draggable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    Log('render Draggable');
    const styles = Theme.createStyles(styleCreator);

    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.mainContainer}
          contentContainerStyle={styles.content}>
          <Text style={styles.text}>Draggable</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ModuleWrapper(Draggable, {styleCreator: styleCreator});
