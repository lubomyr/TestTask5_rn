import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {globalStyles} from '../../../../styles/globalStyles';

const PostItem = props => {
  const {style, post, onPress} = props;
  const {title, body} = post || {};
  const TouchableView = onPress ? TouchableOpacity : View;

  return (
    <TouchableView style={style} onPress={onPress}>
      <Text style={globalStyles.title}>{title}</Text>
      <Text>{body}</Text>
    </TouchableView>
  );
};
export default PostItem;
