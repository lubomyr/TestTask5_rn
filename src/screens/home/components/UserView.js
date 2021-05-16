import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {globalStyles} from '../../../styles/globalStyles';

const UserView = props => {
  const {style, user, onPress} = props;
  const {name, username, email, address, phone, website, company} = user || {};
  return (
    <View style={style} onPress={onPress}>
      <View style={styles.container}>
        <View style={globalStyles.row}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{name}</Text>
        </View>
        <View style={globalStyles.row}>
          <Text style={styles.label}>Username:</Text>
          <Text style={styles.value}>{username}</Text>
        </View>
        <View style={globalStyles.row}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{email}</Text>
        </View>
        <View style={globalStyles.row}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{phone}</Text>
        </View>
        <View style={globalStyles.row}>
          <Text style={styles.label}>Website:</Text>
          <Text style={styles.value}>{website}</Text>
        </View>
      </View>
    </View>
  );
};
export default UserView;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  label: {
    flex: 0.3,
  },
  value: {
    flex: 0.7,
  },
});
