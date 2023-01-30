import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackScreens} from '../constants/screens';
import HomeScreen from '../features/home/screens/HomeScreen';
import DetailedArticle from '../features/home/screens/DetailedArticle';
import {Article} from '../models/article';
const Stack = createNativeStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={HomeStackScreens.HomeScreen}>
      <Stack.Screen
        name={HomeStackScreens.HomeScreen}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={HomeStackScreens.DetailedArticleScreen}
        component={DetailedArticle}
        options={{}}
        initialParams={{article: {} as Article}}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
