import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import {Path, Rect, Svg} from 'react-native-svg';

interface Props {
  style?: StyleProp<ViewStyle>;
  width: number;
  height: number;
  color?: string;
  focused?: boolean;
}

const Favourite = ({style, width, height, color, focused}: Props) => {
  return (
    <>
      <Svg
        style={[styles.icon, style]}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none">
        <Path
          d="M12.9195 3.072C13.2928 2.08733 14.7057 2.08733 15.0802 3.072L17.4952 9.76166C17.6643 10.205 18.0948 10.5002 18.5755 10.5002H24.5103C25.607 10.5002 26.0853 11.8652 25.2232 12.5337L20.9998 16.3335C20.8107 16.4789 20.6724 16.6806 20.6049 16.9094C20.5374 17.1383 20.5442 17.3827 20.6242 17.6075L22.1665 24.1443C22.5422 25.1943 21.3265 26.0962 20.4072 25.4498L14.6707 21.8098C14.4742 21.6718 14.24 21.5977 13.9998 21.5977C13.7597 21.5977 13.5255 21.6718 13.329 21.8098L7.59251 25.4498C6.67434 26.0962 5.45751 25.1932 5.83318 24.1443L7.37551 17.6075C7.45552 17.3827 7.46226 17.1383 7.39477 16.9094C7.32728 16.6806 7.18903 16.4789 6.99984 16.3335L2.77651 12.5337C1.91318 11.8652 2.39385 10.5002 3.48818 10.5002H9.42301C9.65668 10.5009 9.88509 10.4307 10.078 10.2989C10.2709 10.167 10.4192 9.97967 10.5033 9.76166L12.9183 3.072H12.9195Z"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
      {focused && (
        <Svg
          style={styles.selectedLine}
          width="35"
          height="4"
          viewBox="0 0 35 4"
          fill="none">
          <Rect width="35" height="4" rx="2" fill="white" />
        </Svg>
      )}
    </>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  icon: {},
  selectedLine: {
    paddingTop: 7.5,
  },
});
