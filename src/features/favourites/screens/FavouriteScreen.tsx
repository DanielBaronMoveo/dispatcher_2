import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../../constants/colors';
import Navbar from '../../home/components/Navbar';

const FavouriteScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navbar />
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text>FavouriteScreen</Text>
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
});
