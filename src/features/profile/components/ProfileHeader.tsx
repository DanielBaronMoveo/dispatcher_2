import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';
import Avatar from './Avatar';

interface ProfileHeaderProps {
  user: any;
}

const ProfileHeader = ({user}: ProfileHeaderProps) => {
  const tempUserName = user.email.split('@')[0];
  return (
    <View style={styles.root}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.textHeader}>Welcome {tempUserName}</Text>
          <Text>Edit my profile</Text>
        </View>
        <Avatar user={user} />
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 79,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: colors.WHITE_BASE,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 24,
    lineHeight: 32,
    color: colors.BLUE_DARK,
  },
  editText: {
    fontSize: 14,
    lineHeight: 32,
    color: '#575565',
  },
});
