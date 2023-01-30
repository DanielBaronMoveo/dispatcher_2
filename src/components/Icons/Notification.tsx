import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface Props {
  width: number;
  height: number;
  style?: StyleProp<ViewStyle>;
}

const Notification = ({width, height, style}: Props) => {
  return (
    <Svg
      style={[styles.icon, style]}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.91719 11.4891V11.3066C2.94396 10.7667 3.117 10.2436 3.41847 9.79118C3.92026 9.24772 4.26376 8.58176 4.41293 7.86315C4.41293 7.30776 4.41293 6.74442 4.46144 6.18903C4.71208 3.51518 7.3559 1.6665 9.96738 1.6665H10.0321C12.6435 1.6665 15.2874 3.51518 15.5461 6.18903C15.5946 6.74442 15.5461 7.30776 15.5865 7.86315C15.7377 8.58343 16.0809 9.25146 16.581 9.79911C16.8847 10.2475 17.058 10.7687 17.0823 11.3066V11.4812C17.1003 12.2065 16.8505 12.9139 16.3789 13.4727C15.7556 14.1261 14.9099 14.5326 14.0018 14.6152C11.339 14.9008 8.65237 14.9008 5.98952 14.6152C5.08246 14.529 4.23797 14.1231 3.61251 13.4727C3.14817 12.9134 2.9017 12.2103 2.91719 11.4891Z"
        stroke="#B6B6EA"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.9624 17.3765C8.37846 17.8987 8.98945 18.2367 9.66015 18.3156C10.3308 18.3945 11.0059 18.2079 11.536 17.797C11.699 17.6755 11.8457 17.5342 11.9726 17.3765"
        stroke="#B6B6EA"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Notification;

const styles = StyleSheet.create({
  icon: {},
});
