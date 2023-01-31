import React from 'react';
import Icon from './Icon';
import colors from '../../constants/colors';
import {Rect, Svg} from 'react-native-svg';
import {StyleSheet} from 'react-native';

interface UserProps {
  focused: boolean;
}

const User = ({focused}: UserProps) => {
  return (
    <>
      <Icon
        path={
          'M14 14C15.3924 14 16.7277 13.4469 17.7123 12.4623C18.6969 11.4777 19.25 10.1424 19.25 8.75C19.25 7.35761 18.6969 6.02226 17.7123 5.03769C16.7277 4.05312 15.3924 3.5 14 3.5C12.6076 3.5 11.2723 4.05312 10.2877 5.03769C9.30312 6.02226 8.75 7.35761 8.75 8.75C8.75 10.1424 9.30312 11.4777 10.2877 12.4623C11.2723 13.4469 12.6076 14 14 14ZM17.5 8.75C17.5 9.67826 17.1313 10.5685 16.4749 11.2249C15.8185 11.8813 14.9283 12.25 14 12.25C13.0717 12.25 12.1815 11.8813 11.5251 11.2249C10.8687 10.5685 10.5 9.67826 10.5 8.75C10.5 7.82174 10.8687 6.9315 11.5251 6.27513C12.1815 5.61875 13.0717 5.25 14 5.25C14.9283 5.25 15.8185 5.61875 16.4749 6.27513C17.1313 6.9315 17.5 7.82174 17.5 8.75ZM24.5 22.75C24.5 24.5 22.75 24.5 22.75 24.5H5.25C5.25 24.5 3.5 24.5 3.5 22.75C3.5 21 5.25 15.75 14 15.75C22.75 15.75 24.5 21 24.5 22.75ZM22.75 22.743C22.7482 22.3125 22.4805 21.0175 21.294 19.831C20.153 18.69 18.0057 17.5 14 17.5C9.9925 17.5 7.847 18.69 6.706 19.831C5.5195 21.0175 5.2535 22.3125 5.25 22.743H22.75Z'
        }
        width={28}
        height={28}
        color={focused ? colors.CLEAN_WHITE : '#B6B6EA'}
      />
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

export default User;

const styles = StyleSheet.create({
  selectedLine: {
    paddingTop: 7.5,
  },
});
