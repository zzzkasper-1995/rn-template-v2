import React from 'react';
import {Log, ModuleWrapper} from '../../../library/functional';
import {FlatList, View} from '../../../library/basicComponents';
import styles from './styles';
import Item from './Item';

class TabOne extends React.Component {
  constructor(props) {
    super(props);

    props.onLoadTopCoin();
  }

  componentDidAppear() {
    Log('componentDidAppear');
  }

  changeTheme = () => {
    // Theme.setTheme('Dark');
    // this.forceUpdate();

    this.props.onLoadTopCoin();
  };

  renderItem = ({item}) => {
    const {onOpenDetails} = this.props;

    return <Item item={item} onOpenDetails={onOpenDetails} />;
  };

  render() {
    Log('render TabOne', this.props);
    const {coins} = this.props;

    return (
      <View type="safeArea" style={styles.mainContainer}>
        <FlatList data={coins} renderItem={this.renderItem} />
      </View>
    );
  }
}

export default ModuleWrapper(TabOne);
