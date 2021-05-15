import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';

const FieldWrapper = props => {
  const {style: propsStyle, title, children, labelStyle = {}} = props;
  return (
    <View style={propsStyle}>
      <Text style={[styles.title, labelStyle]}>{title}</Text>
      <View style={styles.childrenWrapper}>{children}</View>
    </View>
  );
};
export default FieldWrapper;

FieldWrapper.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.node,
    PropTypes.array,
  ]),
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: 'black',
  },
  childrenWrapper: {
    marginTop: 10,
  },
});
