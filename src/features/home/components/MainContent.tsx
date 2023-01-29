import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';
import BaseText from '../../../components/Text/BaseText';
import {articleApi} from '../../../api/article.api';
import ArticleCard from './ArticleCard';
import auth from '@react-native-firebase/auth';
import {formatService} from '../../../utils/formatters';

const MainContent = () => {
  const user = auth().currentUser;
  const {
    data: articles,
    error,
    isLoading,
  } = articleApi.useGetTopHeadlinesArticlesInCountryQuery('us');
  const lastSignInTime = user?.metadata.lastSignInTime;
  const formattedDate = formatService.getFormattedDate(lastSignInTime!);
  const formattedTime = formatService.getFormattedTime(lastSignInTime!, {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  const renderItem = ({item}: any) => (
    <ArticleCard
      style={styles.card}
      title={item.title}
      description={item.description}
      urlToImage={item.urlToImage}
      publishedAt={item.publishedAt}
      author={item.author}
    />
  );

  const renderHeaderList = () => (
    <>
      <Text style={styles.lastLoginText}>
        Last Login: {formattedTime}, {formattedDate}
      </Text>
      <BaseText style={styles.mainHeader}>Top Headlines in Israel</BaseText>
    </>
  );

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Something went wrong! Try again later... </Text>;
  }

  return (
    <View style={styles.main}>
      <View style={styles.mainContentContainer}>
        <View style={styles.content}>
          <FlatList
            ListHeaderComponent={renderHeaderList}
            data={articles?.articles}
            renderItem={({item}) => renderItem({item})}
          />
        </View>
      </View>
    </View>
  );
};

export default MainContent;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 16,
  },
  lastLoginText: {
    fontSize: 12,
    lineHeight: 22,
    fontWeight: '500',
    color: colors.BLUE_MID,
    paddingTop: 5,
  },
  mainContentContainer: {
    flex: 1,
    paddingTop: 12,
    justifyContent: 'flex-start',
  },
  mainHeader: {
    fontSize: 24,
    lineHeight: 32,
    color: colors.BLUE_DARK,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    marginVertical: 10,
  },
});
