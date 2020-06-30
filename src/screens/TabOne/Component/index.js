import React from 'react';
import {Log, ModuleWrapper} from '../../../library/functional';
import {FlatList, View} from '../../../library/basicComponents';
import styles from './styles';
import Item from './Item';
import Utils from '../../../library/utils';

class TabOne extends React.Component {
  constructor(props) {
    super(props);

    props.onLoadTopCoin();
    props.onLoadTopCoin({page: 1});
  }

  componentDidAppear() {
    Log('componentDidAppear');
  }

  handleLoadNextPage = () => {
    Utils.functionLast(
      'loadTopCoin',
      () => {
        const {coins, onLoadTopCoin} = this.props;

        const nextPage = Math.ceil(coins.length / 10) + 1;
        onLoadTopCoin({page: nextPage});
      },
      1000,
    );
  };

  changeTheme = () => {
    // Theme.setTheme('Dark');
    // this.forceUpdate();

    this.props.onLoadTopCoin();
  };

  renderItem = ({item, index}) => {
    const {onOpenDetails, coins} = this.props;

    return (
      <Item
        item={item}
        onOpenDetails={onOpenDetails}
        isLast={coins.length === index + 1}
      />
    );
  };

  render() {
    Log('render TabOne', this.props);
    const {coins} = this.props;

    return (
      <View type="safeArea" style={styles.mainContainer}>
        <FlatList
          data={coins}
          renderItem={this.renderItem}
          onUploadNext={this.handleLoadNextPage}
        />
      </View>
    );
  }
}

export default ModuleWrapper(TabOne);
