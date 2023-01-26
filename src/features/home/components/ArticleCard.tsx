import {
  View,
  Text,
  Image,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';
import FavouriteCircle from '../../../components/Icons/FavouriteCircle';

interface ArticleCardProps {
  style?: StyleProp<ViewStyle>;
  urlToImage: string;
  publishedAt: string;
  title: string;
  author: string | null;
  description: string;
}

const ArticleCard = ({
  style,
  urlToImage,
  publishedAt,
  title,
  author,
  description,
}: ArticleCardProps) => {
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'long',
  });

  return (
    <View style={[styles.cardContainer, style]}>
      <View style={styles.imageContainer}>
        <Image source={{uri: urlToImage}} style={styles.image} />
        <View style={styles.favIcon}>
          <FavouriteCircle width={30} height={30} />
        </View>
      </View>
      <View style={styles.cardContent}>
        <View style={styles.publishedContainer}>
          <Text style={styles.publishedText}>{formattedDate}</Text>
        </View>
        <View style={styles.articleTitleContainer}>
          <Text style={styles.articleTitle}>{title}</Text>
        </View>
        <View style={styles.authorContainer}>
          <Text style={styles.authorText}>{author ? author : 'Unknown'}</Text>
        </View>
        <View style={styles.describtionContainer}>
          <Text style={styles.descriptionText}>{description}..</Text>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            text="NAVIAGTE TO DISPATCH"
            icon={true}
            primary={true}
            onPress={() => console.log('navigate to dispatch')}
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
};

export default ArticleCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: 449,
    backgroundColor: colors.WHITE_BASE,
    borderWidth: 1,
    borderColor: '#d9dbe9',
    borderRadius: 20,
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    position: 'relative',
  },
  imageContainer: {
    width: '100%',
    height: 149,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  favIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
    flex: 1,
  },
  cardContent: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  publishedText: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: colors.BLUE_MID,
  },
  publishedContainer: {
    paddingVertical: 10,
  },
  authorContainer: {
    paddingVertical: 10,
  },
  authorText: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: colors.BLUE_MID,
  },
  articleTitleContainer: {
    width: '100%',
    // height: 70,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21,
    color: colors.BLUE_DARK,
  },
  describtionContainer: {
    width: 311,
    height: 96,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
    color: colors.BLUE_DARK,
  },
  buttonContainer: {
    width: '100%',
    paddingBottom: 16,
  },
  button: {
    position: 'absolute',
    bottom: 16,
  },
});
