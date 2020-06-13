import React from 'react';
import {Text, View} from 'react-native';
import {ViewStyles, TextStyles} from '../../../../theming';
import styles from './styles';
import {Image, Button} from '../../../../library/basicComponents';

const Item = (props) => {
  // Log('render TabOne/Item', props);
  const {item, onOpenDetails} = props;

  return (
    <Button
      onPress={() => onOpenDetails()}
      style={[ViewStyles.row, ViewStyles.mainRow, styles.main]}>
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
    </Button>
  );
};

export default Item;
