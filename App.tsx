import React, {useEffect, useState} from 'react';
import {Button, StatusBar, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AuthScreen from './src/features/auth/AuthScreen';

import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import {Provider} from 'react-redux';
import {store} from './src/state/store';
import HomeScreen from './src/features/home/screens/HomeScreen';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  function onAuthStateChanged(enteredUser: FirebaseAuthTypes.User | null) {
    setUser(enteredUser);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) {
    return null;
  }

  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        showMessage({
          message: 'User signed out successfully!',
          type: 'success',
        });
      });
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaProvider style={styles.root}>
        <Provider store={store}>
          {!user ? (
            <AuthScreen />
          ) : (
            // <SafeAreaView>
            //   <Text>Welcome {user.email}</Text>
            //   <Button title="Sign out" onPress={signOut} />
            // </SafeAreaView>
            <HomeScreen />
          )}
          <FlashMessage position="top" />
        </Provider>
      </SafeAreaProvider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
