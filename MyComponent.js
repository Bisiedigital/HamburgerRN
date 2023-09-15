import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';

const MyComponent = () => {
  return (
    <View>
      <Icon name="heart" type="font-awesome" color="#f00" />
      <Icon name="user" type="font-awesome" color="#000" />
    </View>
  );
};

export default MyComponent;
