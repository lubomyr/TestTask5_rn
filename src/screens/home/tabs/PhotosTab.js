import React from 'react';
import {View, Text} from 'react-native';
import {getTopBarOptions} from '../../../navigation/helper';

const PhotosTab = props => {
  return (
    <View>
      <Text>Photos</Text>
    </View>
  );
};
export default PhotosTab;
PhotosTab.options = getTopBarOptions('Photos');
