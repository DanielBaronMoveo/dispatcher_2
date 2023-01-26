import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface Props {
  style?: StyleProp<ViewStyle>;
  width: number;
  height: number;
}

const FilterIcon = ({style, width, height}: Props) => {
  return (
    <Svg
      style={[styles.icon, style]}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none">
      <Path
        d="M7.58267 9.53304V4.78353C7.58267 4.4611 7.32149 4.2002 6.99934 4.2002C6.6772 4.2002 6.41601 4.4611 6.41601 4.78353V9.53304C5.41252 9.79388 4.66602 10.6993 4.66602 11.7835C4.66602 12.8678 5.41252 13.7732 6.41601 14.034V22.2835C6.41601 22.606 6.6772 22.8669 6.99934 22.8669C7.32149 22.8669 7.58267 22.606 7.58267 22.2835V14.034C8.58617 13.7732 9.33267 12.8678 9.33267 11.7835C9.33267 10.6993 8.58617 9.79388 7.58267 9.53304Z"
        fill="#5A5A89"
      />
      <Path
        d="M14.5827 13.6164V4.78353C14.5827 4.4611 14.3215 4.2002 13.9993 4.2002C13.6772 4.2002 13.416 4.4611 13.416 4.78353V13.6164C12.4125 13.8772 11.666 14.7826 11.666 15.8669C11.666 16.9511 12.4125 17.8565 13.416 18.1173V22.2835C13.416 22.606 13.6772 22.8669 13.9993 22.8669C14.3215 22.8669 14.5827 22.606 14.5827 22.2835V18.1173C15.5862 17.8565 16.3327 16.9511 16.3327 15.8669C16.3327 14.7826 15.5862 13.8772 14.5827 13.6164Z"
        fill="#5A5A89"
      />
      <Path
        d="M23.3327 11.7835C23.3327 10.6993 22.5862 9.79388 21.5827 9.53304V4.78353C21.5827 4.4611 21.3215 4.2002 20.9993 4.2002C20.6772 4.2002 20.416 4.4611 20.416 4.78353V9.53304C19.4125 9.79388 18.666 10.6993 18.666 11.7835C18.666 12.8678 19.4125 13.7732 20.416 14.034V22.2835C20.416 22.606 20.6772 22.8669 20.9993 22.8669C21.3215 22.8669 21.5827 22.606 21.5827 22.2835V14.034C22.5862 13.7732 23.3327 12.8678 23.3327 11.7835Z"
        fill="#5A5A89"
      />
    </Svg>
  );
};

export default FilterIcon;

const styles = StyleSheet.create({
  icon: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});
