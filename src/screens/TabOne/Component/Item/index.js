import React from 'react';
import {Text, View} from 'react-native';
import {ViewStyles, TextStyles} from '../../../../theming';
import styles from './styles';
import {Image} from '../../../../library/basicComponents';

const Item = (props) => {
  // Log('render TabOne/Item', props);
  const {item} = props;

  return (
    <View style={[ViewStyles.row, ViewStyles.mainRow, styles.main]}>
      <View style={ViewStyles.row}>
        <Image
          isFast
          source={{uri: item.imageUrl}}
          resizeMode="contain"
          style={styles.img}
        />
        <Text style={TextStyles.primary}>{item.fullName}</Text>
      </View>
      <Text style={TextStyles.big}>{item.price}</Text>
    </View>
  );
};

export default Item;
