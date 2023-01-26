import {Text, StyleSheet, StyleProp, TextStyle} from 'react-native';
import React from 'react';

interface BaseTextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const BaseText = ({children, style}: BaseTextProps) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default BaseText;

const styles = StyleSheet.create({
  text: {},
});
