import React from 'react';
import {Log, ModuleWrapper} from '../../../library/functional';
import {FlatList, View} from '../../../library/basicComponents';
import styles from './styles';
import Item from './Item';

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidAppear() {
    Log('componentDidAppear');
  }

  render() {
    Log('render Details', this.props);
    const {coins} = this.props;

    return (
      <View type="safeArea" style={styles.mainContainer}>
        <FlatList data={coins} renderItem={Item} />
      </View>
    );
  }
}

export default ModuleWrapper(Details);
