import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {FilterButtonProps} from '../../../interfaces/Button.interfaces';

export default function FilterButton({
  onPress,
  text,
  backgroundColor,
  borderColor,
  textColor,
}: FilterButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor, borderColor}]}
      onPress={onPress}>
      <Text style={[styles.text, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
