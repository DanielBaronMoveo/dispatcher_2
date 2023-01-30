import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';
import FilterArrow from '../../../components/Icons/FilterArrow';
import FilterIcon from '../../../components/Icons/FilterIcon';

const Filterbar = () => {
  return (
    <View style={styles.filterbar}>
      <View style={styles.filterInnerContainer}>
        <View style={styles.sortContainer}>
          <Text style={styles.sortText}>Sort by</Text>
          <FilterArrow width={18} height={18} />
        </View>
        <View>
          <FilterIcon width={28} height={28} />
        </View>
      </View>
    </View>
  );
};

export default Filterbar;

const styles = StyleSheet.create({
  filterbar: {
    width: '100%',
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: colors.CLEAN_WHITE,
  },
  filterInnerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sortContainer: {
    flexDirection: 'row',
    width: 78,
    justifyContent: 'space-between',
  },
  sortText: {
    fontSize: 16,
    lineHeight: 22,
    color: colors.BLUE_MID,
    textAlign: 'center',
  },
});
