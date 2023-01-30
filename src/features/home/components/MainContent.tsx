import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';
import BaseText from '../../../components/Text/BaseText';
import {articleApi} from '../../../api/article.api';
import ArticleCard from './ArticleCard';
import auth from '@react-native-firebase/auth';
import {formatService} from '../../../utils/formatters';
import {
  LAST_LOGIN,
  TOP_HEADLINES_IN_ISRAEL,
} from '../../../constants/constants';

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
  const lastLoginText = `${LAST_LOGIN} ${formattedTime}, ${formattedDate}`;
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
      <Text style={styles.lastLoginText}>{lastLoginText}</Text>
      <BaseText style={styles.mainHeader}>{TOP_HEADLINES_IN_ISRAEL}</BaseText>
    </>
  );

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={colors.BLUE_DARK} />
      </View>
    );
  }

  if (error) {
    return <Text>Something went wrong! Try again later... </Text>;
  }

  return (
    <View style={styles.main}>
      <FlatList
        ListHeaderComponent={renderHeaderList}
        data={articles?.articles}
        renderItem={({item}) => renderItem({item})}
      />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lastLoginText: {
    fontSize: 12,
    lineHeight: 22,
    fontWeight: '500',
    color: colors.BLUE_MID,
    paddingTop: 5,
  },
  mainHeader: {
    fontSize: 24,
    lineHeight: 32,
    color: colors.BLUE_DARK,
  },
  card: {
    marginVertical: 10,
  },
});
