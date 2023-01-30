export type RootStackParamList = {
  AuthScreen: undefined;
  TabScreens: undefined;
};

export type TabsParamsList = {
  HomeStack: undefined;
  ProfileScreen: undefined;
  FavouriteScreen: undefined;
};

export type HomeStackList = {
  HomeScreen: undefined;
  DetailedArticleScreen: undefined;
};

export const Screens: {
  AuthScreen: keyof RootStackParamList;
  TabScreens: keyof RootStackParamList;
} = {
  AuthScreen: 'AuthScreen',
  TabScreens: 'TabScreens',
};

export const TabsScreens: {
  ProfileScreen: keyof TabsParamsList;
  HomeStack: keyof TabsParamsList;
  FavouriteScreen: keyof TabsParamsList;
} = {
  ProfileScreen: 'ProfileScreen',
  HomeStack: 'HomeStack',
  FavouriteScreen: 'FavouriteScreen',
};

export const HomeStackScreens: {
  HomeScreen: keyof HomeStackList;
  DetailedArticleScreen: keyof HomeStackList;
} = {
  HomeScreen: 'HomeScreen',
  DetailedArticleScreen: 'DetailedArticleScreen',
};
