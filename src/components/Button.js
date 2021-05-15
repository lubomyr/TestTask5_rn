import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {theme} from '../styles/globalStyles';

const {primaryColor, disabledColor, buttonTextColor} = theme;

const Button = props => {
  const {
    title = '',
    color = primaryColor,
    inverted,
    disabled,
    onPress,
    style,
    titleStyle = {},
  } = props;
  const RootView = disabled ? View : TouchableOpacity;
  const titleText = (
    <Text
      style={[
        {color: inverted ? color : buttonTextColor, fontWeight: 'bold'},
        titleStyle,
      ]}>
      {title}
    </Text>
  );
  const inlineStyle = {
    backgroundColor: disabled
      ? disabledColor
      : inverted
      ? 'transparent'
      : color,
    borderColor: disabled ? disabledColor : color,
  };

  return (
    <RootView style={[styles.basic, inlineStyle, style]} onPress={onPress}>
      {titleText}
    </RootView>
  );
};
export default Button;

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string,
  color: PropTypes.string,
  inverted: PropTypes.bool,
  disabled: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.node,
    PropTypes.array,
  ]),
  titleStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.node,
    PropTypes.array,
  ]),
};

const styles = StyleSheet.create({
  basic: {
    minHeight: 46,
    minWidth: 60,
    paddingHorizontal: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});
