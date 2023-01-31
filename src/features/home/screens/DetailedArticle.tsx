import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';
import {formatService} from '../../../utils/formatters';
import {loremIpsum} from '../../../utils/utils';
import ArticleCategory from '../../auth/components/ArticleCategory';
import ArticleImage from '../components/ArticleImage';

interface DetailedArticleProps {
  route: any;
}

const DetailedArticle = ({route}: DetailedArticleProps) => {
  const {urlToImage, publishedAt, title, author, description} =
    route?.params?.selectedArticle;
  const formattedDate = formatService.getFormattedDate(publishedAt, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'long',
  });
  const renderImage = () => {
    return <ArticleImage urlToImage={urlToImage} />;
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
        <Text style={styles.descriptionText}>{description}..</Text>
        <Text style={styles.lorem}>{loremIpsum(893)}</Text>
        <View style={styles.mainCardImage}>
          <Image source={{uri: urlToImage}} style={styles.image} />
        </View>
        <Text style={styles.lorem}>{loremIpsum(895)}</Text>
      </View>
    );
  };
  return (
    <ScrollView>
      {renderImage()}
      {renderCardContent()}
    </ScrollView>
  );
};

export default DetailedArticle;

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: 449,
    backgroundColor: colors.CLEAN_WHITE,
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
  mainCardImage: {
    height: 204,
    width: '100%',
  },
  lorem: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
    color: colors.BLUE_DARK,
    paddingVertical: 10,
  },
});
