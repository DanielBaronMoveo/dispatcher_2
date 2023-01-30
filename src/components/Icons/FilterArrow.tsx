import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {Path, Svg} from 'react-native-svg';

interface Props {
  style?: StyleProp<ViewStyle>;
  width: number;
  height: number;
}

const FilterArrow = ({style, width, height}: Props) => {
  return (
    <Svg
      style={[styles.icon, style]}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none">
      <Path
        d="M16.3335 5.3335L9.00016 12.6668L1.66683 5.3335"
        stroke="#5A5A89"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default FilterArrow;

const styles = StyleSheet.create({
  icon: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});
