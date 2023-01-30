import {StyleSheet, Button, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import colors from '../../../constants/colors';
import ProfileHeader from '../components/ProfileHeader';
import {resetTo} from '../../../navigation/RootNavigation';
import {Screens} from '../../../constants/screens';

const ProfileScreen = () => {
  const user = auth().currentUser;

  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        showMessage({
          message: 'User signed out successfully!',
          type: 'success',
        });
      })
      .then(() => {
        resetTo(Screens.AuthScreen);
      });
  };
  return (
    <SafeAreaView style={styles.root}>
      <ProfileHeader user={user} />
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Button title="Sign out" onPress={signOut} />
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
});
