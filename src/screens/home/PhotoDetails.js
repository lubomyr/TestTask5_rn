import React from 'react';
import {View, Text} from 'react-native';
import {getTopBarOptions} from '../../navigation/helper';

const PhotoDetails = props => {
  return (
    <View>
      <Text>Photo Details</Text>
    </View>
  );
};
PhotoDetails.options = getTopBarOptions('Photo details');
export default PhotoDetails;
