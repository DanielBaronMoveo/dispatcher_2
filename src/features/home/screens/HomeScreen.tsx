import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Navbar from '../components/Navbar';
import Filterbar from '../components/Filterbar';
// import Tabbar from '../components/Tabbar';
import MainContent from '../components/MainContent';
import colors from '../../../constants/colors';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navbar />
      <Filterbar />
      <MainContent />
      {/* <Tabbar /> */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.BLUE_DARK,
  },
});
