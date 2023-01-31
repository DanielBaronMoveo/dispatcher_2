import {Text, StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';

const ArticleCategory = () => {
  return (
    <View style={styles.categoryContainer}>
      <View style={[styles.catView]}>
        <Text style={styles.categoryText}>General</Text>
      </View>
      <View style={styles.catView}>
        <Text style={styles.categoryText}>+3</Text>
      </View>
    </View>
  );
};

export default ArticleCategory;

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 12,
    lineHeight: 14,
    height: 14,
    color: colors.BLUE_MID,
  },
  categoryContainer: {
    minWidth: '30%',
    flexDirection: 'row',
  },
  catView: {
    backgroundColor: colors.WHITE_DARK,
    borderRadius: 10,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginHorizontal: 5,
  },
});
