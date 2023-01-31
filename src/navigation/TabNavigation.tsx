import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import Favourite from '../components/Icons/Favourite';
import colors from '../constants/colors';
import ProfileScreen from '../features/profile/screens/ProfileScreen';
import FavouriteScreen from '../features/favourites/screens/FavouriteScreen';
import {TabsScreens} from '../constants/screens';
import HomeNavigation from './HomeNavigation';
import Home from '../components/Icons/Home';
import User from '../components/Icons/User';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={TabsScreens.HomeStack}
      screenOptions={{
        tabBarActiveBackgroundColor: colors.BLUE_DARK,
        tabBarInactiveBackgroundColor: colors.BLUE_DARK,
        tabBarActiveTintColor: colors.WHITE_BASE,
        tabBarStyle: styles.container,
      }}>
      <Tab.Screen
        name={TabsScreens.ProfileScreen}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => <User focused={focused} />,
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={TabsScreens.HomeStack}
        component={HomeNavigation}
        options={{
          tabBarIcon: ({focused}) => <Home focused={focused} />,
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={TabsScreens.FavouriteScreen}
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Favourite
              width={28}
              height={28}
              color={focused ? colors.CLEAN_WHITE : '#B6B6EA'}
              focused={focused}
            />
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0,
    height: 74,
    backgroundColor: colors.BLUE_DARK,
    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
