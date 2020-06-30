import React from 'react';
import {Text, View} from 'react-native';
import {ViewStyles, TextStyles} from '../../../../theming';
import styles from './styles';
import {Image, Button} from '../../../../library/basicComponents';

const Item = (props) => {
  // Log('render TabOne/Item', props);
  const {item, isLast, onOpenDetails} = props;

  const hendlePress = () =>
    onOpenDetails({tiket: item.key, fullName: item.fullName});

  return (
    <Button type="darkPress" onPress={hendlePress} style={ViewStyles.row}>
      <View style={[styles.content, isLast && {borderBottomWidth: 0}]}>
        <View style={[ViewStyles.row, styles.textView]}>
          <Image
            isFast
            source={{uri: item.imageUrl}}
            resizeMode="contain"
            style={styles.img}
          />
          <View style={{flex: 1, maxWidth: 160}}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[TextStyles.primary]}>
              {item.fullName}
            </Text>
            <Text style={TextStyles.primary}>{item.name}</Text>
          </View>
        </View>

        <Text style={[TextStyles.big]}>
          {item.price} {item.symbol}
        </Text>
      </View>
    </Button>
  );
};

export default Item;
