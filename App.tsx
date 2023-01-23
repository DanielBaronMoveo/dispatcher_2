import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import PrimaryButton from './src/components/Buttons/PrimaryButton';
import InputField from './src/components/InputField/InputField';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.root}>
        <View style={styles.inputsContainer}>
          <InputField type="email" placeholder="Your email" />
          <InputField type="password" placeholder="Password" />
          <InputField type="password" placeholder="Re-Enter Password" />
        </View>
        <View style={styles.controlsContainer}>
          <PrimaryButton
            primary={true}
            onPress={() => console.log('Signup Pressed!')}
            text={'Signup'}
            icon={true}
            style={styles.primaryBtn}
          />
          <PrimaryButton
            text={'Login'}
            onPress={() => console.log('Login Pressed!')}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 24,
    alignItems: 'center',
  },
  inputsContainer: {
    width: 335,
  },
  controlsContainer: {
    width: 335,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryBtn: {
    marginBottom: 24,
  },
});
