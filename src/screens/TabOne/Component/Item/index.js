import React from 'react';
import {Text, View} from 'react-native';
import {Log} from '../../../../library/functional';
import {ViewStyles, TextStyles} from '../../../../theming';
import styles from './styles';
import {Image} from '../../../../library/basicComponents';

const Item = (props) => {
  Log('render TabOne/Item', props);
  const {item} = props;

  return (
    <View
      style={[
        ViewStyles.row,
        {
          borderBottomWidth: 1,
          borderColor: '#bcc6cf',
        },
      ]}>
      <View style={ViewStyles.row}>
        <Image
          isFast
          source={{uri: item.imageUrl}}
          resizeMode="contain"
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#f1f2f7',
            marginRight: 8,
          }}
        />
        <Text style={TextStyles.primaryText}>{item.fullName}</Text>
      </View>
      <Text style={{fontSize: 20}}>{item.price}</Text>
    </View>
  );
};

export default Item;
