import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import {store} from './src/state/store';
import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
  const onAuthStateChanged = (enteredUser: FirebaseAuthTypes.User | null) => {
    setUser(enteredUser);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaProvider style={styles.root}>
        <Provider store={store}>
          <AppNavigation />
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
