import React from 'react';
import {Text, View} from 'react-native';

const Greeting = ({name}) => {
  return (
    <View>
      <Text>안녕하세요 {name}님!</Text>
    </View>
  );
};

Greeting.defaultProps = {
  name: '리엑트 네이티브',
};

export default Greeting;
