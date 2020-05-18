import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {Theme, Log, ModuleWrapper} from '../../../library';
import styleCreator, {tStyle} from './styles';
import DraggableView from './DraggableView/index2';

type Props = {
  styles: tStyle,
};
class Draggable extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    Log('render Draggable');
    const {styles} = this.props;
    // const styles = Theme.createStyles(styleCreator);

    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.text}>Draggable</Text>
        <DraggableView />
      </SafeAreaView>
    );
  }
}

export default ModuleWrapper(Draggable, {styleCreator: styleCreator});
