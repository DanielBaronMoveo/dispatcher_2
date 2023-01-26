import {StyleProp, ViewStyle, StyleSheet} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface Props {
  width: number;
  height: number;
  style?: StyleProp<ViewStyle>;
}

const Search = ({width, height, style}: Props) => {
  return (
    <Svg
      style={[styles.icon, style]}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none">
      <Path
        d="M9.1665 16.6665C13.3086 16.6665 16.6665 13.3086 16.6665 9.1665C16.6665 5.02437 13.3086 1.6665 9.1665 1.6665C5.02437 1.6665 1.6665 5.02437 1.6665 9.1665C1.6665 13.3086 5.02437 16.6665 9.1665 16.6665Z"
        stroke="#B6B6EA"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.3333 18.3333L15 15"
        stroke="#B6B6EA"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Search;

const styles = StyleSheet.create({
  icon: {},
});
