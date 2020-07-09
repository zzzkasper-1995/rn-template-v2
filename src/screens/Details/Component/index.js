import React from 'react';
import {Log, ModuleWrapper} from '../../../library/functional';
import {View, Image, Text} from '../../../library/basicComponents';
import {ViewStyles, TextStyles} from '../../../theming';
import styles from './styles';

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidAppear() {
    Log('componentDidAppear');
  }

  render() {
    Log('render Details', this.props);
    const {info} = this.props;

    return (
      <View type="safeArea" style={styles.mainContainer}>
        <View style={[ViewStyles.row, ViewStyles.mainRow, styles.main]}>
          <View style={ViewStyles.row}>
            <Image
              isFast
              source={{uri: info.imageUrl}}
              resizeMode="contain"
              style={styles.img}
            />
            <Text style={TextStyles.primary}>{info.fullName}</Text>
          </View>
          <Text style={TextStyles.big}>
            {info.price} {info.symbol}
          </Text>
        </View>
      </View>
    );
  }
}

export default ModuleWrapper(Details);
