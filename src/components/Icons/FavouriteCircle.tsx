import {StyleProp, StyleSheet, ViewStyle, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Circle, Path, Svg} from 'react-native-svg';

interface Props {
  style?: StyleProp<ViewStyle>;
  width: number;
  height: number;
}

const FavouriteCircle = ({width, height, style}: Props) => {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <Pressable onPress={() => setIsFavourite(!isFavourite)}>
      {isFavourite ? (
        <Svg
          style={[styles.icon, style]}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          fill="none">
          <Circle
            cx="15"
            cy="15"
            r="14.5"
            fill="#131313"
            fill-opacity="0.49"
            stroke="white"
          />
          <Path
            d="M14.2593 6.50639C14.5153 5.8312 15.4841 5.8312 15.7409 6.50639L17.3968 11.0935C17.5128 11.3975 17.808 11.5999 18.1376 11.5999H22.207C22.9589 11.5999 23.2869 12.5359 22.6958 12.9943L19.7999 15.5999C19.6702 15.6996 19.5754 15.8378 19.5291 15.9948C19.4828 16.1517 19.4874 16.3193 19.5423 16.4734L20.5998 20.9558C20.8574 21.6758 20.0239 22.2942 19.3935 21.851L15.4601 19.355C15.3254 19.2603 15.1647 19.2095 15.0001 19.2095C14.8355 19.2095 14.6748 19.2603 14.5401 19.355L10.6067 21.851C9.97712 22.2942 9.14276 21.675 9.40035 20.9558L10.4579 16.4734C10.5128 16.3193 10.5174 16.1517 10.4711 15.9948C10.4248 15.8378 10.33 15.6996 10.2003 15.5999L7.30444 12.9943C6.71246 12.5359 7.04205 11.5999 7.79242 11.5999H11.8618C12.0221 11.6004 12.1787 11.5523 12.311 11.4619C12.4432 11.3715 12.5449 11.243 12.6026 11.0935L14.2585 6.50639H14.2593Z"
            fill="white"
          />
        </Svg>
      ) : (
        <Svg
          style={[styles.icon, style]}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          fill="none">
          <Circle cx="15" cy="15" r="15" fill="#131313" fill-opacity="0.49" />
          <Path
            d="M12.9195 3.072C13.2928 2.08733 14.7057 2.08733 15.0802 3.072L17.4952 9.76166C17.6643 10.205 18.0948 10.5002 18.5755 10.5002H24.5103C25.607 10.5002 26.0853 11.8652 25.2232 12.5337L20.9998 16.3335C20.8107 16.4789 20.6724 16.6806 20.6049 16.9094C20.5374 17.1383 20.5442 17.3827 20.6242 17.6075L22.1665 24.1443C22.5422 25.1943 21.3265 26.0962 20.4072 25.4498L14.6707 21.8098C14.4742 21.6718 14.24 21.5977 13.9998 21.5977C13.7597 21.5977 13.5255 21.6718 13.329 21.8098L7.59251 25.4498C6.67434 26.0962 5.45751 25.1932 5.83318 24.1443L7.37551 17.6075C7.45552 17.3827 7.46226 17.1383 7.39477 16.9094C7.32728 16.6806 7.18903 16.4789 6.99984 16.3335L2.77651 12.5337C1.91318 11.8652 2.39385 10.5002 3.48818 10.5002H9.42301C9.65668 10.5009 9.88509 10.4307 10.078 10.2989C10.2709 10.167 10.4192 9.97967 10.5033 9.76166L12.9183 3.072H12.9195Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      )}
    </Pressable>
  );
};

export default FavouriteCircle;

const styles = StyleSheet.create({
  icon: {},
});
