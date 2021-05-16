import React from 'react';
import {View, Text} from 'react-native';
import {getTopBarOptions} from '../../navigation/helper';

const UserDetails = props => {
  return (
    <View>
      <Text>User Details</Text>
    </View>
  );
};
UserDetails.options = getTopBarOptions('User details');
export default UserDetails;
