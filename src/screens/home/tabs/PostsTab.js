import React from 'react';
import {View, Text} from 'react-native';
import {getTopBarOptions} from '../../../navigation/helper';

const PostsTab = props => {
  return (
    <View>
      <Text>Posts</Text>
    </View>
  );
};
export default PostsTab;
PostsTab.options = getTopBarOptions('Posts');
