import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../../constants/colors';
import Navbar from '../../home/components/Navbar';

const FavouriteScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navbar />
      <View style={styles.favouriteContainer}>
        <Text style={styles.favouriteText}>Saved articles</Text>
      </View>
    </SafeAreaView>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.BLUE_DARK,
  },
  favouriteContainer: {
    flex: 1,
    backgroundColor: colors.CLEAN_WHITE,
  },
  favouriteText: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '500',
    paddingHorizontal: 16,
    paddingTop: 15,
    color: colors.BLUE_DARK,
  },
});
