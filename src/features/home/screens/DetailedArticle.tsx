import {View, Text} from 'react-native';
import React from 'react';

const DetailedArticle = ({route}) => {
  console.log(route?.params?.article);

  return (
    <View>
      <Text>DetailedArticle</Text>
    </View>
  );
};

export default DetailedArticle;
