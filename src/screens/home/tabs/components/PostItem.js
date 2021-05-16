import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {globalStyles} from "../../../../styles/globalStyles";

const PostItem = props => {
  const {style, post, onPress} = props;
  const {title, body} = post || {};
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={globalStyles.title}>{title}</Text>
      <Text>{body}</Text>
    </TouchableOpacity>
  );
};
export default PostItem;
