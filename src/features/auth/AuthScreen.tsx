import {StyleSheet, KeyboardAvoidingView, ScrollView, View} from 'react-native';
import React from 'react';
import Logister from './Logister';
import colors from '../../constants/colors';
import DispatcherIcon from '../../components/Icons/DispatcherIcon';

const AuthScreen = () => {
  return (
    <ScrollView style={styles.root}>
      <KeyboardAvoidingView style={styles.root} behavior="position">
        <View style={styles.appIconContainer}>
          <DispatcherIcon width={163} height={128} />
        </View>
        <View style={styles.logisterContainer}>
          <Logister />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  appIconContainer: {
    flex: 1,
    height: 250,
    backgroundColor: colors.BLUE_DARK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logisterContainer: {
    flex: 1,
  },
});
