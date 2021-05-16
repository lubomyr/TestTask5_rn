import React from 'react';
import {View, Text} from 'react-native';
import {getTopBarOptions} from '../../../navigation/helper';

const UsersTab = props => {
  return (
    <View>
      <Text>Users</Text>
    </View>
  );
};
export default UsersTab;
UsersTab.options = getTopBarOptions('Users');
