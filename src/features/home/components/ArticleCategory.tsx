import {Text, StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';

const ArticleCategory = () => {
  return (
    <View style={styles.categoryContainer}>
      <View style={styles.catView}>
        <Text style={styles.categoryText}>General</Text>
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
    height: 20,
    color: colors.BLUE_MID,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginHorizontal: 5,
    backgroundColor: colors.WHITE_DARK,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: 'transparent',
    borderRadius: 10,
  },
  categoryContainer: {
    minWidth: '30%',
  },
  catView: {
    flexDirection: 'row',
  },
});
