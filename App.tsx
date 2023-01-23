import React from 'react';
import {StatusBar} from 'react-native';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LoginScreen from './src/features/auth/AuthScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaProvider style={styles.root}>
        <LoginScreen />
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
