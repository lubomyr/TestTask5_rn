import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const UserItem = props => {
  const {style, user, onPress} = props;
  const {name, username, email, address, phone, website, company} = user || {};
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.row}>{name}</Text>
        <Text style={styles.row}>{username}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default UserItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  row: {
    flex: 1,
  },
});
