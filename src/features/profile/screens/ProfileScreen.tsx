import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import colors from '../../../constants/colors';
import ProfileHeader from '../components/ProfileHeader';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../state/store';
import {logout} from '../../auth/state/auth.actions';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';
const ProfileScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = auth().currentUser;

  const signOut = () => {
    dispatch(logout());
  };
  return (
    <SafeAreaView style={styles.root}>
      <ProfileHeader user={user} />
      <View style={styles.profileContainer}>
        <PrimaryButton text={'Sign out'} onPress={signOut} />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.BLUE_DARK,
  },
  profileContainer: {
    flex: 1,
    backgroundColor: colors.CLEAN_WHITE,
  },
});
