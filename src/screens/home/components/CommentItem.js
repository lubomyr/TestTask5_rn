import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {globalStyles} from '../../../styles/globalStyles';

const CommentItem = props => {
  const {style, comment} = props;
  const {name, email, body} = comment || {};

  return (
    <View style={style}>
      <Text style={globalStyles.title}>Name: {name}</Text>
      <Text style={globalStyles.title}>Email: {email}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};
export default CommentItem;

const styles = StyleSheet.create({
  body: {
    marginTop: 5,
  },
});
