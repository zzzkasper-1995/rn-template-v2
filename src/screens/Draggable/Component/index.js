import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Log, ModuleWrapper} from '../../../library';
import styles from './styles';
import DraggableView from './DraggableView/index2';

class Draggable extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    Log('render Draggable');

    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.text}>Draggable</Text>
        <DraggableView />
      </SafeAreaView>
    );
  }
}

export default ModuleWrapper(Draggable);
