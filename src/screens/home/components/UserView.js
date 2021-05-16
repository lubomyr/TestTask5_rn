import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {globalStyles} from '../../../styles/globalStyles';

const UserView = props => {
  const {style, user} = props;

  const renderObject = obj => {
    const keys = Object.keys(obj);
    const view = keys.map((item, index) => {
      const value = obj[item];
      if (item === 'id') {
        return null;
      }
      if (value === String(value)) {
        return (
          <View key={index} style={globalStyles.row}>
            <Text style={styles.label}>{item}:</Text>
            <Text style={styles.value}>{value}</Text>
          </View>
        );
      }
      if (Object.keys(value)) {
        return (
          <View style={{marginVertical: 10}}>
            <Text>{item}:</Text>
            {renderObject(value)}
          </View>
        );
      }
      return null;
    });
    return view;
  };

  return <View style={style}>{user ? renderObject(user) : null}</View>;
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
