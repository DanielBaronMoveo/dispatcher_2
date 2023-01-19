import React from 'react';
import {StyleSheet} from 'react-native';
import {Path, Svg} from 'react-native-svg';

interface Props {
  style?: any;
}

const Arrow = ({style}: Props) => {
  return (
    <Svg
      style={[styles.icon, style]}
      width="19"
      height="15"
      viewBox="0 0 19 15"
      fill="none">
      <Path
        d="M17.4998 7.25L1.5 7.25"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.0469 1.22541L17.5001 7.24941L11.0469 13.2744"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Arrow;

const styles = StyleSheet.create({
  icon: {},
});
