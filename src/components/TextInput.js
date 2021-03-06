import React, {useState} from 'react';
import {TextInput as RNTextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {theme} from '../styles/globalStyles';

const {primaryColor, borderColor} = theme;

const TextInput = React.forwardRef((props, ref) => {
  const [isFocused, setFocused] = useState(false);
  const {
    style,
    value,
    onChangeText,
    onSubmitEditing,
    placeholder,
    placeholderTextColor,
    keyboardType,
    editable,
    multiline,
    selectTextOnFocus,
    textAlignVertical,
    secureTextEntry,
    numberOfLines,
    maxLength,
  } = props;
  const borderStyle = {borderColor: isFocused ? primaryColor : borderColor};
  return (
    <RNTextInput
      ref={ref}
      style={[styles.container, borderStyle, style]}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      keyboardType={keyboardType}
      returnKeyType="done"
      underlineColorAndroid="rgba(0,0,0,0)"
      editable={editable}
      multiline={multiline}
      selectTextOnFocus={selectTextOnFocus}
      textAlignVertical={textAlignVertical}
      secureTextEntry={secureTextEntry}
      autoCapitalize={'none'}
      numberOfLines={numberOfLines}
      maxLength={maxLength}
    />
  );
});
export default TextInput;

TextInput.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.node,
    PropTypes.array,
  ]),
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  editable: PropTypes.bool,
  multiline: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
    minHeight: 40,
    paddingHorizontal: 20,
    color: 'black',
  },
});
