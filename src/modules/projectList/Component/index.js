import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import styles from './styles';

type Props = {
  onClose: Function,
};

const App = (props: Props) => {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.mainContainer}>
        <Text
          onPress={props.onClose}
          style={{width: 200, height: 200, backgroundColor: 'red'}}>
          App
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
