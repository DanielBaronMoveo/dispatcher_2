import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';

interface AvatarProps {
  user: any;
}

const Avatar = ({user}: AvatarProps) => {
  const avatar = user.email[0].toUpperCase();
  return (
    <View style={styles.root}>
      <Text style={styles.avatar}>{avatar}</Text>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  root: {
    width: 49,
    height: 49,
    borderRadius: 24.5,
    backgroundColor: '#c4c4c4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    fontSize: 24,
    color: colors.WHITE_BASE,
  },
});
