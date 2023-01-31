import {View, Image, StyleSheet, StyleProp, ImageStyle} from 'react-native';
import React from 'react';
import FavouriteCircle from '../../../components/Icons/FavouriteCircle';

interface ArticleImageProps {
  urlToImage: string;
  style?: StyleProp<ImageStyle>;
}

const ArticleImage = ({urlToImage, style}: ArticleImageProps) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={{uri: urlToImage}} style={[styles.image, style]} />
      <View style={styles.favIcon}>
        <FavouriteCircle width={30} height={30} />
      </View>
    </View>
  );
};

export default ArticleImage;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 149,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  favIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
    flex: 1,
  },
});
