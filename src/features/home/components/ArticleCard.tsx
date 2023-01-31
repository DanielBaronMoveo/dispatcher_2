import {View, Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';
import {formatService} from '../../../utils/formatters';
import {navigate} from '../../../navigation/RootNavigation';
import {HomeStackScreens} from '../../../constants/screens';
import {SelectedArticle} from '../../../models/article';
import ArticleCategory from './ArticleCategory';
import ArticleImage from './ArticleImage';

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
  const selectedArticle: SelectedArticle = {
    urlToImage,
    publishedAt,
    title,
    author,
    description,
  };
  const formattedDate = formatService.getFormattedDate(publishedAt, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'long',
  });
  const renderImage = () => {
    return <ArticleImage urlToImage={urlToImage} style={styles.image} />;
  };
  const renderCardContent = () => {
    return (
      <View style={styles.cardContent}>
        <View style={styles.publishedContainer}>
          <Text style={styles.publishedText}>{formattedDate}</Text>
          <ArticleCategory />
        </View>
        <Text style={styles.articleTitle}>{title}</Text>
        <Text style={styles.authorText}>{author ? author : 'Unknown'}</Text>
        <Text numberOfLines={5} style={styles.descriptionText}>
          {description}..
        </Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            text="NAVIAGTE TO DISPATCH"
            icon={true}
            primary={true}
            onPress={() =>
              navigate(HomeStackScreens.DetailedArticleScreen, {
                selectedArticle,
              })
            }
            style={styles.button}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={[styles.cardContainer, style]}>
      {renderImage()}
      {renderCardContent()}
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
  },
  publishedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  publishedText: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: colors.BLUE_MID,
    paddingVertical: 10,
  },
  authorText: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: colors.BLUE_MID,
    paddingBottom: 10,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 20,
    color: colors.BLUE_DARK,
    paddingBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
    color: colors.BLUE_DARK,
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    paddingBottom: 16,
  },
  button: {
    position: 'absolute',
    bottom: 16,
  },
});
